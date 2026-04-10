const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://learn2livelegacy.org';

export default function sitemap() {
  const now = new Date();
  const routes = [
    { path: '',                          priority: 1.0,  changeFrequency: 'monthly' },
    { path: '/fund',                     priority: 0.95, changeFrequency: 'monthly' },
    { path: '/keynote',                  priority: 0.9,  changeFrequency: 'monthly' },
    { path: '/programmes',               priority: 0.85, changeFrequency: 'monthly' },
    { path: '/programmes/spoken-word',   priority: 0.85, changeFrequency: 'monthly' },
    { path: '/programmes/filmmaking',    priority: 0.85, changeFrequency: 'monthly' },
    { path: '/the-framework',            priority: 0.9,  changeFrequency: 'monthly' },
    { path: '/our-son',                  priority: 0.9,  changeFrequency: 'monthly' },
    { path: '/about',                    priority: 0.9,  changeFrequency: 'monthly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
