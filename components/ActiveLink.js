import { withRouter } from 'next/router';
import Link from 'next/link';

const ActiveLink = ({ router, children, href, onClick = null }) => {
  const active = router.pathname === href;

  return (
    <Link href={href}>
      <a className={active ? 'active' : ''} onClick={onClick}>
        {children}
      </a>
    </Link>
  );
};

export default withRouter(ActiveLink);
