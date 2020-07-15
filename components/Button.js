import Link from 'next/link';

export default function Button({ href, label }) {
  return (
    <Link href={href}>
      <a className="button">{label}</a>
    </Link>
  );
}
