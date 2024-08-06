const https = require("https");
function SendMessageWhatsapp(textResponse, sender){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": sender,
        "type": "text",
        "text": {
            "body": textResponse
        }
    });

    const options = {
        hostname: 'graph.facebook.com',
        path: '/v20.0/252165641309335/messages',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer EAAM7PYBynNwBO0yyViWSMHwlTQstseYquRHdT89nZCA382pnnWZBUoWGmcL60R7R9YL3ai8EyO4pdMTY5KBjDfkzA2IIZBcIHEQ03jDd4F2ZC8AaslwZAZAwaCef2HGmLymSdoRua3lienq4sbNpCOSsgHZCPzXvGtghSm8aBV4MnpnH7ZCSK6un0fh0baxWaiJBUkLfPROJhIEeH4RB'
        }
    };

    const req = https.request(options, (res) => {
        let data = '';

        res.on("data", (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log('Response:', data);
        });
    });

    req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsapp
};
// Llama a la función con el mensaje y el número de teléfono deseado
SendMessageWhatsapp( );