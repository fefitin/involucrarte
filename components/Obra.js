import Link from 'next/link';

export default function Obra({ obra }) {
  return (
    <li>
      <Link href={`/obras/${obra.slug}`}>
        <a>
          <img src={obra.miniatura} alt={obra.titulo} />
          <div className="info">
            <p className="title">{obra.titulo}</p>
            <p className="author">
              {obra.autor.nombre} {obra.autor.apellido}
            </p>
          </div>
        </a>
      </Link>
    </li>
  );
}
