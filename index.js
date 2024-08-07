const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const UsedEmail = require("./models/NewUserDiamond"); // Importa el modelo
const UsedEmailCarbon = require("./models/NewUserCarbon"); // Importa el modelo

const app = express();
const port = process.env.PORT || 5000; // Asegúrate de que 'PORT' esté en mayúsculas

// Configura el body-parser para manejar solicitudes JSON
app.use(bodyParser.json());

// Conecta a MongoDB
mongoose.connect("mongodb+srv://EstivenPosada:SharpodsDataBase123.@cluster0.6ys5t.mongodb.net/",);

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
    console.log(`Email ${email} ha sido insertado/actualizado.`);

    res.status(200).send("Email guardado exitosamente");
  } catch (error) {
    console.error(`Error guardando el email ${email}:`, error);
    res.status(500).send("Error guardando el email");
  }
});


// Ruta para el webhook de Carbon usuario nuevo
app.post("/webhookCarbon", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send("Email es requerido");
  }

  try {
    await UsedEmailCarbon.findOneAndUpdate(
      { email },
      { email, isActive: true },
      { upsert: true, new: true }
    );
    console.log(`Email ${email} ha sido insertado/actualizado.`);

    res.status(200).send("Email guardado exitosamente");
  } catch (error) {
    console.error(`Error guardando el email ${email}:`, error);
    res.status(500).send("Error guardando el email");
  }
});

//Ruta para el webhook de carbon usuario reactivado
app.post("/updateEmailCarbon", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send("Email es requerido");
  }

  try {
    const updatedEmail = await UsedEmailCarbon.findOneAndUpdate(
      { email },
      { isActive: true },
      { new: true }
    );

    if (updatedEmail) {
      console.log(`Email ${email} ha sido desactivado.`);
      res.status(200).send("Email desactivado exitosamente");
    } else {
      console.log(`Email ${email} no encontrado.`);
      res.status(404).send("Email no encontrado");
    }
  } catch (error) {
    console.error(`Error desactivando el email ${email}:`, error);
    res.status(500).send("Error desactivando el email");
  }
});

//Ruta para el webhook de diamond usuario desactivado
app.post("/deactivateEmailCarbon", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send("Email es requerido");
  }

  try {
    const updatedEmail = await UsedEmailCarbon.findOneAndUpdate(
      { email },
      { isActive: false },
      { new: true }
    );

    if (updatedEmail) {
      console.log(`Email ${email} ha sido desactivado.`);
      res.status(200).send("Email desactivado exitosamente");
    } else {
      console.log(`Email ${email} no encontrado.`);
      res.status(404).send("Email no encontrado");
    }
  } catch (error) {
    console.error(`Error desactivando el email ${email}:`, error);
    res.status(500).send("Error desactivando el email");
  }
});


app.post("/webhookCentauri", async (req, res) => {
  // Lógica para webhookCentauri
  res.status(200).send("WebhookCentauri recibido");
});

app.post("/webhookAntares", async (req, res) => {
  // Lógica para webhookAntares
  res.status(200).send("WebhookAntares recibido");
});

app.post("/webhookGriko", async (req, res) => {
  // Lógica para webhookGriko
  res.status(200).send("WebhookGriko recibido");
});

app.post("/deactivateEmail", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send("Email es requerido");
  }

  try {
    const updatedEmail = await UsedEmail.findOneAndUpdate(
      { email },
      { isActive: false },
      { new: true }
    );

    if (updatedEmail) {
      console.log(`Email ${email} ha sido desactivado.`);
      res.status(200).send("Email desactivado exitosamente");
    } else {
      console.log(`Email ${email} no encontrado.`);
      res.status(404).send("Email no encontrado");
    }
  } catch (error) {
    console.error(`Error desactivando el email ${email}:`, error);
    res.status(500).send("Error desactivando el email");
  }
});

app.post("/updateEmail", async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).send("Email es requerido");
    }
  
    try {
      const updatedEmail = await UsedEmail.findOneAndUpdate(
        { email },
        { isActive: true },
        { new: true }
      );
  
      if (updatedEmail) {
        console.log(`Email ${email} ha sido desactivado.`);
        res.status(200).send("Email desactivado exitosamente");
      } else {
        console.log(`Email ${email} no encontrado.`);
        res.status(404).send("Email no encontrado");
      }
    } catch (error) {
      console.error(`Error desactivando el email ${email}:`, error);
      res.status(500).send("Error desactivando el email");
    }
});

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});

