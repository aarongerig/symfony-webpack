const path = require('path');
const Encore = require('@symfony/webpack-encore');

const paths = {
  output: path.resolve(__dirname, './public/build'),
  public: '/build',
  source: path.resolve(__dirname, './assets'),
  vendor: path.resolve(__dirname, './node_modules'),
  config: path.resolve(__dirname, './config'),
};

Encore
  // Output and public paths
  .setOutputPath(paths.output)
  .setPublicPath(paths.public)

  // Clean output before build
  .cleanupOutputBeforeBuild()

  // JavaScript
  .autoProvideVariables({
    UIkit: 'uikit',
    'window.UIkit': 'uikit'
  })
  .addEntry('js/app', `${paths.source}/js/app.js`)
  .configureBabel((babelConfig) => {
    babelConfig.presets.push(
      ['env', {
        targets: {
          browsers: [
            'last 2 versions',
            'ios >= 9.1',
            'Safari >= 9.1',
            'not ie <= 10',
          ],
        },
        useBuiltIns: true,
      }]
    );
  })
  .enableVueLoader()

  // CSS
  .addStyleEntry('css/app', `${paths.source}/css/app.scss`)
  .enableSassLoader((options) => {
    options.includePaths = [
      `${paths.vendor}/uikit/src/scss`,
    ]
  }, { resolveUrlLoader: false })
  .enablePostCssLoader((options) => {
    options.config = {
      path: `${paths.config}/postcss.config.js`,
    }
  })

  // Source maps and versioning
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
;

const config = Encore.getWebpackConfig();
config.watchOptions = {
  poll: true,
  ignored: `${paths.vendor}/`
};

module.exports = config;
