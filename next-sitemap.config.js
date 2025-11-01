/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://exammasterapp.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    outDir: './public',
    changefreq: 'daily',
    priority: 1.0,
    sitemapSize: 5000,
    exclude: ['/api/*', '/'],
    additionalPaths: async (config) => {
        const result = []

        // Add English page
        result.push({
            loc: '/en',
            changefreq: 'daily',
            priority: 1.0,
            lastmod: new Date().toISOString(),
            alternateRefs: [
                {
                    href: 'https://exammasterapp.com/en',
                    hreflang: 'en',
                },
                {
                    href: 'https://exammasterapp.com/fr',
                    hreflang: 'fr',
                },
                {
                    href: 'https://exammasterapp.com/en',
                    hreflang: 'x-default',
                },
            ],
        })

        // Add French page
        result.push({
            loc: '/fr',
            changefreq: 'daily',
            priority: 1.0,
            lastmod: new Date().toISOString(),
            alternateRefs: [
                {
                    href: 'https://exammasterapp.com/en',
                    hreflang: 'en',
                },
                {
                    href: 'https://exammasterapp.com/fr',
                    hreflang: 'fr',
                },
                {
                    href: 'https://exammasterapp.com/en',
                    hreflang: 'x-default',
                },
            ],
        })

        return result
    },
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
