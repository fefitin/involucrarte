const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservaSchema = new Schema(
  {
    id: Number,
    obraId: mongoose.Types.ObjectId,
    nombre: String,
    email: String,
    metodo: String,
  },
  { timestamps: true }
);

ReservaSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.email;
  delete obj.nombre;
  delete obj.metodo;
  return obj;
};

export default mongoose.models['reservas'] || mongoose.model('reservas', ReservaSchema);
