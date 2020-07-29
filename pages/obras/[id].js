import { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Button from './../../components/Button';
import YouTubeVideo from '../../components/YouTubeVideo';
import precio from './../../libs/precio';
import { getObras } from '../api/obras/index';
import { getObra } from '../api/obras/[id]';

export default function Obra({ obra, siguiente, anterior }) {
  const container = useRef();
  const author = useRef();
  const image = useRef();

  if (process.browser) {
    //Store window status in local state
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //Update state on resize
    useEffect(() => {
      window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });
    }, []);

    //Update author style on window width change
    useEffect(() => {
      const left = author.current.offsetLeft + author.current.offsetWidth;
      author.current.style.setProperty('--margin', `${windowWidth - left}px`);
      container.current.style.setProperty(
        '--image-center',
        `${image.current.offsetTop + image.current.offsetHeight / 2}px`
      );
    }, [windowWidth]);
  }

  return (
    <div>
      <Head>
        <title>
          {obra.titulo} de {obra.autor.nombre} {obra.autor.apellido} · involucrarte.
        </title>
      </Head>

      <div className="obra container" ref={container}>
        <h1>{obra.titulo}</h1>

        <div className="info">
          <div className="nav">
            {anterior && (
              <Link href="/obras/[id]" as={`/obras/${anterior.slug}`}>
                <a className="prev">Anterior</a>
              </Link>
            )}
            {siguiente && (
              <Link href="/obras/[id]" as={`/obras/${siguiente.slug}`}>
                <a className="next">Siguiente</a>
              </Link>
            )}
          </div>

          <div className="image">
            <img src={obra.imagen} alt={obra.titulo} ref={image} />
            <div className="description">
              {obra.tecnica && <p>{obra.tecnica}</p>}
              {obra.tamano && <p>{obra.tamano}</p>}
              {obra.ano && <p>{obra.ano}</p>}
            </div>
          </div>

          <div className="author" ref={author}>
            <div className="video">
              {obra.autor.foto && <img src={obra.autor.foto} alt={obra.titulo} />}
              {obra.autor.video && (
                <YouTubeVideo id={obra.autor.video} vertical={obra.autor.vertical} />
              )}
            </div>

            <p className="nombre">
              {obra.autor.nombre}
              <br />
              {obra.autor.apellido}
            </p>

            {obra.autor.instagram && (
              <p className="social">
                <a href={`https://instagram.com/${obra.autor.instagram}`} target="_blank">
                  <img src="/images/instagram.svg" alt="Instagram" />{' '}
                  <span>@{obra.autor.instagram}</span>
                </a>
              </p>
            )}

            {obra.autor.facebook && (
              <p className="social">
                <a href={`https://facebook.com/${obra.autor.facebook}`} target="_blank">
                  <img src="/images/facebook.svg" alt="Facebook" />{' '}
                  <span>@{obra.autor.facebook}</span>
                </a>
              </p>
            )}

            {obra.autor.twitter && (
              <p className="social">
                <a href={`https://twitter.com/${obra.autor.instagram}`} target="_blank">
                  <img src="/images/twitter.svg" alt="Twitter" /> <span>@{obra.autor.twitter}</span>
                </a>
              </p>
            )}
          </div>
        </div>

        {obra.precio && (
          <div className="buy">
            <h2>
              <span>Comprar ahora</span>
            </h2>

            <ul className="buttons">
              <li>
                <Button href="/obras/gracias" label={precio(obra.precio)} className="gold"></Button>
              </li>
              <li>
                <Button
                  href="/obras/gracias"
                  label={precio(obra.precio2)}
                  className="silver"
                ></Button>
              </li>
              <li>
                <Button
                  href="/obras/gracias"
                  label={precio(obra.precio3)}
                  className="black"
                ></Button>
              </li>
            </ul>
          </div>
        )}

        <p className="back">
          <Link href="/obras">
            <a>‹ Ver más obras</a>
          </Link>
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
  const { obra, siguiente, anterior } = await getObra(params.id);

  if (obra.precio) {
    obra.precio2 = obra.precio * 1.1;
    obra.precio3 = obra.precio * 1.2;
  }

  return {
    props: {
      obra: JSON.parse(JSON.stringify(obra)),
      siguiente: JSON.parse(JSON.stringify(siguiente)),
      anterior: JSON.parse(JSON.stringify(anterior)),
    },
  };
}
