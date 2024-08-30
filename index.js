const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routesAntares = require("./src/routes/routesAntares")
const routesCarbon = require("./src/routes/routesCarbon")
const routesGriko = require("./src/routes/routesGriko")
const routesEnigmario = require("./src/routes/routesEnigmario")
const routesCentauri = require("./src/routes/routesCentauri")
const routesDiamond = require("./src/routes/routesDiamond")
const app = express();
const port = process.env.PORT || 5000; // Asegúrate de que 'PORT' esté en mayúsculas

// Configura el body-parser para manejar solicitudes JSON
app.use(bodyParser.json());

// Conecta a MongoDB
mongoose.connect("mongodb+srv://JuanManuel:SharpodsDataBase123.@cluster0.6ys5t.mongodb.net/");

mongoose.connection.on("connected", () => {
    console.log("Conectado a MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.log("Error conectando a MongoDB:", err);
});

/* app.get("/usuariosSinTelegramId", async (req, res) => {
    try {
        // Buscar usuarios en todas las colecciones que no tienen telegramId
        const usuariosSinTelegramIdGriko = await UsedEmailGriko.find({ telegramId: { $exists: false } });
        const usuariosSinTelegramIdDiamond = await UsedEmail.find({ telegramId: { $exists: false } });
        const usuariosSinTelegramIdCentauri = await UsedEmailCentauri.find({ telegramId: { $exists: false } });
        const usuariosSinTelegramIdAntares = await UsedEmailAntares.find({ telegramId: { $exists: false } });
        const usuariosSinTelegramIdCarbon = await UsedEmailCarbon.find({ telegramId: { $exists: false } });
        const usuariosSinTelegramIdEnigmario = await UsedEmailEnigmario.find({ telegramId: { $exists: false } });

        // Combina todos los resultados en un solo array
        const usuariosSinTelegramId = [
          
      //    ...usuariosSinTelegramIdAntares,
     //       ...usuariosSinTelegramIdGriko,
     //       ...usuariosSinTelegramIdDiamond,
     //       ...usuariosSinTelegramIdCentauri,
         ...usuariosSinTelegramIdCarbon,
     //       ...usuariosSinTelegramIdEnigmario

        ];

        res.status(200).json(usuariosSinTelegramId);
    } catch (error) {
        console.error('Error al obtener usuarios sin Telegram ID:', error);
        res.status(500).json({ error: 'Error al obtener usuarios sin Telegram ID.' });
    }
}); */

app.use("/routesAntares",routesAntares)

app.use("/routesCarbon",routesCarbon)

app.use("/routesGriko",routesGriko)

app.use("/routesEnigmario",routesEnigmario)

app.use("/routesDiamond",routesDiamond)

app.use("/routesCentauri",routesCentauri)


app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});


