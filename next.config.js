/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  async headers() {
    const securityHeaders = [
      // HSTS — force HTTPS for 2 years, include subdomains, allow preload
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
      },
      // Block MIME-type sniffing
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      // Clickjacking protection
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      // Legacy XSS filter (modern browsers ignore, but harmless)
      { key: 'X-XSS-Protection', value: '1; mode=block' },
      // Referrer policy
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      // Restrict browser features
      {
        key: 'Permissions-Policy',
        value:
          'camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()',
      },
      // DNS prefetch control
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
    ];

    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      // Cache static assets aggressively
      {
        source: '/:path*\\.(jpg|jpeg|png|svg|webp|avif|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*\\.(mp4|webm)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, immutable',
          },
        ],
      },
    ];
  },

  // Redirect common misspellings and legacy paths
  async redirects() {
    return [
      {
        source: '/The%20Forgiveness%20Framework%20Proposal.pdf',
        destination: '/forgiveness-framework-proposal.pdf',
        permanent: true,
      },
      {
        source: '/framework',
        destination: '/the-framework',
        permanent: true,
      },
      {
        source: '/our-son.html',
        destination: '/our-son',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
