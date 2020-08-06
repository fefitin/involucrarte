import { NextSeo } from 'next-seo';
import LargeText from './../components/LargeText';
import Sponsor from './../components/Sponsor';
import sponsors from './../data/sponsors.json';

export default function Home() {
  return (
    <div>
      <NextSeo title="nos ayudan · involucrarte"></NextSeo>

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
