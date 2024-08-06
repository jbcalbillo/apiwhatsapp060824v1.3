const express = require("express");
const apiRoute = require("./routes/routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/whatsapp", apiRoute);

app.listen(PORT, () => {
    console.log("el puerto es: " + PORT)});






// 05/08/24 1.1
// const express = require("express");
// const apiRoute = require("./routes/routes");

// const app = express();

// const PORT = process.env.PORT || 3000;

// app.use(express.json());

// app.use("/whatsapp", apiRoute);

// app.listen(PORT, () => {
//     console.log("el puerto es: " + PORT)});