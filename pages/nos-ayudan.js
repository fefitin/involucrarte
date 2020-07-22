import Head from 'next/head';
import LargeText from './../components/LargeText';
import Sponsor from './../components/Sponsor';
import sponsors from './../data/sponsors.json';

export default function Home() {
  return (
    <div>
      <Head>
        <title>sponsors · involucrarte.</title>
      </Head>

      <div className="small-container">
        <LargeText>
          <strong>Gracias por</strong>
          <br />
          <mark>acompañarnos</mark>
        </LargeText>
      </div>
      <div className="container">
        <ul className="listing sponsors">
          {sponsors.map(sponsor => (
            <Sponsor key={sponsor.nombre} sponsor={sponsor}></Sponsor>
          ))}
        </ul>
      </div>
    </div>
  );
}
