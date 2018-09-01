import CopyWebpackPlugin from 'copy-webpack-plugin';
const {resolve} = require('./webpack.resolve');

export default (config, env, helpers) => {
  let { index } = helpers.getPluginsByName(config, 'MiniCssExtractPlugin')[0];
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-emotion': 'preact-emotion',
    ...resolve.alias,
  };
  config.plugins.splice(index, 1);
  config.plugins.push(new CopyWebpackPlugin([{ context: `${__dirname}/src/assets`, from: `*.*` }]));
};
