import Head from 'next/head';
import FundacionSi from './../../components/FundacionSi';

export default function Home() {
  return (
    <div className="form-container">
      <Head>
        <title>contacto · involucrarte.</title>
      </Head>

      <form className="form" action="contacto/gracias">
        <h1 className="block-title">
          Recibimos <strong>tu consulta</strong>
        </h1>

        <div className="fieldset">
          <div className="field">
            <input type="text" placeholder="Nombre y apellido" />
          </div>
          <div className="field">
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="field">
            <textarea rows="10" placeholder="Escriba su mensaje o consulta aquí..."></textarea>
          </div>
          <button type="submit" className="button submit" disabled>
            <span>Enviar</span>
          </button>
        </div>
      </form>

      <FundacionSi></FundacionSi>
    </div>
  );
}
