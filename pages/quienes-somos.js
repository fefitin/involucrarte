import Head from 'next/head';
import LargeText from './../components/LargeText';
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
          <mark>queremos ayudar</mark>
        </LargeText>

        <p>
          Aportando nuestro granito de arena de diferentes formas.
          <br />
          Andrea Coco . Paula Soto . Miguel Angel Nabhen
        </p>

        <LargeText>
          <mark>Involucrate, cooperá y</mark>
          <br />
          <strong>sentite protagonista!</strong>
        </LargeText>

        <p>
          Pretendemos no ser impasibles y tenemos en cuenta
          <strong> las diferencias sociales</strong> de nuestro país.
        </p>
      </div>

      <Blocks>
        <Block button="Donar" link="/quiero-donar">
          <h2 className="block-title">
            ¿Sos <strong>artista?</strong>
          </h2>
          <p>
            Unite a nuestro grupo de artistas, donanos tu obra para formar parte de este proyecto de
            ayuda.
          </p>
        </Block>
        <Block button="Comprar" link="/obras">
          <h2 className="block-title">
            ¿Querés <strong>una obra?</strong>
          </h2>
          <p>
            El dinero de tu comprá se acredita directamente en una cuenta de
            <strong> FundaciónSí</strong>.
          </p>
        </Block>
      </Blocks>
    </div>
  );
}
