import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="container footer">
      <ul className="links">
        <li>
          <Link href="/quienes-somos">
            <a>Quiénes somos</a>
          </Link>
        </li>
        <li>
          <Link href="/a-quienes-ayudamos">
            <a>A quiénes ayudamos</a>
          </Link>
        </li>
        <li>
          <Link href="/obras">
            <a>Obras en venta</a>
          </Link>
        </li>
        <li>
          <Link href="/quiero-donar">
            <a>Quiero donar</a>
          </Link>
        </li>
        <li>
          <Link href="/contacto">
            <a>Contacto</a>
          </Link>
        </li>
        <li>
          <Link href="/nos-ayudan">
            <a>Sponsors</a>
          </Link>
        </li>
      </ul>

      <div className="social">
        <a href="https://instagram.com/involucrarte.dona/" target="_blank" rel="noreferrer">
          <img src="/images/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/involucrate.dona/" target="_blank" rel="noreferrer">
          <img src="/images/facebook.svg" alt="Facebook" />
        </a>
      </div>

      <div className="copy">
        <p>
          ©2020 involucr<strong>arte.</strong> &reg;
          <br />
          Todos los derechos reservados.
        </p>

        <div className="logos">
          <a href="https://divinodi.com" target="_blank" rel="nofollow">
            <img
              src="/images/logos/divinodisenio-footer.svg"
              alt="Divino Diseño"
              className="divino"
            />
          </a>
          <a href="https://www.behance.net/vanegarciadg" target="_blank" rel="nofollow">
            <img src="/images/logos/vanegarcia-footer.svg" alt="Vane García" className="vane" />
          </a>
        </div>
      </div>
    </footer>
  );
}
