/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) {
    /** 
     * The webpack function is executed twice, once for the server and once for the client.
     * This allows you to distinguish between client and server configuration using the isServer property.
     */
    return config;
  },
  //experimental: {
  //  outputStandalone: true,
  //},
}

module.exports = withBundleAnalyzer(nextConfig)
