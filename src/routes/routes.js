const express = require("express");
const router = express.Router();
const whatsAppControllers = require("../controllers/whatsappControllers");

router
    .get("/", whatsAppControllers.VerifyToken)
    .post("/", whatsAppControllers.ReceivedMessage)

    module.exports = router;






// 05/08/24 1.1
//     const express = require("express");
// const router = express.Router();
// const whatsAppControllers = require("../controllers/whatsappControllers");

// router
//     .get("/", whatsAppControllers.VerifyToken)
//     .post("/", whatsAppControllers.ReceivedMessage)

//     module.exports = router;