import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import API from './../services/API';

const Breadcrumb = () => {
  const router = useRouter();
  const [pages, setPages] = useState([]);

  useEffect(() => {
    updateBreadcrumb(router.pathname, router.query, setPages);
  }, [router.pathname]);

  return <p className="breadcrumb">. {pages.join(' › ')}</p>;
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
  if (query && query.id) {
    const obra = await API.get(`/obras/${query.id}`);
    breadcrumb = breadcrumb.map(page => {
      if (page === ':obra') {
        page = obra.obra.titulo;
      }

      return page;
    });
  }

  setPages(breadcrumb);
};

export default Breadcrumb;
