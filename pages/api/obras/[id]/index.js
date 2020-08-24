import connect from './../../../../libs/connect';
import Obra from './../../../../models/Obra';

export async function getObra(id) {
  await connect();
  const obra = await Obra.findOne({ slug: id });

  const siguiente = await Obra.findOne()
    .or([{ id: { $lt: obra.id } }])
    .sort({ id: -1 })
    .limit(1);

  const anterior = await Obra.findOne()
    .or([{ id: { $gt: obra.id } }])
    .sort({ id: 1 })
    .limit(1);

  return { obra, anterior, siguiente };
}

export default async (req, res) => {
  try {
    const { obra, anterior, siguiente } = await getObra(req.query.id);
    res.json({ obra, anterior, siguiente });
  } catch (e) {
    console.log(e);
    res.statusCode = 404;
    res.end();
  }
};
