import obras from './../../data/obras.json';
import Head from 'next/head';
import Obra from './../../components/Obra';

export default function Home({ obras }) {
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

export async function getStaticProps({ params }) {
  const sorted = obras.sort((obra1, obra2) =>
    obra1.autor.apellido < obra2.autor.apellido ? -1 : 1
  );

  return {
    props: {
      obras: sorted,
    },
  };
}
