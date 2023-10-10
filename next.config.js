/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**'
            },
          ],
      },
}

// next.config.js
module.exports = {
  images: {
    domains: ['creator-hub-prod.s3.us-east-2.amazonaws.com'],
  },
};