const express = require("express");
const router = express.Router();
const whatsAppControllers = require("../controllers/whatsappControllers");

router
    .get("/", whatsAppControllers.VerifyToken)
    .post("/", whatsAppControllers.ReceivedMessage)

    module.exports = router;