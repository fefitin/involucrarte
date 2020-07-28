import sendmail from './../../libs/sendmail';
import formidable from 'formidable';

export default async (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (err, values, uploaded) => {
    if (err) {
      res.statusCode = 400;
      res.json({ ok: false });
    }

    const fields = ['nombre', 'email', 'tel', 'obra', 'ficha', 'precio', 'redes', 'mensaje'];
    const mandatory = ['nombre', 'email', 'obra', 'ficha', 'precio'];
    const files = [];

    if (uploaded.foto) {
      files.push(uploaded.foto);
    }

    if (uploaded.autor) {
      files.push(uploaded.autor);
    }

    try {
      await sendmail(
        fields,
        mandatory,
        process.env.EMAIL_FROM,
        process.env.EMAIL_TO,
        'Quiero donar',
        values,
        files
      );

      res.statusCode = 200;
      res.json({ ok: true });
    } catch (errors) {
      res.statusCode = 400;
      res.json({ errors });
    }
  });
};

//Use custom body parser (formidable)
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
