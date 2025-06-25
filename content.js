console.log("Adyen Fallback content script loaded and attempting to modify payment section.");

function replacePaymentSection() {
    const paymentSection = document.getElementById('paymentsection');

    if (paymentSection) {
        console.log("Payment section found. Replacing content...");
        // Guardar el contenido original por si se necesita restaurar o como referencia
        // const originalContent = paymentSection.innerHTML;
        // paymentSection.setAttribute('data-original-content', originalContent);

        paymentSection.innerHTML = `
            <h2>Formulario de Pago Alternativo</h2>
            <div id="adyen-fallback-form">
                <div>
                    <label for="fallback-card-number">Número de Tarjeta:</label>
                    <input type="text" id="fallback-card-number" name="fallback-card-number" autocomplete="cc-number" />
                </div>
                <div>
                    <label for="fallback-expiry-month">Mes de Expiración (MM):</label>
                    <input type="text" id="fallback-expiry-month" name="fallback-expiry-month" autocomplete="cc-exp-month" placeholder="MM" />
                </div>
                <div>
                    <label for="fallback-expiry-year">Año de Expiración (YY o YYYY):</label>
                    <input type="text" id="fallback-expiry-year" name="fallback-expiry-year" autocomplete="cc-exp-year" placeholder="YY" />
                </div>
                <div>
                    <label for="fallback-cvv">CVV:</label>
                    <input type="text" id="fallback-cvv" name="fallback-cvv" autocomplete="cc-csc" />
                </div>
                <button id="submit-fallback-payment">Pagar Alternativo</button>
            </div>
            <div id="fallback-response-area"></div>
        `;
        console.log("Payment section content replaced.");

        const submitButton = document.getElementById('submit-fallback-payment');
        if (submitButton) {
            submitButton.addEventListener('click', handleFallbackPayment);
        } else {
            console.error("Fallback payment button not found after replacing content.");
        }

    } else {
        console.warn("Payment section (id='paymentsection') not found.");
    }
}

async function handleFallbackPayment() {
    console.log("Attempting fallback payment...");
    const responseArea = document.getElementById('fallback-response-area');
    responseArea.innerHTML = 'Procesando...';

    // Esperar el evento adyenApiReady antes de continuar
    if (!window.adyen || !window.adyen.key || !window.adyen.generationTime) {
        console.log("handleFallbackPayment: Adyen API not ready yet. Waiting for adyenApiReady event...");
        responseArea.innerHTML = 'Esperando inicialización de Adyen...';

        // Intentar de nuevo después de que el evento se dispare
        document.addEventListener('adyenApiReady', function onAdyenReady() {
            console.log("handleFallbackPayment: adyenApiReady event received. Proceeding with payment.");
            document.removeEventListener('adyenApiReady', onAdyenReady); // Limpiar el listener
            // Llamar a una subfunción para evitar la recursión compleja o problemas de scope del evento
            proceedWithEncryptionAndPayment();
        }, { once: true }); // { once: true } para que el listener se auto-elimine

        // Opcional: Timeout para evitar espera indefinida si el evento no llega
        setTimeout(() => {
            if (!window.adyen || !window.adyen.key || !window.adyen.generationTime) {
                // Si después de un tiempo sigue sin estar listo y el evento no se disparó (o no se capturó)
                // es posible que el listener ya se haya removido por {once: true} si el evento sí ocurrió
                // pero la función principal ya había terminado.
                // Para ser más robustos, verificamos de nuevo.
                const adyenState = window.adyen || {};
                if (!adyenState.key || !adyenState.generationTime) {
                     console.error("handleFallbackPayment: Timeout. Adyen API did not become ready.");
                     responseArea.innerHTML = 'Error: Timeout esperando la API de Adyen.';
                } else if (responseArea.innerHTML === 'Esperando inicialización de Adyen...') {
                    // Si está listo pero el mensaje sigue siendo "esperando", significa que el evento
                    // se disparó pero esta lógica de timeout fue más rápida.
                    console.log("handleFallbackPayment: Timeout check found Adyen ready. Proceeding.");
                    proceedWithEncryptionAndPayment();
                }
            }
        }, 3000); // Esperar 3 segundos

        return; // Salir de la función y esperar el evento o el timeout
    }

    // Si ya está listo (p.ej. el usuario hace clic después de que todo cargó), proceder directamente.
    proceedWithEncryptionAndPayment();
}

