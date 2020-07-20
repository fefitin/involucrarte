import Link from 'next/link';

export default function Button({ href, label, className }) {
  return (
    <Link href={href}>
      <a className={`button ${className}`}>
        <span>{label}</span>
      </a>
    </Link>
  );
}
