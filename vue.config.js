const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const configCSSLoaders = require(resolve('./src/atoms/css/loaders.cjs'))
let assetsDir = 'dev'
/**
 * Custom StylusLoader извлекает стили из stylus внутри динамически подключенных компонентов
 * @feature RTRU-11155
 * @see https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/config/css.js
 */
const extractVueStylus = webpackConfig => {
  const rule = webpackConfig.module.rule('stylus').test(/\.styl(us)?$/).oneOf('vue').resourceQuery(/\?vue/)
  rule.uses.clear()
  rule.use('extract-css-loader').loader(require('mini-css-extract-plugin').loader).options({ hmr: true, publicPath: '../' })
  rule.use('css-loader').loader(require.resolve('css-loader')).options({ sourceMap: false, importLoaders: 2 })
  rule.use('postcss-loader').loader(require.resolve('postcss-loader')).options({ sourceMap: false })
  rule.use('stylus-loader').loader(require.resolve('stylus-loader')).options({ sourceMap: false, preferPathResolver: 'webpack', ...configCSSLoaders.stylus })
  webpackConfig.plugin('extract-css').use(require('mini-css-extract-plugin'), [{ filename: `${assetsDir}/css/[name].css`, chunkFilename: `${assetsDir}/css/[name].css` }])
}

module.exports = {
  configureWebpack: config => {
    Object.assign(config.resolve.alias, {
      'vue$': 'vue/dist/vue.esm.js',
      '@vue-rt-style-kit-atoms-local': resolve('./src/atoms'),
      '@vue-rt-style-kit-icons-local': resolve('./src/icons'),
      '@vue-rt-style-kit-molecules-local': resolve('./src/molecules'),
      '@projectAtoms': resolve('./src/projectsJsons/atoms.json'),
      '@projectMolecules': resolve('./src/projectsJsons/icons.json'),
      '@projectIcons': resolve('./src/projectsJsons/molecules.json'),
      'vue-rt-style-kit-atoms': resolve('./src/atoms'),
      'vue-rt-style-kit-icons': resolve('./src/icons'),
      'vue-rt-style-kit-molecules': resolve('./src/molecules'),
    })
    config.resolve.symlinks = false

  },
  filenameHashing: false, // отключение хэшей в именах файлов
  css: {
    loaderOptions: {
      ...configCSSLoaders
    }
  },
  // chainWebpack: config => {
  //   extractVueStylus(config)
  // }
}
