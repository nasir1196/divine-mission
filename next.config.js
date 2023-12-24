/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "i.ibb.co",
          },
        ],
        minimumCacheTTL: 15000000,
      },
}

module.exports = nextConfig
