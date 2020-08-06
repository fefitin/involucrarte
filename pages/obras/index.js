import { NextSeo } from 'next-seo';
import Obra from './../../components/Obra';
import { getObras } from '../api/obras/index';

export default function Home({ obras }) {
  return (
    <div>
      <NextSeo title="obras en venta · involucrarte"></NextSeo>

      <div className="container">
        <ul className="listing">
          {obras.map(obra => (
            <Obra key={obra._id} obra={obra}></Obra>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const obras = await getObras();
  return {
    props: {
      //Returned props must be serializable
      obras: JSON.parse(JSON.stringify(obras)),
    },
  };
}
