const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'off',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];

/**
 * @type {import('next').NextConfig}
 */
const config = {
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,

  headers: async () => [
    {
      source: '/:path*',
      headers: securityHeaders,
    },
  ],
};

export default config;
