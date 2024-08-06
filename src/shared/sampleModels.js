function SampleText(textResponse, senderWaId){
    const data = JSON.stringify({
        // "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": senderWaId,
        "type": "text",
        "text": {
            "body": textResponse
        }
    });
    return data;
};

function SampleImage(senderWaId){
    const data = JSON.stringify({
        // "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": senderWaId,
        "type": "image",
        "image": {
            "id": 1159395171781864
        }
    });
    return data;
};


function SampleVideo(senderWaId){
    const data = JSON.stringify({
        // "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": senderWaId,
        "type": "video",
        "image": {
            "id": 1159515661769815
        }
    });
    return data;
};


function SampleList(senderWaId){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": senderWaId,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type": "text",
                "text": "Encabezado"
            },
            "body": {
                "text": "Cuerpo del mensaje"
            },
            "footer": {
                "text": "Pie de Pagina"
            },
            "action": {
                "button": "Nombre del botón",
                "sections": [
                    {
                        "title": "Nombre de la Sección",
                        "rows": [
                            {
                                "id": "identificador_de_fila",
                                "title": "Nombre de la fila",
                                "description": "Descripción"
                            },
                            {
                                "id": "identificador_de_fila02",
                                "title": "Nombre de la fila02",
                                "description": "Descripción"
                            }
                        ]
                    },
                    {
                        "title": "Nombre de sección 2",
                        "rows": [
                            {
                                "id": "identificador_de_fila03",
                                "title": "Nombre de la fila03",
                                "description": "Descripción"
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}


function SampleButton(senderWaId) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": senderWaId,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "header": {
                "type": "text",
                "text": "Encabezado del mensaje"
                      },
            "body": {
                "text": "Cuerpo del mensaje"
                    },
            "footer": {
                "text": "Pie de página del mensaje"
                      },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "boton_1",
                            "title": "Título del Botón 1"
                                 }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "boton_2",
                            "title": "Título del Botón 2"
                                 }
                    }
                          ]
                     }
                    }
    
    }
)
return data;
};


function SampleLocation(senderWaId) {
    const data = JSON.stringify({
    "messaging_product": "whatsapp", 
    "to": senderWaId, 
    "type": "location",
    "location": { 
        "latitude": "19.54571933605294",
        "longitude": " -99.1942272629728",
        "name": "Oficinas IDMKT Lomas Verdes",
        "address": "Colina de Mocusari 33, Boulevares, 53140 Naucalpan de Juárez, Méx."
            }
        }
    )
    return data;
};

module.exports = {
    SampleButton,
    SampleImage,
    SampleList,
    SampleText,
    SampleVideo,
    SampleLocation
};