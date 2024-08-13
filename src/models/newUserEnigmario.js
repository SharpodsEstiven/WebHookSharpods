const mongoose = require('mongoose');

const UsedEmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const UsedEmailEnigmario = mongoose.model('enigmarioUsers', UsedEmailSchema);

module.exports = UsedEmailEnigmario;
