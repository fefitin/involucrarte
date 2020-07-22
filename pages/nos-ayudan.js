import Head from 'next/head';
import LargeText from './../components/LargeText';

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
        <ul className="sponsors">
          <li>
            <a href="https://divinodi.com" target="_blank" rel="nofollow">
              <img src="/images/logos/divinodisenio.svg" alt="Divino Diseño" className="divino" />
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/vanegarciadg" target="_blank" rel="nofollow">
              <img src="/images/logos/VaneGarcia.svg" alt="Vane García" className="vane" />
            </a>
          </li>
          <li>
            <a href="https://fundacionsi.org.ar/" target="_blank" rel="nofollow">
              <img src="/images/fundacionsi.png" alt="FundaciónSí" className="si" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
