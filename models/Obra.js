const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObraSchema = new Schema(
  {
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
    mensaje: String,
    tamano: String,
    slug: String,
    precio: Number,
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

ObraSchema.virtual('precio2').get(function () {
  return this.precio ? Math.round(this.precio * 0.7) : null;
});

ObraSchema.virtual('precio3').get(function () {
  return this.precio ? Math.round(this.precio * 1.2) : null;
});

export default mongoose.models['obras'] || mongoose.model('obras', ObraSchema);