async function proceedWithEncryptionAndPayment() {
    const responseArea = document.getElementById('fallback-response-area'); // Re-obtener por si acaso
    responseArea.innerHTML = 'Procesando (después de verificar Adyen)...';


    const cardNumber = document.getElementById('fallback-card-number').value;
    const expiryMonth = document.getElementById('fallback-expiry-month').value;
    let expiryYear = document.getElementById('fallback-expiry-year').value;
    const cvv = document.getElementById('fallback-cvv').value;

    // Validar año (YY o YYYY)
    if (expiryYear.length === 2) {
        expiryYear = "20" + expiryYear; // Asumir siglo XXI
    } else if (expiryYear.length !== 4) {
        responseArea.innerHTML = 'Error: El año de expiración debe tener 2 o 4 dígitos.';
        console.error('Error: El año de expiración debe tener 2 o 4 dígitos.');
        return;
    }

    if (!cardNumber || !expiryMonth || !expiryYear || !cvv) {
        responseArea.innerHTML = 'Error: Todos los campos son requeridos.';
        console.error('Error: Todos los campos son requeridos.');
        return;
    }

    try {
        // Asegurarse que adyen.key y adyen.generationTime están disponibles.
        // adyenApi.js los establece globalmente en el objeto window.adyen.
        if (!window.adyen || !window.adyen.key || !window.adyen.generationTime) {
            responseArea.innerHTML = 'Error: La API de Adyen no está inicializada correctamente. Falta la clave o generationTime.';
            console.error('Error: La API de Adyen no está inicializada correctamente. Falta la clave o generationTime.');
            return;
        }

        // La librería de Adyen se carga globalmente a través de adyenApi.js
        // por lo que `adyen.encrypt` debería estar disponible.
        const cardData = {
            number: cardNumber,
            cvc: cvv,
            expiryMonth: expiryMonth,
            expiryYear: expiryYear,
            generationtime: window.adyen.generationTime // Tomado de adyenApi.js
        };

        console.log("Card data to encrypt:", cardData);
        console.log("Using Adyen key (first 20 chars):", window.adyen.key.substring(0, 20));


        // Crear instancia de encriptación. Las opciones pueden dejarse vacías por ahora.
        const encryption = adyen.encrypt.createEncryption(window.adyen.key, {});

        const encryptedCardNumber = encryption.encrypt(cardData.number, { fieldName: "encryptedCardNumber" });
        const encryptedExpiryMonth = encryption.encrypt(cardData.expiryMonth, { fieldName: "encryptedExpiryMonth" });
        const encryptedExpiryYear = encryption.encrypt(cardData.expiryYear, { fieldName: "encryptedExpiryYear" });
        const encryptedCvc = encryption.encrypt(cardData.cvc, { fieldName: "encryptedSecurityCode" });

        if (!encryptedCardNumber || !encryptedExpiryMonth || !encryptedExpiryYear || !encryptedCvc) {
            responseArea.innerHTML = 'Error en la encriptación de los datos de la tarjeta.';
            console.error('Error en la encriptación:', {
                encryptedCardNumber,
                encryptedExpiryMonth,
                encryptedExpiryYear,
                encryptedCvc
            });
            return;
        }

        console.log("Datos encriptados:", {
            encryptedCardNumber,
            encryptedExpiryMonth,
            encryptedExpiryYear,
            encryptedCvc
        });

        responseArea.innerHTML = `
            <p>Datos Encriptados (listos para enviar):</p>
            <pre>
encryptedCardNumber: ${encryptedCardNumber.substring(0,50)}...
encryptedExpiryMonth: ${encryptedExpiryMonth.substring(0,50)}...
encryptedExpiryYear: ${encryptedExpiryYear.substring(0,50)}...
encryptedSecurityCode: ${encryptedCvc.substring(0,50)}...
            </pre>
        `;

        // El siguiente paso (realizar la solicitud fetch) se implementará después.
        // Por ahora, solo mostramos los datos encriptados.

        // Guardar los datos encriptados para el siguiente paso
        window.adyenEncryptedData = {
            encryptedCardNumber,
            encryptedExpiryMonth,
            encryptedExpiryYear,
            encryptedSecurityCode: encryptedCvc // Asegúrate que el nombre coincida con el payload
        };

        // Llamada a la función para realizar el fetch (se implementará en el siguiente paso)
        await makePaymentRequest();

    } catch (error) {
        responseArea.innerHTML = `Error durante la encriptación: ${error.message}`;
        console.error("Error durante la encriptación:", error);
    }
}

