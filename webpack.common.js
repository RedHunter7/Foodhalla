/* eslint-disable linebreak-style */
/* eslint-disable quote-props */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const BundleAnalyzerPlugin =
require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/',
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [{
        urlPattern: new RegExp('https://restaurant-api.dicoding.dev'),
        handler: 'StaleWhileRevalidate',
      },
      {
        urlPattern: new RegExp('https://www.themealdb.com'),
        handler: 'StaleWhileRevalidate',
      },
      {
        urlPattern: new RegExp('https://fonts.googleapis.com'),
        handler: 'StaleWhileRevalidate',
      },
      {
        urlPattern: new RegExp('https://fonts.gstatic.com'),
        handler: 'StaleWhileRevalidate',
      }],
    }),
    new WebpackPwaManifest({
      name: 'Foodhalla',
      short_name: 'FH',
      description: 'Find your favorite restaurant should not be this hard',
      background_color: '#4AE3B5',
      theme_color: '#4AE3B5',
      start_url: '/',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve('src/public/images/Foodhalla-logo.png'),
          sizes: [57, 60, 72, 76, 114, 120, 144, 152, 167, 180],
          destination: path.join('icons', 'ios'),
          ios: true,
          purpose: 'any maskable',
        },
        {
          src: path.resolve('src/public/images/Foodhalla-logo.png'),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          destination: path.join('icons', 'android'),
          purpose: 'any maskable ',
        },
      ],
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'src/public/images/Foodhalla-logo.png'),
      favicons: {
        theme_color: '#4AE3B5',
        icons: {
          coast: false,
          yandex: false,
        },
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/templates/page/'),
          to: path.resolve(__dirname, 'dist/page/'),
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/templates/topnav/'),
          to: path.resolve(__dirname, 'dist/topnav/'),
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/templates/sidenav/'),
          to: path.resolve(__dirname, 'dist/sidenav/'),
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/images/placeholder/'),
          to: path.resolve(__dirname, 'dist/img/'),
        },
      ],
    }),
  ],
};
