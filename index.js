const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const UsedEmail = require("./models/NewUserDiamond"); // Importa el modelo

const app = express();
const port = process.env.port || 3000;

// Configura el body-parser para manejar solicitudes JSON
app.use(bodyParser.json());

// Conecta a MongoDB
mongoose.connect("mongodb+srv://SantiagoZapata:SharpodsDataBase123.@cluster0.6ys5t.mongodb.net/",)

mongoose.connection.on("connected", () => {
  console.log("Conectado a MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("Error conectando a MongoDB:", err);
});

app.post("/webhookDiamond", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send("Email es requerido");
  }

  try {
    await UsedEmail.findOneAndUpdate(
      { email },
      { email, isActive: true },
      { upsert: true, new: true }
    );
    console.log(`Email ${email} has been inserted/updated.`);

    res.status(200).send("Email guardado exitosamente");
  } catch (error) {
    console.error(`Error guardando el email ${email}:`, error);
    res.status(500).send("Error guardando el email");
  }
});

app.post("/webhookCarbon", async (req, res) => {

})

app.post("/webhookCentauri", async (req, res) => {
    
})

app.post("/webhookAntares", async (req, res) => {
    
})

app.post("/webhookGriko", async (req, res) => {
    
})

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
