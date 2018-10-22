const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const centrosAtencionSchema = Schema({
  nombre: { type: String, required: true },
  ubicacion: String,
  capacidad: Number,
  tipo: String
});

module.exports = mongoose.model('centrosAtencion', centrosAtencionSchema);