const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    reactStrictMode: true,
    images: {

        remotePatterns: [
            {
              hostname: 'lh3.googleusercontent.com',
            },
          ],
    
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }
  
module.exports = withNextVideo(nextConfig)
