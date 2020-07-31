import Link from 'next/link';

export default function Obra({ obra }) {
  return (
    <li>
      <Link href="/obras/[id]" as={`/obras/${obra.slug}`}>
        <a>
          <img src={obra.miniatura} alt={obra.titulo} />
          <div className="info">
            <p className="title">{obra.titulo}</p>
            <p className="author">
              {obra.autor.nombre} {obra.autor.apellido}
            </p>
            <p className="number">Obra #{obra.id}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
