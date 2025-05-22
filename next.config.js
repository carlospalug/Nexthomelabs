const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config({ path: path.resolve(__dirname, '.env') });

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'i.ibb.co', 'upload.wikimedia.org', 'pnghq.com', 'logosmarcas.net', 'huggingface.co'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Environment variables configuration
  env: {
    GOOGLE_VERIFICATION_CODE: process.env.META_G002,
    BING_VERIFICATION_CODE: process.env.META_B39,
  },
  
  // Webpack configuration
  webpack: (config, { isServer, dev }) => {
    // Add Recharts configuration
    config.module.rules.push({
      test: /recharts/,
      sideEffects: false
    });

    // Disable cache in development to prevent webpack cache issues
    if (dev) {
      config.cache = false;
    } else {
      // Simplified cache configuration for production
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
        cacheDirectory: path.resolve(__dirname, '.next/cache/webpack'),
        name: isServer ? 'server-webpack-cache' : 'client-webpack-cache',
      };
    }

    // Add aliases
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'has-symbols': path.resolve(__dirname, 'node_modules/has-symbols'),
        'iconv-lite': path.join(__dirname, 'node_modules/iconv-lite'),
      }
    };

    // Add Lottie file loader
    config.module.rules.push({
      test: /\.lottie$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/chunks/images',
            outputPath: `${isServer ? "../" : ""}static/chunks/images`,
            name: '[name].[ext]',
            esModule: false,
          },
        },
      ],
    });

    // Only add CopyWebpackPlugin for non-server bundles
    if (!isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            { from: 'public/images', to: 'images' },
            { from: 'public/sitemap.xml', to: 'sitemap.xml' },
            { from: 'public/robots.txt', to: 'robots.txt' },
            { from: 'public/locales', to: 'locales' },
            { 
              from: 'public', 
              to: '', 
              globOptions: { 
                ignore: [
                  '**/index.html',
                  '**/team/*',
                  '**/antoniy.html',
                  '**/ohood.html',
                  '**/yusuf.html',
                  '**/farooq.html',
                  '**/nicholas.html',
                  '**/images/**',
                  '**/locales/**',
                  '**/sitemap.xml',
                  '**/robots.txt'
                ] 
              } 
            },
          ],
        })
      );
    }

    return config;
  },
};

module.exports = nextConfig;