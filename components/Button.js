import Link from 'next/link';

export default function Button({ href, label }) {
  return (
    <Link href={href}>
      <a className="button">
        <span>{label}</span>
      </a>
    </Link>
  );
}
