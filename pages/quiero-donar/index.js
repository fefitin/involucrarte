import { useState } from 'react';
import Head from 'next/head';
import FundacionSi from './../../components/FundacionSi';

export default function Home() {
  const [image, setImage] = useState(null);

  const loadImage = e => {
    if (e.target.files && e.target.files.length) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="form-container">
      <Head>
        <title>quiero donar · involucrarte.</title>
      </Head>

      <form className="form" action="quiero-donar/gracias">
        <h1 className="block-title">
          Recibimos <strong>tu donación</strong>
        </h1>

        <div className="intro">
          <p>
            Completá el siguiente formulario para involucr<strong>arte</strong> ofreciendo tu obra.
            <br />
            Podés donar la cantidad de obras que quieras.
          </p>
        </div>

        <div className="fieldset">
          <div className="field">
            <input type="text" placeholder="Nombre y apellido" />
          </div>
          <div className="field">
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="field">
            <input type="text" placeholder="Celular" />
          </div>
          <div className="field">
            <input type="text" placeholder="Nombre de la obra" />
          </div>
          <div className="field">
            <input type="text" placeholder="Ficha técnica" />
          </div>
          <div className="field">
            <input type="text" placeholder="Precio base" />
          </div>
          <div className="field">
            <input type="text" placeholder="Redes" />
          </div>
          <div className="field files">
            <div className="file-upload">
              <p>Foto de la obra</p>
              <div className="preview" style={{ backgroundImage: `url(${image})` }}></div>
              <button type="button" className="button">
                <span>Seleccionar archivo</span>
              </button>
              <input type="file" onChange={loadImage} accept=".jpg,.jpeg" />
            </div>
            <div className="file-upload">
              <p>Foto del autor</p>
              <div className="preview" style={{ backgroundImage: `url(${image})` }}></div>
              <button type="button" className="button">
                <span>Seleccionar archivo</span>
              </button>
              <input type="file" onChange={loadImage} accept=".jpg,.jpeg" />
            </div>
          </div>
          <div className="field">
            <textarea rows="10" placeholder="Escriba su mensaje aquí..."></textarea>
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
