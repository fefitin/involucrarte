import connect from '../../../../libs/connect';
import Obra from '../../../../models/Obra';
import Reserva from '../../../../models/Reserva';
import sendmail, { mailTransporter } from './../../../../libs/sendmail';
import email from './email';

export async function comprarObra(id, datos, soloVerificar) {
  await connect();

  const obra = await Obra.findOne({ slug: id });
  if (!obra) {
    return false;
  }

  if (obra.vendida) {
    if (soloVerificar) {
      return false;
    } else {
      throw new Error('Obra vendida');
    }
  }

  const reservada = await Reserva.findOne({ obraId: obra._id });

  if (soloVerificar) {
    return reservada;
  } else if (reservada) {
    throw new Error('Obra reservada');
  }

  if (datos.nombre && datos.email) {
    //Notificar al administrador
    const enviar = Object.assign({}, datos);
    const fields = ['obra', 'obraId', 'nombre', 'email', 'metodo'];
    const mandatory = ['nombre', 'email'];

    enviar.obra = obra.titulo;
    enviar.obraId = obra.id.toString();

    await sendmail(
      fields,
      mandatory,
      process.env.EMAIL_FROM,
      process.env.EMAIL_TO,
      'Formulario de reserva',
      enviar
    );

    //Notificar al comprador
    const transporter = mailTransporter();
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: datos.email,
      subject: 'Gracias por tu reserva',
      html: email(obra),
    });

    //Crear nueva reserva
    const reserva = new Reserva();
    reserva.obraId = obra._id;
    reserva.nombre = datos.nombre;
    reserva.email = datos.email;
    reserva.metodo = datos.metodo;

    return await reserva.save();
  } else {
    throw new Error('Campos nombre y e-mail son obligatorios.');
  }
}

export default async (req, res) => {
  try {
    const reserva = await comprarObra(req.query.id, req.body, req.method === 'GET');
    res.json(reserva);
  } catch (e) {
    console.error(e.message);
    res.statusCode = 405;
    res.end();
  }
};
