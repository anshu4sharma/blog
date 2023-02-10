/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', "api.dicebear.com"],
  },
  experimental: {
    nextScriptWorkers: true,
  },
}

module.exports = nextConfig
