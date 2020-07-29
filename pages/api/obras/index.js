import connect from './../../../libs/connect';
import Obra from './../../../models/Obra';

export default async (req, res) => {
  await connect();

  try {
    const obras = await Obra.find().sort({ 'autor.apellido': 1, titulo: 1 });
    res.json(obras);
  } catch (e) {
    res.statusCode = 400;
    res.end();
  }
};
