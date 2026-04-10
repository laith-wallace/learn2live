import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://learn2livelegacy.org';

const TITLE = 'Learn 2 Live Legacy — The Forgiveness Framework';
const DESCRIPTION =
  'A structured, evidence-based youth programme that uses theatre and lived experience to help young people in South London understand forgiveness as a practical tool for resilience.';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: TITLE,
    template: '%s | Learn 2 Live Legacy',
  },
  description: DESCRIPTION,
  applicationName: 'Learn 2 Live Legacy',
  authors: [{ name: 'Jermaine Wong', url: BASE_URL + '/about' }],
  creator: 'Jermaine Wong',
  publisher: 'Learn 2 Live Legacy',
  category: 'Non-profit',
  keywords: [
    'Forgiveness Framework',
    'Learn 2 Live Legacy',
    'Jermaine Wong',
    'Our Son',
    'youth resilience programme',
    'South London youth programmes',
    'theatre for change',
    'civic arts education',
    'Brixton House',
    'Kiyan Prince Foundation',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: BASE_URL,
    siteName: 'Learn 2 Live Legacy',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: '@learn2livelegacy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// Structured data — rendered as a single JSON-LD graph so entities cross-reference cleanly.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'NGO',
      '@id': `${BASE_URL}/#organization`,
      name: 'Learn 2 Live Legacy',
      alternateName: 'Learn 2 Live',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/icon.png`,
        width: 192,
        height: 192,
      },
      image: `${BASE_URL}/opengraph-image`,
      description: DESCRIPTION,
      founder: { '@id': `${BASE_URL}/#jermaine-wong` },
      foundingDate: '2009',
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'South London',
      },
      knowsAbout: [
        'Forgiveness',
        'Youth resilience',
        'Theatre for social change',
        'Community arts education',
      ],
      sameAs: [],
      potentialAction: {
        '@type': 'DonateAction',
        name: 'Fund This Initiative',
        target: `${BASE_URL}/fund`,
        description:
          'Fund a structured, repeatable model designed to break cycles of harm — from £5,000 pilot workshops to £100,000+ borough rollouts.',
      },
    },
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#jermaine-wong`,
      name: 'Jermaine Wong',
      jobTitle: 'Playwright, Director and Founder',
      description:
        'Playwright, director and founder of Learn 2 Live Legacy. Over 15 years delivering theatre-based youth work across South London.',
      url: `${BASE_URL}/about`,
      affiliation: { '@id': `${BASE_URL}/#organization` },
      worksFor: { '@id': `${BASE_URL}/#organization` },
      knowsAbout: [
        'Playwriting',
        'Theatre direction',
        'Youth programmes',
        'The Forgiveness Framework',
      ],
    },
    {
      '@type': 'TheaterEvent',
      '@id': `${BASE_URL}/#our-son`,
      name: 'Our Son',
      description:
        'An award-winning, one-hour theatrical production that anchors the Forgiveness Framework by placing audiences inside the consequence of unforgiveness.',
      performer: { '@id': `${BASE_URL}/#jermaine-wong` },
      organizer: { '@id': `${BASE_URL}/#organization` },
      url: `${BASE_URL}/our-son`,
      location: {
        '@type': 'Place',
        name: 'Brixton House',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Brixton',
          addressRegion: 'London',
          addressCountry: 'GB',
        },
      },
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    },
    {
      '@type': 'CreativeWork',
      '@id': `${BASE_URL}/#forgiveness-framework`,
      name: 'The Forgiveness Framework',
      creator: { '@id': `${BASE_URL}/#jermaine-wong` },
      publisher: { '@id': `${BASE_URL}/#organization` },
      url: `${BASE_URL}/the-framework`,
      description:
        'A four-phase structured programme — Recognition, Reflection, Reframe, Recommitment — that helps young people understand forgiveness as a practical tool for building resilience.',
      inLanguage: 'en-GB',
      audience: {
        '@type': 'PeopleAudience',
        audienceType: 'Young people and educators',
      },
    },
    {
      '@type': 'EducationalOccupationalProgram',
      '@id': `${BASE_URL}/#spoken-word`,
      name: 'Spoken Word',
      description:
        'A structured creative intervention that transforms lived experience into written and performed work, culminating in a public showcase.',
      url: `${BASE_URL}/programmes/spoken-word`,
      provider: { '@id': `${BASE_URL}/#organization` },
      programType: 'Youth arts programme',
      educationalLevel: 'Secondary and further education',
      occupationalCategory: 'Youth creative development',
      audience: {
        '@type': 'EducationalAudience',
        educationalRole: 'Young people aged 14–21',
      },
    },
    {
      '@type': 'EducationalOccupationalProgram',
      '@id': `${BASE_URL}/#filmmaking`,
      name: 'Filmmaking',
      description:
        'A cinematic pathway where young people develop, write, shoot, and premiere their own short films.',
      url: `${BASE_URL}/programmes/filmmaking`,
      provider: { '@id': `${BASE_URL}/#organization` },
      programType: 'Youth arts programme',
      educationalLevel: 'Secondary and further education',
      occupationalCategory: 'Youth creative development',
      audience: {
        '@type': 'EducationalAudience',
        educationalRole: 'Young people aged 14–21',
      },
    },
    {
      '@type': 'Service',
      '@id': `${BASE_URL}/#keynote-speaking`,
      name: 'Keynote Speaking — Jermaine Wong',
      description:
        'Keynote speaking engagements on forgiveness, youth resilience, interrupting cycles of harm, and the role of theatre in civic intervention.',
      url: `${BASE_URL}/keynote`,
      provider: { '@id': `${BASE_URL}/#jermaine-wong` },
      serviceType: 'Public speaking',
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'United Kingdom',
      },
      audience: {
        '@type': 'Audience',
        audienceType:
          'Schools, civic events, cultural institutions, professional audiences',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Learn 2 Live Legacy',
      description: DESCRIPTION,
      publisher: { '@id': `${BASE_URL}/#organization` },
      inLanguage: 'en-GB',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-GB"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://img.youtube.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
