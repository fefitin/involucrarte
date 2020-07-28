import sendmail from './../../libs/sendmail';

export default async (req, res) => {
  const fields = ['nombre', 'email', 'mensaje'];
  const mandatory = ['nombre', 'email'];

  try {
    await sendmail(
      fields,
      mandatory,
      process.env.EMAIL_FROM,
      process.env.EMAIL_TO,
      'Formulario de contacto',
      req.body
    );

    res.statusCode = 200;
    res.json({ ok: true });
  } catch (errors) {
    res.statusCode = 400;
    res.json({ errors });
  }
};
