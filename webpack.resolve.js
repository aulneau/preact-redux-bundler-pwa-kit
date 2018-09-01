/**
 * Webpack Resolve Configuration
 *
 * This file is here so that certain IDEs can resolve the aliases we define here.
 * It allows for the IDE to auto import components for you.
 *
 * This file is imported into preact.config.js
 */
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@bundles': path.resolve(__dirname, 'src/bundles'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@common': path.resolve(__dirname, 'src/common'),
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@assets': path.resolve(__dirname, 'src/assets')
    },
  },
};
