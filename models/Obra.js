const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObraSchema = new Schema({
  id: Number,
  titulo: String,
  autor: {
    nombre: String,
    apellido: String,
    foto: String,
    video: String,
    vartical: Boolean,
    facebook: String,
    instagram: String,
  },
  miniatura: String,
  imagen: String,
  ano: Number,
  tamano: String,
  slug: String,
  precio: Number,
});

export default mongoose.models['obras'] || mongoose.model('obras', ObraSchema);
