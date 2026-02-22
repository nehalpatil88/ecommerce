/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,   // This must be true if you use the /app folder
  },
}

module.exports = nextConfig