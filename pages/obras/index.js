import Head from 'next/head';
import Obra from './../../components/Obra';
import obras from './../../data/obras.json';

export default function Home() {
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
