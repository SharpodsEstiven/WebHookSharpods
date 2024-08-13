const UsedEmailCarbon = require("../models/NewUserCarbon")
const express = require("express");

const router = express.Router();

/* CARBON */
// Ruta para el webhook de Carbon usuario nuevo
router.post("/webhookCarbon", async (req, res) => {
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
router.post("/updateEmailCarbon", async (req, res) => {
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

// Ruta para el webhook de carbon usuario desactivado
router.post("/desactivateEmailCarbon", async (req, res) => {
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

router.post("/updateDatabaseCarbon", async (req,res) => {
    const { email, telegramId } = req.body;
    if (!email || !telegramId) {
      return res.status(400).json({ error: 'Email y Telegram ID son requeridos.' });
    }
    try {
      // Buscar si el usuario ya existe en la base de datos
      let user = await UsedEmailCarbon.findOne({ email });
    
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


module.exports = router