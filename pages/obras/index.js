import Head from 'next/head';
import Obra from './../../components/Obra';

export default function Home() {
  const obras = [
    { id: 1, titulo: 'Necesario', nombre: 'Andrea', apellido: 'Coco', miniatura: '/images/_temp.jpg' },
    { id: 2, titulo: 'Necesario', nombre: 'Andrea', apellido: 'Coco', miniatura: '/images/_temp.jpg' },
    { id: 3, titulo: 'Necesario', nombre: 'Andrea', apellido: 'Coco', miniatura: '/images/_temp.jpg' },
    { id: 4, titulo: 'Necesario', nombre: 'Andrea', apellido: 'Coco', miniatura: '/images/_temp.jpg' },
    { id: 5, titulo: 'Necesario', nombre: 'Andrea', apellido: 'Coco', miniatura: '/images/_temp.jpg' },
    { id: 6, titulo: 'Necesario', nombre: 'Andrea', apellido: 'Coco', miniatura: '/images/_temp.jpg' },
    { id: 7, titulo: 'Necesario', nombre: 'Andrea', apellido: 'Coco', miniatura: '/images/_temp.jpg' },
    { id: 8, titulo: 'Necesario', nombre: 'Andrea', apellido: 'Coco', miniatura: '/images/_temp.jpg' },
    { id: 9, titulo: 'Necesario', nombre: 'Andrea', apellido: 'Coco', miniatura: '/images/_temp.jpg' },
    { id: 10, titulo: 'Necesario', nombre: 'Andrea', apellido: 'Coco', miniatura: '/images/_temp.jpg' },
  ];

  return (
    <div>
      <Head>
        <title>obras · involucrarte.</title>
      </Head>

      <div className="container">
        <ul className="listing">
          {obras.map(obra => (
            <Obra key={obra.id} obra={obra}></Obra>
          ))}
        </ul>
      </div>
    </div>
  );
}
