import Head from 'next/head';
import LargeText from './../components/LargeText';
import Video from './../components/Video';
import FundacionSi from './../components/FundacionSi';
import { Blocks, Block } from './../components/Blocks';

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>involucrarte.</title>
      </Head>

      <div className="small-container">
        <p>
          ¡Hola! ¡Una alegría que estés ahí!
          <br />
          ¿Qué es Involucr<strong>Arte</strong>?
        </p>

        <LargeText>
          <mark>Una forma de ayudar</mark>
          <br />
          <strong>a los más necesitados.</strong>
        </LargeText>

        <p>
          Un grupo de artistas dona su arte para la venta. En esta página publicamos las obras y gestionamos la venta. Los compradores depositan el dinero directamente en una cuenta de la <strong>FundacionSí</strong>.
        </p>

        <LargeText>
          Cuántas más obras se venden, más dinero disponible para cooperar.
          <br />
          <mark>
            <strong>¿Querés</strong> involucr<strong>arte?</strong>
          </mark>
        </LargeText>

        <p>Te invito a ver las obras... ¡¡¡Tal vez nos puedas acompañar!!!</p>
      </div>

      <Video src="/video.mp4"></Video>

      <div className="video-caption">
        <p>Hoy podemos llevar adelante esta original acción gracias a la compasión y generosidad de este grupo de artistas, bajo el lema de</p>
        <img src="/images/involucrarte.svg" alt="Involucrarte." />
      </div>

      <div className="small-container">
        <LargeText>
          Involucrate ayudando
          <br />
          <mark>
            <strong>y sentite orgulloso</strong>
          </mark>
          <br />
          de vos.
        </LargeText>
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
