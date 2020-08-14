import { useRouter } from 'next/router';
import { useRef, useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import precio from '../../../libs/precio';
import { getObras } from '../../api/obras/index';
import { getObra } from '../../api/obras/[id]';
import API from './../../../services/API';

export default function ObraComprar({ obra }) {
  const router = useRouter();
  const ofertado = router.query.precio;

  const [error, setError] = useState(false);
  const [estadoCargado, setEstadoCargado] = useState(false);
  const [reservada, setReservada] = useState(false);
  const [reservando, setReservando] = useState(false);
  const [transferencia, setTransferencia] = useState(false);

  useEffect(() => {
    API.get(`/obras/${obra.slug}/comprar`).then(reservada => {
      setReservada(reservada._id);
      setEstadoCargado(true);
    });
  }, []);

  const comprar = async (id, nombre, email, metodo) => {
    setReservando(true);

    try {
      const data = { nombre, email, metodo };
      const reserva = await API.post(`/obras/${id}/comprar`, data);
      if (reserva) {
        if (metodo === 'transfer') {
          setTransferencia(true);
        } else {
          location.href =
            'https://donaronline.org/fundacion-si/hace-posible-los-proyectos-de-fundacion-si';
          setReservada(true);
        }
      } else {
        setError(true);
      }
    } catch (e) {
      setError(true);
    }

    setReservando(false);
  };

  let controles;

  if (estadoCargado) {
    if (reservada) {
      controles = <ObraReservada></ObraReservada>;
    } else if (error) {
      controles = <Error></Error>;
    } else if (transferencia) {
      controles = <DatosTransferencia></DatosTransferencia>;
    } else {
      controles = <Controles obra={obra} comprar={comprar} reservando={reservando}></Controles>;
    }
  }

  return (
    <div className="obra comprar">
      <NextSeo
        title={`${obra.titulo} de ${obra.autor.nombre} ${obra.autor.apellido} · involucrarte.`}
        openGraph={{
          images: [{ url: `https://involucrarte.com.ar/${obra.imagen}` }],
        }}
      ></NextSeo>

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

        <div className="prices">{controles}</div>

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

const Controles = ({ obra, comprar, reservando }) => {
  const form = useRef();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const pagos = [
    { id: 'card', nombre: 'Tarjeta de crédito' },
    { id: 'transfer', nombre: 'Transferencia o depósito' },
  ];

  const onSubmit = metodo => {
    if (form.current.reportValidity()) {
      comprar(obra.slug, nombre, email, metodo);
    }
  };

  return (
    <div className="buy">
      <h2>
        <span>Completá tu reserva</span>
      </h2>

      <form ref={form} className="form form-simple" onSubmit={e => e.preventDefault()}>
        <div className="field">
          <input
            type="text"
            placeholder="Nombre y apellido"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <ul className="buttons">
          {reservando ? (
            <li>
              <button type="button" disabled className="button">
                <span>Espera por favor...</span>
              </button>
            </li>
          ) : (
            pagos.map(metodo => (
              <li key={metodo.id}>
                <button type="button" className="button" onClick={() => onSubmit(metodo.id)}>
                  <span>{metodo.nombre}</span>
                </button>
              </li>
            ))
          )}
        </ul>
      </form>
    </div>
  );
};

const ObraReservada = () => {
  return (
    <div className="buy">
      <h2>
        <span>La obra ya está reservada</span>
      </h2>

      <p>Recordá que las reservas tienen una duración de 72 horas.</p>
    </div>
  );
};

const Error = () => {
  return (
    <div className="buy">
      <h2>
        <span>Error al reservar tu obra</span>
      </h2>

      <p>
        No pudimos concretar tu reserva. Por favor, contactanos a{' '}
        <a href="mailto:involucrarte.dona@gmail.com">involucrarte.dona@gmail.com</a> para que
        podamos ayudarte.
      </p>
    </div>
  );
};

const DatosTransferencia = () => {
  return (
    <>
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
      <p>
        Enviá el comprobante de tu transferencia a{' '}
        <a href="mailto:administracion@fundacionsi.org.ar">administracion@fundacionsi.org.ar</a>.
      </p>
    </>
  );
};

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
