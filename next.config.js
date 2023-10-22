/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hastycreations.com', 'www.hastycreations.com', 'avatars.githubusercontent.com'],
    remotePatterns: [
      {
        hostname: 'hastycreations.com',
      },
      {
        hostname: 'avatars.githubusercontent.com',
      }
    ]
  }
}

module.exports = nextConfig
