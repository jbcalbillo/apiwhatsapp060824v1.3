//VERSION 1.3
const https = require("https");

function SendMessageWhatsapp(messageType, data, senderWaId) {
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

    req.write(JSON.stringify(data));
    req.end();
}

function createTextMessage(text, senderWaId) {
    return {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": senderWaId,
        "type": "text",
        "text": {
            "body": text
        }
    };
}

module.exports = {
    SendMessageWhatsapp,
    createTextMessage
};







//VERSION 1.1
// const https = require("https");

// function SendMessageWhatsapp(data) {


//     const options = {
//         hostname: 'graph.facebook.com',
//         path: '/v20.0/252165641309335/messages',
//         method: 'POST',
//         body: data,
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer EAAM7PYBynNwBO0yyViWSMHwlTQstseYquRHdT89nZCA382pnnWZBUoWGmcL60R7R9YL3ai8EyO4pdMTY5KBjDfkzA2IIZBcIHEQ03jDd4F2ZC8AaslwZAZAwaCef2HGmLymSdoRua3lienq4sbNpCOSsgHZCPzXvGtghSm8aBV4MnpnH7ZCSK6un0fh0baxWaiJBUkLfPROJhIEeH4RB'
//         }
//     };

//     const req = https.request(options, (res) => {
//         let data = '';

//         res.on("data", (chunk) => {
//             data += chunk;
//         });

//         res.on('end', () => {
//             console.log('Response:', data);
//         });
//     });

//     req.on('error', (e) => {
//         console.error(`Problem with request: ${e.message}`);
//     });

//     req.write(data);
//     req.end();
// }

// module.exports = {
//     SendMessageWhatsapp
// };