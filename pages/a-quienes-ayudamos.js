import Head from 'next/head';
import LargeText from './../components/LargeText';
import Video from './../components/Video';
import FundacionSi from './../components/FundacionSi';
import { Blocks, Block } from './../components/Blocks';

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>a quiénes ayudamos · involucrarte.</title>
      </Head>

      <div className="small-container">
        <LargeText>
          Nuestro principal interés
          <br />
          de ayuda está focalizado
          <br />
          <mark>en los niños y familias de</mark>
          <br />
          <mark>muy bajos recursos</mark>
          <br />a través de la <strong>FundaciónSí</strong>.
        </LargeText>
      </div>

      <Blocks>
        <Block button="Conocer Más" link="https://fundacionsi.org.ar" target="_blank">
          <h2 className="block-title">
            Sobre la <strong>FundaciónSí?</strong>
          </h2>
          <p>Somos una ONG que tiene como principal objetivo promover la inclusión social de los sectores más vulnerables de la Argentina.</p>
          <p>El trabajo es realizado por un gran número de voluntarios mediante un abordaje integral que incluye la asistencia, la contención, la capacitación, la educación y la cultura del trabajo.</p>
          <p>Quienes formamos Sí creemos en el trabajo de igual a igual, en el trabajo en equipo, en la heterogeneidad de los grupos, en la complementación y en las nuevas generaciones.</p>

          <p>Quienes formamos Sí estamos convencidos de que transformar la realidad es posible y, para lograrlo, necesitamos el compromiso de todos.</p>
        </Block>
        <Block button="Donar" link="/quiero-donar">
          <h2 className="block-title">
            ¿Sos <strong>artista?</strong>
          </h2>
          <p>Unite a nuestro grupo de artistas y donanos tu obra para formar parte de este generoso proyecto.</p>
        </Block>
      </Blocks>

      <FundacionSi></FundacionSi>
    </div>
  );
}
