export default function Sponsor({ sponsor }) {
  return (
    <li>
      <a href={sponsor.link.url} target="_blank" rel="nofollow">
        <img src={sponsor.logo} alt={sponsor.nombre} className="image" />
        <div className="info">
          <p className="author">{sponsor.nombre}</p>
          <p className="description">{sponsor.descripcion}</p>
          <p className="link">
            <img src={sponsor.link.icono} alt="web" />
            {sponsor.link.nombre}
          </p>
        </div>
      </a>
    </li>
  );
}
