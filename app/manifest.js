export default function manifest() {
  return {
    name: 'Learn 2 Live Legacy — The Forgiveness Framework',
    short_name: 'Learn 2 Live',
    description:
      'A structured, evidence-based framework that uses theatre and lived experience to help young people understand forgiveness as a practical human tool.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    lang: 'en-GB',
    dir: 'ltr',
    orientation: 'portrait',
    categories: ['education', 'non-profit', 'arts'],
    icons: [
      { src: '/icon.png',       sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
