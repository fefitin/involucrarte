import connect from './../../../libs/connect';
import Obra from './../../../models/Obra';

export async function getObras() {
  await connect();
  return Obra.find().sort({ 'autor.apellido': 1, titulo: 1 });
}

export default async (req, res) => {
  try {
    const obras = await getObras();
    res.json(obras);
  } catch (e) {
    res.statusCode = 400;
    res.end();
  }
};
