const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Function to clear specific cache directories
function clearCache() {
  try {
    const cacheDirs = [
      path.join(__dirname, '.next/cache'),
      path.join(__dirname, '.next/build-manifest.json'),
    ];

    cacheDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        if (fs.lstatSync(dir).isDirectory()) {
          fs.rmSync(dir, { recursive: true, force: true });
          console.log(`Cleared cache directory: ${dir}`);
        } else {
          fs.unlinkSync(dir);
          console.log(`Removed cache file: ${dir}`);
        }
      }
    });
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
}

// Clear cache before building
clearCache();

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
  output: 'export',
  trailingSlash: true,
  
  // Environment variables configuration
  env: {
    GOOGLE_VERIFICATION_CODE: process.env.META_G002,
    BING_VERIFICATION_CODE: process.env.META_B39,
  },
  
  // Webpack configuration with simplified cache control
  webpack: (config, {  dir, isServer, dev }) => {
    // Add cache busting to output filenames in development
    if (dev) {
      config.output.filename = `static/chunks/[name].[contenthash].js`;
      config.output.chunkFilename = `static/chunks/[name].[contenthash].js`;
    }

    // Add Recharts configuration
    config.module.rules.push({
      test: /recharts/,
      sideEffects: false
    });

    // Configure cache - simplified to avoid issues
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
      cacheDirectory: path.resolve(dir || __dirname, '.next/cache/webpack'),
      // Use stable cache keys
      name: 'next-webpack-cache',
    };

    // Add aliases
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'has-symbols': path.resolve(__dirname, 'node_modules/has-symbols')
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
            { 
              from: 'public', 
              to: '', 
              globOptions: { 
                ignore: [
                  '**/index.html',
                  '**/team/*'
                ] 
              } 
            },
          ],
        })
      );
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      'iconv-lite': path.join(__dirname, 'node_modules/iconv-lite'),
    };
    return config;
  },
};

module.exports = nextConfig;