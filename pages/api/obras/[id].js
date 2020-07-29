import connect from './../../../libs/connect';
import Obra from './../../../models/Obra';

export async function getObra(id) {
  await connect();
  const obra = await Obra.findOne({ slug: id });

  const anterior = await Obra.findOne()
    .or([
      { 'autor.apellido': { $lt: obra.autor.apellido } },
      {
        $and: [
          { 'autor.apellido': { $eq: obra.autor.apellido } },
          { titulo: { $lt: obra.titulo } },
        ],
      },
    ])
    .sort({ 'autor.apellido': -1, titulo: -1 })
    .limit(1);

  const siguiente = await Obra.findOne()
    .or([
      { 'autor.apellido': { $gt: obra.autor.apellido } },
      {
        $and: [
          { 'autor.apellido': { $eq: obra.autor.apellido } },
          { titulo: { $gt: obra.titulo } },
        ],
      },
    ])
    .sort({ 'autor.apellido': 1, titulo: 1 })
    .limit(1);

  return { obra, anterior, siguiente };
}

export default async (req, res) => {
  try {
    const { obra, anterior, siguiente } = getObra(req.query.id);
    res.json({ obra, anterior, siguiente });
  } catch (e) {
    console.log(e);
    res.statusCode = 404;
    res.end();
  }
};
