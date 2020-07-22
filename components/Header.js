import { useState } from 'react';
import Link from 'next/link';
import ActiveLink from './ActiveLink';

export default function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <header className="container header">
      <div className="top">
        <Link href="/">
          <a className="logo">
            <img src="/images/involucrarte.svg" alt="involucrarte." />
          </a>
        </Link>
        <button className="toggle-menu" onClick={e => setVisible(visible => !visible)}>
          <img src="/images/menu.svg" alt="Menú" />
        </button>
      </div>
      <nav className={`menu ${visible ? 'visible' : ''}`}>
        <ul>
          <li>
            <ActiveLink href="/quienes-somos">Quiénes somos</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/a-quienes-ayudamos">A quiénes ayudamos</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/obras">Obras en venta </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/quiero-donar">Quiero donar</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/nos-ayudan">Sponsors</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/contacto">Contacto</ActiveLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
