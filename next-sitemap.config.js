/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mannshah.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404'],
  generateIndexSitemap: true,
  outDir: './public', // ensures output goes to /public
};
