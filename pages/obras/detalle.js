import { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import nl2br from 'react-nl2br';
import Button from './../../components/Button';

export default function Home() {
  const author = useRef();

  const obra = { id: 1, titulo: 'Necesario', nombre: 'Andrea', apellido: 'Coco', miniatura: '/images/_temp.jpg', imagen: '/images/_temp2.jpg', descripcion: 'Acrílico sobre tela 100cm x 100cm\nAño 2015', instagram: 'andrea.coco', twitter: 'andrea.coco', facebook: 'andrea.coco' };

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
    }, [windowWidth]);
  }

  return (
    <div>
      <Head>
        <title>
          {obra.titulo} de {obra.nombre} {obra.apellido} · involucrarte.
        </title>
      </Head>

      <div className="obra container">
        <h1>{obra.titulo}</h1>

        <div className="info">
          <div className="image">
            <img src={obra.imagen} alt={obra.titulo} />
            <p>{nl2br(obra.descripcion)}</p>
          </div>

          <div className="author" ref={author}>
            <img src={obra.imagen} alt={obra.titulo} className="video" />
            <p className="nombre">
              {obra.nombre}
              <br />
              {obra.apellido}
            </p>

            {obra.instagram && (
              <p className="social">
                <a href={`https://instagram.com/${obra.instagram}`} target="_blank">
                  <img src="/images/instagram.svg" alt="Instagram" /> @{obra.instagram}
                </a>
              </p>
            )}

            {obra.facebook && (
              <p className="social">
                <a href={`https://facebook.com/${obra.facebook}`} target="_blank">
                  <img src="/images/facebook.svg" alt="Facebook" /> @{obra.facebook}
                </a>
              </p>
            )}

            {obra.twitter && (
              <p className="social">
                <a href={`https://twitter.com/${obra.instagram}`} target="_blank">
                  <img src="/images/twitter.svg" alt="Twitter" /> @{obra.twitter}
                </a>
              </p>
            )}
          </div>
        </div>

        <div className="buy">
          <h2>
            <span>Comprar ahora</span>
          </h2>

          <ul className="buttons">
            <li>
              <Button href="/obras/gracias" label="$ 1.000.000" className="gold"></Button>
            </li>
            <li>
              <Button href="/obras/gracias" label="$ 1.500.000" className="silver"></Button>
            </li>
            <li>
              <Button href="/obras/gracias" label="$ 2.000.000" className="black"></Button>
            </li>
          </ul>
        </div>

        <p className="back">
          <Link href="/obras">
            <a>‹ Ver más obras</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
