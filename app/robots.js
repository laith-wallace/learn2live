const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://learn2livelegacy.org';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/actions/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
