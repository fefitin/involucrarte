import Link from 'next/link';

export default function Button({ href, label, className, as = null }) {
  return (
    <Link href={href} as={as}>
      <a className={`button ${className}`}>
        <span>{label}</span>
      </a>
    </Link>
  );
}
