const { merge } = require('webpack-merge');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/restaurant-api.dicoding.dev\//,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: new Date().toISOString(),
            cacheableResponse: {
              statuses: [200],
            },
          },
        },
      ],
      swDest: './sw.bundle.js',
    }),
  ],
});