async function makePaymentRequest() {
    const responseArea = document.getElementById('fallback-response-area');
    if (!window.adyenEncryptedData) {
        responseArea.innerHTML = 'Error: Datos encriptados no disponibles.';
        console.error('Error: Datos encriptados no disponibles.');
        return;
    }

    const {
        encryptedCardNumber,
        encryptedExpiryMonth,
        encryptedExpiryYear,
        encryptedSecurityCode
    } = window.adyenEncryptedData;

    // Este es un payload simplificado basado en Analyze and Implement.txt
    // Muchos valores son hardcodeados o simplificados para esta prueba inicial.
    // En una implementación real, estos datos deberían ser dinámicos y más completos.
    const paymentPayload = {
        riskData: { // Ejemplo de riskData, podría necesitar ser más dinámico o generado por Adyen JS SDK
            clientData: "eyJ2ZXJzaW9uIjoiMS4wLjAiLCJkZXZpY2VGaW5nZXJwcmludCI6IkRwcXdVNHpFZE4wMDUwMDAwMDAwMDAwMDAwTGxEeVo0OW5qRDAwNTAyNzE1NzZjVkI5NGlLekJHREdiR3RVS0o5TUJpeDdSWDNhejgwMDJEYUJraW5kOU1sMDAwMDBxWmtURTAwMDAwZzRhVU5vWTM5b0RXdDlvd0xtRUk6NDAiLCJwZXJzaXN0ZW50Q29va2llIjpbIl9ycF91aWQ9MTFjMzIzOGUtNjFhNS0xOTllLTE1NWEtNmRkNDA4ZWU3NWNkIl0sImNvbXBvbmVudHMiOnsidXNlckFnZW50IjoiNmIzYjhlOTI3NTMxYzhmMmE4M2MyYmM4YWU1ODkzYjgiLCJ3ZWJkcml2ZXIiOjAsImxhbmd1YWdlIjoiZW4tVVMiLCJjb2xvckRlcHRoIjoyNCwiZGV2aWNlTWVtb3J5Ijo0LCJwaXhlbFJhdGlvIjoxLCJoYXJkd2FyZUNvbmN1cnJlbmN5Ijo0LCJzY3JlZW5XaWR0aCI6MTkyMCwic2NyZWVuSGVpZ2h0IjoxMDgwLCJhdmFpbGFibGVTY3JlZW5XaWR0aCI6MTkyMCwiYXZhaWxhYmxlU2NyZWVuSGVpZ2h0IjoxMDQwLCJ0aW1lem9uZU9mZnNldCI6MzAwLCJ0aW1lem9uZSI6IkFtZXJpY2EvQ2hpY2FnbyIsInNlc3Npb25TdG9yYWdlIjoxLCJsb2NhbFN0b3JhZ2UiOjEsImluZGV4ZWREYiI6MSwiYWRkQmVoYXZpb3IiOjAsIm9wZW5EYXRhYmFzZSI6MCwicGxhdGZvcm0iOiJXaW4zMiIsInBsdWdpbnMiOiIyOWNmNzFlM2Q4MWQ3NGQ0M2E1YjBlYjc5NDA1YmE4NyIsImNhbnZhcyI6IjllMDRjMDFjYjQ3ZTA0ZDk0OTJlNjAwYTQ4MThlYzFmIiwid2ViZ2wiOiI4M2ZhOGU2NmY2Y2VkOTE3N2UxYWNiOTE1MDdjNWY2YiIsIndlYmdsVmVuZG9yQW5kUmVuZGVyZXIiOiJHb29nbGUgSW5jLiAoSW50ZWwpfkFOR0xFIChJbnRlbCwgSW50ZWwoUikgSEQgR3JhcGhpY3MgNjIwICgweDAwMDA1OTE2KSBEaXJlY3QzRDExIHZzXzVfMCBwc181XzAsIEQzRDExKSIsImFkQmxvY2siOjAsImhhc0xpZWRMYW5ndWFnZXMiOjAsImhhc0xpZWRSZXNvbHV0aW9uIjowLCJoYXNMaWVkT3MiOjAsImhhc0xpZWRCcm93c2VyIjowLCJmb250cyI6ImNkNDZiMDFlZjFiYjQ2MGFjMWQzNzRhM2FmYmU5YjBlIiwiYXVkaW8iOiI5MDJmMGZlOTg3MTliNzc5ZWEzN2YyNzUyOGRmYjBhYSIsImVudW1lcmF0ZURldmljZXMiOiI1ZjNmZGFmNDc0M2VhYTcwN2NhNmI3ZGE2NTYwMzg5MiIsInZpc2l0ZWRQYWdlcyI6W10sImJhdHRlcnlJbmZvIjp7ImJhdHRlcnlMZXZlbCI6MTAwLCJiYXR0ZXJ5Q2hhcmdpbmciOnRydWV9LCJib3REZXRlY3RvcnMiOnsid2ViRHJpdmVyIjpmYWxzZSwiY29va2llRW5hYmxlZCI6dHJ1ZSwiaGVhZGxlc3NCcm93c2VyIjpmYWxzZSwibm9MYW5ndWFnZXMiOmZhbHNlLCJpbmNvbnNpc3RlbnRFdmFsIjpmYWxzZSwiaW5jb25zaXN0ZW50UGVybWlzc2lvbnMiOmZhbHNlLCJkb21NYW5pcHVsYXRpb24iOmZhbHNlLCJhcHBWZXJzaW9uU3VzcGljaW91cyI6ZmFsc2UsImZ1bmN0aW9uQmluZFN1c3BpY2lvdXMiOnRydWUsImJvdEluVXNlckFnZW50IjpmYWxzZSwid2luZG93U2l6ZVN1c3BpY2lvdXMiOmZhbHNlLCJib3RJbldpbmRvd0V4dGVybmFsIjpmYWxzZSwid2ViR0wiOmZhbHNlfX19"
        },
        paymentMethod: {
            type: "scheme",
            holderName: "", // Podría necesitarse, dejar vacío por ahora
            encryptedSecurityCode: encryptedSecurityCode,
            encryptedCardNumber: encryptedCardNumber,
            encryptedExpiryMonth: encryptedExpiryMonth,
            encryptedExpiryYear: encryptedExpiryYear,
            brand: "visa", // Esto debería detectarse o ser seleccionable. Por ahora, fijo.
            checkoutAttemptId: "35c4e070-635f-4c40-863a-a120a5f2a45217508487430738F2D94EEF480DD6BB8C9ABA765EA0DCFAA95DC35DEBFB08D513CDFCFDB4E8984" // Esto debería ser único por intento
        },
        storePaymentMethod: false,
        browserInfo: { // Datos de ejemplo, idealmente se obtendrían del navegador
            acceptHeader: "*/*",
            colorDepth: 24,
            language: "en-US",
            javaEnabled: false,
            screenHeight: 1080,
            screenWidth: 1920,
            userAgent: navigator.userAgent, // Usar el real
            timeZoneOffset: (new Date()).getTimezoneOffset() // Usar el real
        },
        origin: "https://www.petsuppliesplus.com",
        clientStateDataIndicator: true,
        // Los siguientes datos son específicos del usuario/pedido y necesitarían ser llenados dinámicamente.
        // Para esta prueba, se usan valores de ejemplo o se omiten si es posible.
        shopperReference: "B5EEFB36-7334-4488-93E9-40D2F0115CBB", // Ejemplo, debería ser único por comprador
        shopperName: "Test User",
        telephoneNumber: "1234567890",
        shopperEmail: "test@example.com",
        billingAddress: {
            street: "123 Main St",
            houseNumberOrName: "",
            city: "Anytown",
            postalCode: "12345",
            stateOrProvince: "CA",
            country: "US"
        },
        additionalData: { // Generalmente vacío o con datos específicos del integrador
            "enhancedSchemeData.shipFromPostalCode": "",
            "subMerchantCity": "",
            "subMerchantCountry": "",
            "subMerchantID": "",
            "subMerchantName": "",
            "subMerchantPhoneNumber": "",
            "subMerchantPostalCode": "",
            "subMerchantState": "",
            "subMerchantStreet": ""
        },
        merchantReference: "fallback-" + Date.now(), // Referencia única para el comerciante
        amount: { // El monto debería obtenerse de la página
            currency: "USD",
            value: 0 // Para prueba sin autorización real de monto. Cambiar a un valor > 0 para probar pagos.
        },
        storeId: "0210", // Ejemplo, obtener de la página si es posible
        isAutoship: false
    };

    console.log("Enviando payload:", JSON.stringify(paymentPayload, null, 2));

    try {
        const response = await fetch("https://www.petsuppliesplus.com/api/adyen/initiatePayment", {
            method: "POST",
            headers: {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9", // Puede variar
                "content-type": "application/json",
                // "priority": "u=1, i", // Puede ser omitido o causar problemas si no es soportado por el navegador/servidor
                // "sec-ch-ua": "\"Google Chrome\";v=\"137\", \"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"", // Ejemplo
                // "sec-ch-ua-mobile": "?0",
                // "sec-ch-ua-platform": "\"Windows\"", // Ejemplo
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            referrer: "https://www.petsuppliesplus.com/checkout", // Puede ser importante
            referrerPolicy: "strict-origin-when-cross-origin",
            body: JSON.stringify(paymentPayload),
            mode: "cors",
            credentials: "include" // Importante para las cookies de sesión
        });

        const responseData = await response.json();

        console.log("Respuesta del API:", responseData);
        responseArea.innerHTML = `
            <p>Respuesta del API:</p>
            <pre>${JSON.stringify(responseData, null, 2)}</pre>
        `;

        if (responseData.resultCode === 'Authorised') {
            responseArea.innerHTML += "<p style='color:green;'>¡Pago Autorizado!</p>";
        } else {
            responseArea.innerHTML += `<p style='color:red;'>Pago no autorizado. Razón: ${responseData.refusalReason || 'Desconocida'}</p>`;
        }

    } catch (error) {
        responseArea.innerHTML = `Error durante la solicitud de pago: ${error.message}`;
        console.error("Error durante la encriptación:", error);
    }
}

// Asegurarse de que el DOM esté completamente cargado antes de intentar modificarlo.
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", replacePaymentSection);
} else {
    // DOMContentLoaded ya ha disparado
    replacePaymentSection();
}
