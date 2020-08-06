import LargeText from './../components/LargeText';
import HomeVideo from './../components/HomeVideo';
import { Blocks, Block } from './../components/Blocks';

export default function Home() {
  return (
    <div className="home">
      <div className="small-container">
        <LargeText>
          <mark>Una forma de ayudar</mark>
          <br />
          <strong>a los que más lo necesitan.</strong>
        </LargeText>
      </div>

      <HomeVideo></HomeVideo>

      <div className="video-caption">
        <p>
          Llevamos adelante esta acción gracias a la colaboración de este grupo de artistas, bajo el
          lema de
        </p>
        <img src="/images/involucrarte.svg" alt="Involucrarte." />
      </div>

      <div className="small-container">
        <p>
          ¿De que sé trata involucr<strong>arte</strong>? Un grupo de artistas dona sus creaciones.
          <br />
          Desde involucr<strong>arte</strong>, publicamos las obras y gestionamos la venta.
        </p>

        <LargeText>
          Cuántas más obras se venden, más podemos ayudar.
          <br />
          <mark>
            <strong>¿Querés</strong> involucr<strong>arte?</strong>
          </mark>
        </LargeText>

        <p>
          Te invitamos a que veas las obras, a que compartas el sitio y te sientas protagonista de
          esta acción. ¿Nos acompañás?
        </p>
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
