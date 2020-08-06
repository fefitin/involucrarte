module.exports = {
  experimental: {
    modern: true,
    async rewrites() {
      return [{ source: '/sitemap.xml', destination: '/api/sitemap' }];
    },
    catchAllRouting: true,
  },
};
