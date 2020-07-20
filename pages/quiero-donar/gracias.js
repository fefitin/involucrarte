import Head from 'next/head';
import LargeText from './../../components/LargeText';
import Button from './../../components/Button';
import { Blocks, Block } from './../../components/Blocks';
import ShareButtons from './../../components/ShareButtons';

export default function Home() {
  return (
    <div>
      <Head>
        <title>contacto · involucrarte.</title>
      </Head>

      <div className="small-container">
        <LargeText>
          <mark>¡Te involucraste!</mark>
          <br />
          <strong>Gracias por tu ayuda</strong>
        </LargeText>

        <p>Y por formar parte de este generoso proyecto.</p>

        <Button href="/obras" label="Ver más obras"></Button>
      </div>

      <Blocks>
        <Block link="">
          <h2 className="block-title">
            Corré <strong>la voz</strong>
          </h2>
          <p>Contale a tus colegas y seguidores para que otros se involucren y sean parte.</p>

          <div className="buttons">
            <ShareButtons></ShareButtons>
          </div>
        </Block>
      </Blocks>
    </div>
  );
}
