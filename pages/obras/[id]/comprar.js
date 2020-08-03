import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';
import precio from '../../../libs/precio';
import { getObras } from '../../api/obras/index';
import { getObra } from '../../api/obras/[id]';

export default function ObraComprar({ obra }) {
  const router = useRouter();
  const ofertado = router.query.precio;

  const [viewTransfer, setViewTransfer] = useState(false);

  const buy = (id, method) => {
    if (method === 'transfer') {
      setViewTransfer(true);
    }
  };

  return (
    <div className="obra comprar">
      <Head>
        <title>
          {obra.titulo} de {obra.autor.nombre} {obra.autor.apellido} · involucrarte.
        </title>
      </Head>

      <div className="container">
        <p>Estás comprando la obra</p>
        <h1>{obra.titulo}</h1>
        <p className="author-name">
          de {obra.autor.nombre} {obra.autor.apellido}
        </p>
        <p>por un valor de</p>
        <p className="price">{precio(ofertado)}</p>

        <ol className="steps">
          <li>
            Una vez realizada la compra recibirás un certificado de depósito emitido por{' '}
            <strong>FundacionSí</strong>. Si no lo recibís o querés realizar cualquier consulta,
            podés hacerlo a{' '}
            <a href="mailto:administracion@fundacionsi.org.ar">administracion@fundacionsi.org.ar</a>
            .
          </li>
          <li>
            Dentro de las 48 horas de realizado el pago, envía el certificado a{' '}
            <a href="mailto:involucrarte.dona@gmail.com">involucrarte.dona@gmail.com</a> indicando
            que compraste la <strong>obra #{obra.id}</strong>.
          </li>
          <li>Te ponemos en contacto con el artista para recibir la obra.</li>
        </ol>

        <div className="prices">
          {!viewTransfer ? (
            <div className="buy">
              <h2>
                <span>Forma de pago</span>
              </h2>

              <ul className="buttons">
                <li>
                  <a
                    href="https://donaronline.org/fundacion-si/hace-posible-los-proyectos-de-fundacion-si"
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => buy(obra.id, 'card')}
                  >
                    <span>Tarjeta de crédito</span>
                  </a>
                </li>
                <li>
                  <button className="button" onClick={() => buy(obra.id, 'transfer')}>
                    <span>Transferencia o depósito</span>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <ul className="transfer">
              <li>
                <strong>Nombre de la cuenta:</strong> Fundación Sí Argentina
              </li>
              <li>
                <strong>Banco:</strong> Banco Hipotecario
              </li>
              <li>
                <strong>Alias:</strong> FUNDACION.SI.ARG
              </li>
              <li>
                <strong>Cuenta Corriente en pesos Nro.:</strong> 3-000-0000039073-6
              </li>
              <li>
                <strong>CBU:</strong> 0440000-43000000390736-1
              </li>
              <li>
                <strong>CUIT:</strong> 30-71250682-9
              </li>
            </ul>
          )}
        </div>

        <p className="tos">
          La obra será reservada para vos durante 72 horas.
          <br />
          involucrarte.com.ar se exime de cualquier responsabilidad por el proceso de envío de las
          piezas, es parte del compromiso solidario de cada participante.
        </p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const obras = await getObras('/obras');
  const paths = obras.map(obra => {
    return {
      params: {
        id: obra.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { obra } = await getObra(params.id);
  return {
    props: {
      obra: JSON.parse(JSON.stringify(obra)),
    },
  };
}
