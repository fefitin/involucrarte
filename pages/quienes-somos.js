import Head from 'next/head';
import LargeText from './../components/LargeText';
import Video from './../components/Video';
import FundacionSi from './../components/FundacionSi';
import { Blocks, Block } from './../components/Blocks';

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>quiénes somos · involucrarte.</title>
      </Head>

      <div className="small-container">
        <LargeText>
          Somos un grupo
          <br />
          de personas que,
          <br />
          ante las evidentes
          <br />
          <strong>diferencias sociales,</strong>
          <mark>tratamos de ayudar</mark>
        </LargeText>

        <p>Aportando nuestro granito de arena de diferentes formas.</p>

        <LargeText>
          <mark>Involucrate, cooperá y</mark>
          <br />
          <strong>sentite orgulloso de vos!</strong>
        </LargeText>

        <p>
          Pretendemos no ser impasibles a <strong>las diferencias sociales</strong> de nuestro país y en el mundo.
        </p>
      </div>

      <Blocks>
        <Block button="Donar" link="">
          <h2>
            ¿Sos <strong>artista?</strong>
          </h2>
          <p>Unite a nuestro grupo de artistas y donanos tu obra para formar parte de este generoso proyecto.</p>
        </Block>
        <Block button="Comprar" link="">
          <h2>
            ¿Querés <strong>una obra?</strong>
          </h2>
          <p>
            El total del dinero de tu comprá será donado a la <strong>FundaciónSi</strong> para los que más lo necesitan.
          </p>
        </Block>
      </Blocks>

      <FundacionSi></FundacionSi>
    </div>
  );
}
