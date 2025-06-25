const crypto = require('crypto');

// La clave pública de Adyen del archivo adyenApi.js
const ADYEN_PUBLIC_KEY_STRING = "10001|B8312CC1095F801C198ECB224223EF231C2D8C7869F9844A5DDFBA3828612D5A3C4882B4431754BF83DE854056F49075DC8F9EB45262C48EE1F19FF1BE2C55CE6705850E85B6C74251E94228052A388E2CE12F3CE4E947347D677D72DE9B2FA21522D315AD3A522DD8C093686EB95D48378A5F823A32830463689655367D4181736528EEEA005F9E38B8C6E91C83EB76209CCEBE1F235112068505F8232412A1CEA82E85C32E5A0C75FC4DD14FF2AEC37EB858A0D917660004AD068EB6B7D33821534DBB626CF1D976D50BCAE8BAE1C3487C1F413AC38BC79BCC7C7F1C1353B28596432FD6D3840CC2F056ACEA055D552B8F3D57A3FD97B9D2E2FBBE4CB3C115";

/**
 * Convierte un string hexadecimal a Base64URL.
 * @param {string} hexString
 * @returns {string}
 */
function hexToBase64Url(hexString) {
  return Buffer.from(hexString, 'hex').toString('base64url');
}

/**
 * Crea un KeyObject de Node.js a partir de la clave pública de Adyen.
 * @param {string} adyenKeyString - La clave pública en formato Adyen (Exponent|Modulus en HEX).
 * @returns {crypto.KeyObject}
 */
function createAdyenPublicKeyObject(adyenKeyString) {
  const parts = adyenKeyString.split('|');
  if (parts.length !== 2) {
    throw new Error('Formato de clave pública de Adyen inválido.');
  }
  const exponentHex = parts[0];
  const modulusHex = parts[1];

  // El exponente público '10001' (hex) es 65537 (decimal).
  // Para JWK, el exponente 'e' es Base64URL(representación big-endian del exponente).
  // 65537 = 0x010001. En bytes: [0x01, 0x00, 0x01]
  const exponentBuffer = Buffer.from('010001', 'hex');


  const jwk = {
    kty: 'RSA',
    n: hexToBase64Url(modulusHex),
    e: exponentBuffer.toString('base64url'), //  hexToBase64Url(exponentHex) -> incorrecto, debe ser el valor del byte.
  };

  try {
    return crypto.createPublicKey({ key: jwk, format: 'jwk' });
  } catch (error) {
    console.error("Error creando KeyObject desde JWK:", error);
    console.error("JWK intentado:", JSON.stringify(jwk));
    throw error;
  }
}

const ADYEN_KEY_OBJECT = createAdyenPublicKeyObject(ADYEN_PUBLIC_KEY_STRING);

/**
 * Encripta datos usando RSA-OAEP y AES-GCM (formato JWE).
 * @param {Buffer} plaintextBuffer - Los datos a encriptar.
 * @param {crypto.KeyObject} publicKeyObject - El KeyObject de la clave pública RSA.
 * @param {string} jweEnc - El algoritmo de encriptación de contenido JWE (ej: "A256GCM").
 * @returns {string} El JWE en formato compacto.
 */
