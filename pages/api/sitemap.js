import { SitemapStream, streamToPromise } from 'sitemap';
import { getObras } from './obras/index';

export default async function sitemapFunc(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  try {
    const paginas = [
      '',
      'quienes-somos',
      'a-quienes-ayudamos',
      'obras',
      'quiero-donar',
      'nos-ayudan',
      'contacto',
    ];
    const obras = await getObras(); // call the backend and fetch all stories

    const smStream = new SitemapStream({ hostname: 'https://' + req.headers.host });

    paginas.forEach(pagina => {
      smStream.write({
        url: `/${pagina}`,
        lastmod: new Date(),
      });
    });

    obras.forEach(obra => {
      smStream.write({
        url: `/obras/${obra.slug}`,
        lastmod: new Date(),
      });
    });

    smStream.end();
    const sitemap = await streamToPromise(smStream).then(sm => sm.toString());
    res.write(sitemap);
    res.end();
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
    res.end();
  }
}
