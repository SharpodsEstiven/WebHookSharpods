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

const UsedEmailCarbon = mongoose.model('carbonUsers', UsedEmailSchema);

module.exports = UsedEmailCarbon;
