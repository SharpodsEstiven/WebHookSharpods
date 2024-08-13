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
  telegramId:{
    type: String,
    unique: true
  }
});

const UsedEmailAntares = mongoose.model('AntaresUsers', UsedEmailSchema);

module.exports = UsedEmailAntares;
