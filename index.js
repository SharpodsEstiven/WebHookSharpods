const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const UsedEmail = require("./models/NewUserDiamond"); // Importa el modelo
const UsedEmailCentauri = require("./models/NewUserCentauri"); // Importa el modelo
const UsedEmailCarbon = require("./models/NewUserCarbon"); // Importa el modelo
const UsedEmailGriko = require('./models/NewUserGriko')
const UsedEmailAntares = require("./models/NewUserAntares");
const UsedEmailEnigmario = require("./models/newUserEnigmario");

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


/* CARBON */
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

// Ruta para el webhook de carbon usuario reactivado
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
            console.log(`Email ${email} ha sido actualizado.`);
            res.status(200).send("Email actualizado exitosamente");
        } else {
            console.log(`Email ${email} no encontrado.`);
            res.status(404).send("Email no encontrado");
        }
    } catch (error) {
        console.error(`Error actualizando el email ${email}:`, error);
        res.status(500).send("Error actualizando el email");
    }
});

// Ruta para el webhook de diamond usuario desactivado
app.post("/desactivateEmailCarbon", async (req, res) => {
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


/* ANTARES */
// Ruta para el webhook de Antares usuario nuevo
app.post("/webhookAntares", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        await UsedEmailAntares.findOneAndUpdate(
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

// Ruta para el webhook de antares usuario reactivado
app.post("/updateEmailAntares", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmailAntares.findOneAndUpdate(
            { email },
            { isActive: true },
            { new: true }
        );

        if (updatedEmail) {
            console.log(`Email ${email} ha sido actualizado.`);
            res.status(200).send("Email actualizado exitosamente");
        } else {
            console.log(`Email ${email} no encontrado.`);
            res.status(404).send("Email no encontrado");
        }
    } catch (error) {
        console.error(`Error actualizando el email ${email}:`, error);
        res.status(500).send("Error actualizando el email");
    }
});

// Ruta para el webhook de Antares usuario desactivaddo
app.post("desactivateEmailAntares", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmailAntares.findOneAndUpdate(
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
})


/* GRIKO */
// Ruta para el webhook de Griko usuario nuevo
app.post("/webhookGriko", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        await UsedEmailGriko.findOneAndUpdate(
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

// Ruta para el webhook de Griko usuario desactivado
app.post("/desactivateEmailGriko", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmailGriko.findOneAndUpdate(
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

// Ruta para el webhook de Griko usuario reactivado
app.post("/updateEmailGriko", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmailGriko.findOneAndUpdate(
            { email },
            { isActive: true },
            { new: true }
        );

        if (updatedEmail) {
            console.log(`Email ${email} ha sido actualizado.`);
            res.status(200).send("Email actualizado exitosamente");
        } else {
            console.log(`Email ${email} no encontrado.`);
            res.status(404).send("Email no encontrado");
        }
    } catch (error) {
        console.error(`Error actualizando el email ${email}:`, error);
        res.status(500).send("Error actualizando el email");
    }
});


/* CENTAURI */
// Ruta para el webhook de Centauri usuario nuevo
app.post("/webhookCentauri", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        await UsedEmailCentauri.findOneAndUpdate(
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

// Ruta para el webhook de Centauri usuario desactivado
app.post("/desactivateEmailCentauri", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmailCentauri.findOneAndUpdate(
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

// Ruta para el webhook de Centauri usuario reactivado
app.post("/updateEmailCentauri", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmailCentauri.findOneAndUpdate(
            { email },
            { isActive: true },
            { new: true }
        );

        if (updatedEmail) {
            console.log(`Email ${email} ha sido actualizado.`);
            res.status(200).send("Email actualizado exitosamente");
        } else {
            console.log(`Email ${email} no encontrado.`);
            res.status(404).send("Email no encontrado");
        }
    } catch (error) {
        console.error(`Error actualizando el email ${email}:`, error);
        res.status(500).send("Error actualizando el email");
    }
});


/* DIAMOND */
// Ruta para el webhook de Diamond usuario nuevo
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

// Ruta para el webhook de Diamond usuario desactivado
app.post("/desactivateEmailDiamond", async (req, res) => {
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

// Ruta para el webhook de Diamond usuario reactivado
app.post("/updateEmailDiamond", async (req, res) => {
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
            console.log(`Email ${email} ha sido actualizado.`);
            res.status(200).send("Email actualizado exitosamente");
        } else {
            console.log(`Email ${email} no encontrado.`);
            res.status(404).send("Email no encontrado");
        }
    } catch (error) {
        console.error(`Error actualizando el email ${email}:`, error);
        res.status(500).send("Error actualizando el email");
    }
});


/* ENIGMARIO */
// Ruta para el webhook de Enigmario usuario nuevo
app.post("/webhookEnigmario", async (req, res) => {
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

// Ruta para el webhook de Enigmario usuario desactivado
app.post("/desactivateEmailEnigmario", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmailEnigmario.findOneAndUpdate(
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

// Ruta para el webhook de Diamond usuario reactivado
app.post("/updateEmailEnigmario", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmailEnigmario.findOneAndUpdate(
            { email },
            { isActive: true },
            { new: true }
        );

        if (updatedEmail) {
            console.log(`Email ${email} ha sido actualizado.`);
            res.status(200).send("Email actualizado exitosamente");
        } else {
            console.log(`Email ${email} no encontrado.`);
            res.status(404).send("Email no encontrado");
        }
    } catch (error) {
        console.error(`Error actualizando el email ${email}:`, error);
        res.status(500).send("Error actualizando el email");
    }
});



app.post("/updateDatabase", async (req,res) => {
    const { email, telegramId } = req.body;

    if (!email || !telegramId) {
      return res.status(400).json({ error: 'Email y Telegram ID son requeridos.' });
    }
    try {
      // Buscar si el usuario ya existe en la base de datos
      let user = await UsedEmailGriko.findOne({ email });
  
      if (!user) {
        // Si el usuario no existe, crear un nuevo documento con el Telegram ID
        user = new UsedEmailGriko({ email, telegramId });
        await user.save();
        return res.status(201).json({ message: 'Usuario creado y Telegram ID asociado con éxito.' });
      } else {
        // Si el usuario existe, actualizar su Telegram ID
        user.telegramId = telegramId;
        await user.save();
        return res.status(200).json({ message: 'Telegram ID actualizado con éxito.' });
      }
    } catch (err) {
      console.error('Error al actualizar el Telegram ID:', err);
      res.status(500).json({ error: 'Error al actualizar el Telegram ID.' });
    }
});

app.post("/updateDatabaseDiamond", async (req, res) => {
    const { email, telegramId } = req.body;

    if (!email || !telegramId) {
      return res.status(400).json({ error: 'Email y Telegram ID son requeridos.' });
    }

    try {
      // Buscar si el usuario ya existe en la base de datos
      let user = await UsedEmail.findOne({ email });

      if (user) {
        // Si el usuario existe, actualizar su Telegram ID
        user.telegramId = telegramId;
        await user.save();
        return res.status(200).json({ message: 'Telegram ID actualizado con éxito.' });
      } else {
        // Si el correo no está en la base de datos, ignorar y no guardar nada
        return res.status(404).json({ message: 'Correo no encontrado, no se realizó ninguna acción.' });
      }
    } catch (err) {
      console.error('Error al actualizar el Telegram ID:', err);
      res.status(500).json({ error: 'Error al actualizar el Telegram ID.' });
    }
});


app.post("/updateDatabaseCentauri", async (req,res) => {
    const { email, telegramId } = req.body;

    if (!email || !telegramId) {
      return res.status(400).json({ error: 'Email y Telegram ID son requeridos.' });
    }
    try {
      // Buscar si el usuario ya existe en la base de datos
      let user = await UsedEmailCentauri.findOne({ email });
  
      if (!user) {
        // Si el usuario no existe, crear un nuevo documento con el Telegram ID
        user = new UsedEmailCentauri({ email, telegramId });
        await user.save();
        return res.status(201).json({ message: 'Usuario creado y Telegram ID asociado con éxito.' });
      } else {
        // Si el usuario existe, actualizar su Telegram ID
        user.telegramId = telegramId;
        await user.save();
        return res.status(200).json({ message: 'Telegram ID actualizado con éxito.' });
      }
    } catch (err) {
      console.error('Error al actualizar el Telegram ID:', err);
      res.status(500).json({ error: 'Error al actualizar el Telegram ID.' });
    }
});

app.post("/updateDatabaseAntares", async (req,res) => {
    const { email, telegramId } = req.body;

    if (!email || !telegramId) {
      return res.status(400).json({ error: 'Email y Telegram ID son requeridos.' });
    }
    try {
      // Buscar si el usuario ya existe en la base de datos
      let user = await UsedEmailAntares.findOne({ email });
  
      if (!user) {
        // Si el usuario no existe, crear un nuevo documento con el Telegram ID
        user = new UsedEmailAntares({ email, telegramId });
        await user.save();
        return res.status(201).json({ message: 'Usuario creado y Telegram ID asociado con éxito.' });
      } else {
        // Si el usuario existe, actualizar su Telegram ID
        user.telegramId = telegramId;
        await user.save();
        return res.status(200).json({ message: 'Telegram ID actualizado con éxito.' });
      }
    } catch (err) {
      console.error('Error al actualizar el Telegram ID:', err);
      res.status(500).json({ error: 'Error al actualizar el Telegram ID.' });
    }
});

app.post("/updateDatabaseCarbon", async (req,res) => {
    const { email, telegramId } = req.body;

    if (!email || !telegramId) {
      return res.status(400).json({ error: 'Email y Telegram ID son requeridos.' });
    }
    try {
      // Buscar si el usuario ya existe en la base de datos
      let user = await UsedEmailCarbon.findOne({ email });
  
      if (!user) {
        // Si el usuario no existe, crear un nuevo documento con el Telegram ID
        user = new UsedEmailCarbon({ email, telegramId });
        await user.save();
        return res.status(201).json({ message: 'Usuario creado y Telegram ID asociado con éxito.' });
      } else {
        // Si el usuario existe, actualizar su Telegram ID
        user.telegramId = telegramId;
        await user.save();
        return res.status(200).json({ message: 'Telegram ID actualizado con éxito.' });
      }
    } catch (err) {
      console.error('Error al actualizar el Telegram ID:', err);
      res.status(500).json({ error: 'Error al actualizar el Telegram ID.' });
    }
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});


