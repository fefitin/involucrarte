import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import API from './../services/API';
import Link from 'next/link';

const Breadcrumb = () => {
  const router = useRouter();
  const [pages, setPages] = useState([]);

  useEffect(() => {
    updateBreadcrumb(router.pathname, router.query, setPages);
  }, [router.pathname, router.query]);

  return pages.length ? (
    <p className="breadcrumb">.{pages.reduce((prev, curr) => [prev, ' › ', curr])}</p>
  ) : null;
};

const updateBreadcrumb = async (path, query, setPages) => {
  const pages = {
    '/': ['Inicio'],
    '/quienes-somos': ['Quiénes somos'],
    '/a-quienes-ayudamos': ['A quiénes ayudamos'],
    '/obras': ['Obras en venta'],
    '/obras/[id]': ['Obras en venta', ':obra'],
    '/obras/[id]/comprar': ['Obras en venta', ':obra', 'Comprar'],
    '/quiero-donar': ['Quiero donar'],
    '/nos-ayudan': ['Sponsors'],
    '/contacto': ['Contacto'],
  };

  let breadcrumb = [];

  if (pages[path]) {
    breadcrumb = pages[path];
  }

  //Replace :obra with artwork title
  let obra = null;

  if (query && query.id) {
    obra = await API.get(`/obras/${query.id}`);
    breadcrumb = breadcrumb.map(page => {
      if (page === ':obra') {
        page = obra.obra.titulo;
      }

      return page;
    });
  }

  //Create links
  path = path.split('/').slice(1);
  breadcrumb = breadcrumb.map((page, i) => {
    const thisPath = '/' + path.slice(0, i + 1).join('/');
    let thisPathAs = thisPath;
    if (obra) {
      thisPathAs = thisPathAs.replace('[id]', obra.obra.slug);
    }

    if (i === breadcrumb.length - 1) {
      return page;
    } else {
      return (
        <Link key={i} href={thisPath} as={thisPathAs}>
          <a>{page}</a>
        </Link>
      );
    }
  });

  setPages(breadcrumb);
};

export default Breadcrumb;
