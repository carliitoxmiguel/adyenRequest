const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Endpoint de prueba inicial (ahora servido por express.static si hay un index.html en public)
// app.get('/', (req, res) => {
//   res.send('Servidor Node.js para Adyen funcionando!');
// });

const { encryptCardData } = require('./adyenEncryptor');
const https = require('https'); // Usar https para la llamada a la API externa
const { v4: uuidv4 } = require('uuid'); // Para checkoutAttemptId y shopperReference

// Endpoint para iniciar el pago
app.post('/initiatePayment', async (req, res) => {
  console.log('Datos recibidos en /initiatePayment:', req.body);
  const { cardNumber, expiryMonth, expiryYear, cvc, holderName } = req.body;

  if (!cardNumber || !expiryMonth || !expiryYear || !cvc) {
    return res.status(400).json({ message: 'Faltan datos de la tarjeta (cardNumber, expiryMonth, expiryYear, cvc son obligatorios).' });
  }

  try {
    const encryptedData = await encryptCardData(cardNumber, expiryMonth, expiryYear, cvc);
    console.log('Datos encriptados:', encryptedData);

    const checkoutAttemptId = uuidv4(); // Generar un ID único
    const shopperReference = uuidv4(); // Generar un ID único

    // Construir el payload para la API de Adyen
    // Adaptado de Analyze and Implement.txt, simplificando algunos campos
    const adyenPayload = {
      riskData: { // Mantener riskData.clientData como en el ejemplo, o generar uno nuevo si es necesario/posible
        clientData: "eyJ2ZXJzaW9uIjoiMS4wLjAiLCJkZXZpY2VGaW5nZXJwcmludCI6IkRwcXdVNHpFZE4wMDUwMDAwMDAwMDAwMDAwTGxEeVo0OW5qRDAwNTAyNzE1NzZjVkI5NGlLekJHREdiR3RVS0o5TUJpeDdSWDNhejgwMDJEYUJraW5kOU1sMDAwMDBxWmtURTAwMDAwZzRhVU5vWTM5b0RXdDlvd0xtRUk6NDAiLCJwZXJzaXN0ZW50Q29va2llIjpbIl9ycF91aWQ9MTFjMzIzOGUtNjFhNS0xOTllLTE1NWEtNmRkNDA4ZWU3NWNkIl0sImNvbXBvbmVudHMiOnsidXNlckFnZW50IjoiNmIzYjhlOTI3NTMxYzhmMmE4M2MyYmM4YWU1ODkzYjgiLCJ3ZWJkcml2ZXIiOjAsImxhbmd1YWdlIjoiZW4tVVMiLCJjb2xvckRlcHRoIjoyNCwiZGV2aWNlTWVtb3J5Ijo0LCJwaXhlbFJhdGlvIjoxLCJoYXJkd2FyZUNvbmN1cnJlbmN5Ijo0LCJzY3JlZW5XaWR0aCI6MTkyMCwic2NyZWVuSGVpZ2h0IjoxMDgwLCJhdmFpbGFibGVTY3JlZW5XaWR0aCI6MTkyMCwiYXZhaWxhYmxlU2NyZWVuSGVpZ2h0IjoxMDQwLCJ0aW1lem9uZU9mZnNldCI6MzAwLCJ0aW1lem9uZSI6IkFtZXJpY2EvQ2hpY2FnbyIsInNlc3Npb25TdG9yYWdlIjoxLCJsb2NhbFN0b3JhZ2UiOjEsImluZGV4ZWREYiI6MSwiYWRkQmVoYXZpb3IiOjAsIm9wZW5EYXRhYmFzZSI6MCwicGxhdGZvcm0iOiJXaW4zMiIsInBsdWdpbnMiOiIyOWNmNzFlM2Q4MWQ3NGQ0M2E1YjBlYjc5NDA1YmE4NyIsImNhbnZhcyI6IjllMDRjMDFjYjQ3ZTA0ZDk0OTJlNjAwYTQ4MThlYzFmIiwid2ViZ2wiOiI4M2ZhOGU2NmY2Y2VkOTE3N2UxYWNiOTE1MDdjNWY2YiIsIndlYmdsVmVuZG9yQW5kUmVuZGVyZXIiOiJHb29nbGUgSW5jLiAoSW50ZWwpfkFOR0xFIChJbnRlbCwgSW50ZWwoUikgSEQgR3JhcGhpY3MgNjIwICgweDAwMDA1OTE2KSBEaXJlY3QzRDExIHZzXzVfMCBwc181XzAsIEQzRDExKSIsImFkQmxvY2siOjAsImhhc0xpZWRMYW5ndWFnZXMiOjAsImhhc0xpZWRSZXNvbHV0aW9uIjowLCJoYXNMaWVkT3MiOjAsImhhc0xpZWRCcm93c2VyIjowLCJmb250cyI6ImNkNDZiMDFlZjFiYjQ2MGFjMWQzNzRhM2FmYmU5YjBlIiwiYXVkaW8iOiI5MDJmMGZlOTg3MTliNzc5ZWEzN2YyNzUyOGRmYjBhYSIsImVudW1lcmF0ZURldmljZXMiOiI1ZjNmZGFmNDc0M2VhYTcwN2NhNmI3ZGE2NTYwMzg5MiIsInZpc2l0ZWRQYWdlcyI6W10sImJhdHRlcnlJbmZvIjp7ImJhdHRlcnlMZXZlbCI6MTAwLCJiYXR0ZXJ5Q2hhcmdpbmciOnRydWV9LCJib3REZXRlY3RvcnMiOnsid2ViRHJpdmVyIjpmYWxzZSwiY29va2llRW5hYmxlZCI6dHJ1ZSwiaGVhZGxlc3NCcm93c2VyIjpmYWxzZSwibm9MYW5ndWFnZXMiOmZhbHNlLCJpbmNvbnNpc3RlbnRFdmFsIjpmYWxzZSwiaW5jb25zaXN0ZW50UGVybWlzc2lvbnMiOmZhbHNlLCJkb21NYW5pcHVsYXRpb24iOmZhbHNlLCJhcHBWZXJzaW9uU3VzcGljaW91cyI6ZmFsc2UsImZ1bmN0aW9uQmluZFN1c3BpY2lvdXMiOnRydWUsImJvdEluVXNlckFnZW50IjpmYWxzZSwid2luZG93U2l6ZVN1c3BpY2lvdXMiOmZhbHNlLCJib3RJbldpbmRvd0V4dGVybmFsIjpmYWxzZSwid2ViR0wiOmZhbHNlfX19"
      },
      paymentMethod: {
        type: "scheme", // 'scheme' es para tarjetas de crédito/débito generales
        holderName: holderName || "Test Holder", // Usar el que viene o uno por defecto
        encryptedSecurityCode: encryptedData.encryptedSecurityCode,
        encryptedCardNumber: encryptedData.encryptedCardNumber,
        encryptedExpiryMonth: encryptedData.encryptedExpiryMonth,
        encryptedExpiryYear: encryptedData.encryptedExpiryYear,
        brand: "visa", // Se puede intentar detectar o dejar fijo para prueba
        checkoutAttemptId: checkoutAttemptId
      },
      storePaymentMethod: false,
      browserInfo: { // Valores fijos de ejemplo
        acceptHeader: "*/*",
        colorDepth: 24,
        language: "en-US",
        javaEnabled: false,
        screenHeight: 1080,
        screenWidth: 1920,
        userAgent: "Mozilla/5.0 (Node.js Test Environment)",
        timeZoneOffset: 300
      },
      origin: "https://www.petsuppliesplus.com", // Debe coincidir con el origen esperado por la API
      clientStateDataIndicator: true,
      shopperReference: shopperReference, // Usar el generado
      shopperName: holderName || "Test Holder",
      telephoneNumber: "3054515444", // Valor de ejemplo
      shopperEmail: "test@example.com", // Valor de ejemplo
      billingAddress: { // Valores de ejemplo
        street: "123 Test St",
        houseNumberOrName: "",
        city: "Testville",
        postalCode: "12345",
        stateOrProvince: "CA",
        country: "US"
      },
      additionalData: { // Dejar vacío o con valores de ejemplo
        "enhancedSchemeData.shipFromPostalCode": "",
      },
      merchantReference: `node-test-${Date.now()}`, // Referencia única de comerciante
      amount: { // Importante: Adyen usualmente requiere un valor > 0 para pagos reales, 0 es para zero-auth/verificación
        currency: "USD",
        value: 0 // Para prueba de encriptación/zero-auth, 0 está bien. Para pagos reales, debe ser >0.
      },
      storeId: "0210", // Del ejemplo
      isAutoship: false
    };

    const options = {
      hostname: 'www.petsuppliesplus.com',
      path: '/api/adyen/initiatePayment',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
        // Otros headers del ejemplo si son necesarios, pero 'Content-Type' y 'Accept' son los más comunes.
        // 'sec-ch-ua', 'priority', etc., son más específicos del navegador y pueden no ser estrictamente necesarios para la API.
      }
    };

    const apiReq = https.request(options, (apiRes) => {
      let data = '';
      apiRes.on('data', (chunk) => {
        data += chunk;
      });
      apiRes.on('end', () => {
        try {
          const jsonResponse = JSON.parse(data);
          console.log('Respuesta de Adyen API:', jsonResponse);
          res.status(apiRes.statusCode).json(jsonResponse);
        } catch (parseError) {
          console.error('Error parseando respuesta de Adyen API:', parseError);
          console.error('Respuesta cruda de Adyen API:', data);
          res.status(500).json({ message: 'Error parseando respuesta de Adyen API.', rawResponse: data });
        }
      });
    });

    apiReq.on('error', (error) => {
      console.error('Error llamando a Adyen API:', error);
      res.status(500).json({ message: 'Error interno llamando a Adyen API.', error: error.message });
    });

    apiReq.write(JSON.stringify(adyenPayload));
    apiReq.end();

  } catch (error) {
    console.error('Error en /initiatePayment:', error);
    res.status(500).json({ message: 'Error interno del servidor.', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
