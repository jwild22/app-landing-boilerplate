/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://exammasterapp.com',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 1.0,
    sitemapSize: 5000,
    generateIndexSitemap: true,
    exclude: ['/api/*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/'],
            },
        ],
    },
}