function encryptWithJweFormat(plaintextBuffer, publicKeyObject, jweEnc = "A256GCM") {
  let cekSizeBytes;
  let ivSizeBytes;
  let authTagLengthBytes = 16; // Para GCM
  let aesAlgorithm;
  let hmacAlgorithmName; // Para CBC+HMAC
  let hmacKeySizeBytes; // Para CBC+HMAC
  let encKeySizeBytes; // Para CBC+HMAC


  // Determinar parámetros basados en jweEnc
  switch (jweEnc) {
    case "A128GCM":
      cekSizeBytes = 16; ivSizeBytes = 12; aesAlgorithm = 'aes-128-gcm';
      break;
    case "A256GCM":
      cekSizeBytes = 32; ivSizeBytes = 12; aesAlgorithm = 'aes-256-gcm';
      break;
    case "A256CBC-HS512": // Usado para encryptedSecurityCode
      // CEK para A256CBC-HS512 es de 512 bits.
      // Los primeros 256 bits son la clave MAC (HMAC-SHA512), los siguientes 256 bits son la clave de cifrado AES-256-CBC.
      hmacKeySizeBytes = 32; // SHA-256 para HMAC (HS256) o 64 para SHA-512 (HS512)
      encKeySizeBytes = 32;  // AES-256
      cekSizeBytes = hmacKeySizeBytes + encKeySizeBytes; // Total 64 bytes para HS512 + AES256
      ivSizeBytes = 16; // AES block size
      aesAlgorithm = 'aes-256-cbc';
      hmacAlgorithmName = 'sha512'; // HS512
      break;
    default:
      throw new Error(`Unsupported JWE encryption algorithm: ${jweEnc}`);
  }

  const cek = crypto.randomBytes(cekSizeBytes);
  const iv = crypto.randomBytes(ivSizeBytes);

  const protectedHeader = { alg: "RSA-OAEP", enc: jweEnc, version: "1" };
  if (jweEnc === "A256CBC-HS512") { // Adyen usa "HSM512" en su ejemplo, pero es probable que sea un error tipográfico por "HS512"
    protectedHeader.enc = "A256CBC-HS512"; // Asegurar que sea el estándar
  }
  const protectedHeaderB64 = Buffer.from(JSON.stringify(protectedHeader)).toString('base64url');

  // 2. Encriptar la CEK con RSA-OAEP
  const encryptedCek = crypto.publicEncrypt(
    {
      key: publicKeyObject,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha1', // Adyen especifica SHA-1 para MGF1 con RSA-OAEP si no se indica lo contrario
    },
    cek
  );

  let ciphertext;
  let authTag;

  if (jweEnc.includes('GCM')) {
    const cipher = crypto.createCipheriv(aesAlgorithm, cek, iv);
    // AAD para GCM es el header protegido en base64url
    cipher.setAAD(Buffer.from(protectedHeaderB64, 'utf-8'));
    ciphertext = Buffer.concat([cipher.update(plaintextBuffer), cipher.final()]);
    authTag = cipher.getAuthTag();
  } else if (jweEnc === 'A256CBC-HS512') {
    // Separar la CEK en clave MAC y clave de cifrado
    const macKey = cek.subarray(0, hmacKeySizeBytes);
    const encKey = cek.subarray(hmacKeySizeBytes);

    // Cifrar con AES-CBC
    const cipher = crypto.createCipheriv(aesAlgorithm, encKey, iv);
    ciphertext = Buffer.concat([cipher.update(plaintextBuffer), cipher.final()]);

    // Calcular HMAC
    // AAD para HMAC es el header protegido en base64url
    const aad = Buffer.from(protectedHeaderB64, 'utf-8');
    const hmacInput = Buffer.concat([aad, iv, ciphertext]);
    const hmac = crypto.createHmac(hmacAlgorithmName, macKey);
    hmac.update(hmacInput);
    authTag = hmac.digest().subarray(0, 32); // Tomar los primeros 256 bits del HMAC-SHA512 para el tag
  } else {
      throw new Error(`Cipher mode for ${jweEnc} not implemented`);
  }

  const encryptedCekB64 = encryptedCek.toString('base64url');
  const ivB64 = iv.toString('base64url');
  const ciphertextB64 = ciphertext.toString('base64url');
  const authTagB64 = authTag.toString('base64url');

  return `${protectedHeaderB64}.${encryptedCekB64}.${ivB64}.${ciphertextB64}.${authTagB64}`;
}

/**
 * Encripta los datos de la tarjeta.
 */
async function encryptCardData(cardNumber, expiryMonth, expiryYear, cvc) {
  try {
    const generationtime = new Date().toISOString();

    const cardData = { number: cardNumber, generationtime };
    const monthData = { month: expiryMonth, generationtime };
    const yearData = { year: expiryYear, generationtime };
    const cvcData = { cvc: cvc, generationtime };

    const encryptedCardNumber = encryptWithJweFormat(Buffer.from(JSON.stringify(cardData)), ADYEN_KEY_OBJECT, "A256GCM");
    const encryptedExpiryMonth = encryptWithJweFormat(Buffer.from(JSON.stringify(monthData)), ADYEN_KEY_OBJECT, "A256GCM");
    const encryptedExpiryYear = encryptWithJweFormat(Buffer.from(JSON.stringify(yearData)), ADYEN_KEY_OBJECT, "A256GCM");

    // El CVV usa A256CBC-HS512 según el ejemplo en Analyze and Implement.txt
    // "encryptedSecurityCode":"eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkEyNTZDQkMtSFM1MTIiLCJ2ZXJzaW9uIjoiMSJ9..."
    // El header decodificado es: {"alg":"RSA-OAEP","enc":"A256CBC-HS512","version":"1"}
    const encryptedSecurityCode = encryptWithJweFormat(Buffer.from(JSON.stringify(cvcData)), ADYEN_KEY_OBJECT, "A256CBC-HS512");

    return {
      encryptedCardNumber,
      encryptedExpiryMonth,
      encryptedExpiryYear,
      encryptedSecurityCode,
    };
  } catch (error) {
    console.error('Error durante la encriptación de Adyen:', error);
    throw error;
  }
}

module.exports = {
  encryptCardData,
  ADYEN_KEY_OBJECT
};

// Ejemplo de uso (para pruebas locales)
async function testEncryption() {
  if (require.main === module) {
    try {
      // console.log("Adyen Key Object:", ADYEN_KEY_OBJECT); // Puede ser muy verboso
      const encryptedData = await encryptCardData("4111111111111111", "12", "2030", "123");
      console.log("\nDatos Encriptados:");
      console.log("encryptedCardNumber (A256GCM):", encryptedData.encryptedCardNumber);
      console.log("encryptedExpiryMonth (A256GCM):", encryptedData.encryptedExpiryMonth);
      console.log("encryptedExpiryYear (A256GCM):", encryptedData.encryptedExpiryYear);
      console.log("encryptedSecurityCode (A256CBC-HS512):", encryptedData.encryptedSecurityCode);

    } catch (e) {
      console.error("Prueba de encriptación fallida:", e);
    }
  }
}

testEncryption();
