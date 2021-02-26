const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const CopyPlugin = require("copy-webpack-plugin")
const webpack = require('webpack');
// const fs = require('fs');
const nib = require('nib');
const stylusLoader = require('stylus-loader');
const local_dirname = path.join(__dirname,'..');
const pathSettings = require('./pathSettings')
const baseDir = process.env.NODE_ENV_PATH || 'vue-rt-style-kit-pages'
const contour = process.env.NODE_CONTOUR || 'production'
function resolve(dir) {
  return path.join(__dirname, dir)
}

class setSrcScripts {
  apply (compiler) {
    compiler.hooks.compilation.tap('MyPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
          'setSrcScripts',
          (data, cb) => {
            data.html = data.html
              .replace(/stylesheet\" href=\"(?!http)/g, `stylesheet" href="/${baseDir}/`)
              .replace(/script\ src=\"(?!http)/g, `script src="/${baseDir}/`)
            cb(null, data)
          }
      )
    })
  }
}

console.info('pathSettings',pathSettings)

const config = {
  entry: {
    main:[path.join(local_dirname, `src`,`example-pages`,`index.js`)],
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      chunks: `all`
    },
  },
  devtool: false,
  resolve: {
    symlinks: false,
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@vue-rt-style-kit-atoms-local': pathSettings.atoms,
      '@vue-rt-style-kit-aks-local': pathSettings.aks,
      '@vue-rt-style-kit-molecules-local': pathSettings.molecules,
      '@vue-rt-style-kit-icons-local': pathSettings.icons,
      '@projectAtoms': pathSettings.atomsJson,
      '@projectMolecules': pathSettings.moleculesJson,
      '@projectIcons': pathSettings.iconsJson,
      '@projectAks': pathSettings.aksJson,
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          },
        ],
        include: [path.join(local_dirname, `src`),
                path.join(local_dirname,'..','vue-rt-style-kit-atoms', `src`)
        ],
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
        include: [path.join(local_dirname, `src`),path.join(local_dirname,'..','vue-rt-style-kit-atoms', `src`)],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        include: [path.join(local_dirname, `src`),path.join(local_dirname,'..','vue-rt-style-kit-atoms', `src`)],
        use: [
          {loader:`babel-loader`},
          {loader:`ts-loader`}]
      },
      {
        test: /\.css$/,
        use: [
          {loader:`css-loader`},
        ],
      },

      {
        test: /\.js$/,
        loader: `babel-loader`,
        exclude: /node_modules/,
        include: [path.join(local_dirname, `src`),path.join(local_dirname,'..','vue-rt-style-kit-atoms', `src`)],
      },
      {
        test: /\.styl/,
        use: [
          {
            loader: `style-loader`,
          },
          {loader:`css-loader`},
          {
            loader: `stylus-loader`,
            
          },
        ],
      },
      {
        test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani|eot|svg)$/,
        loader: `url-loader`,
        options: {
          name: `[name].[hash:20].[ext]`,
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new stylusLoader.OptionsPlugin({
      default: {
        use: [nib()],
        import: ['~nib/lib/nib/index.styl']
      }
    }),
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: path.join(local_dirname, `static`, `index.html`),
      inject: true,
      excludeChunks: [ 'dev-helper' ]
    }),

  ]
};



config.plugins.push(
    new VueLoaderPlugin(),
    new webpack.NamedModulesPlugin(),
    new setSrcScripts(),
    new webpack.DefinePlugin({
      'globalVars': JSON.stringify({
        PAGES_BASE_DIR: baseDir
      })
    })
);

if(contour === 'test'){
  config.plugins.push(
    new CopyPlugin({
      patterns: [
        {
          from: resolve('../static/images'),
          to: resolve('../dist/static/images')
        },
        {
          from: resolve('../static/icons'),
          to: resolve('../dist/static/icons')
        },
        {
          from: resolve('../static/example-images'),
          to: resolve('../dist/static/example-images')
        },
        {
          from: resolve('../static/404.html'),
          to: resolve('../dist/404.html')
        }
      ],
    })
  )
}

module.exports = config;
