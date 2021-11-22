import VueLoaderPlugin from 'vue-loader';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin'
import webpack from 'webpack';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import fs from 'fs';
import nib from 'nib';
import stylusLoader from 'stylus-loader';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const local_dirname = path.join(__dirname, '..')
import pathSettings from './pathSettings.js'
import customPlugins from "../src/example-pages/css/plugins.js";


const baseDir = process.env.NODE_ENV_PATH || 'vue-rt-style-kit-pages'
const contour = process.env.NODE_CONTOUR || 'production'

function resolve(dir) {
  return path.join(__dirname, dir)
}

class setSrcScripts {
  apply(compiler) {
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


const config = {
  entry: {
    main: [path.join(local_dirname, `src`, `example-pages`, `index.js`)],
  },
  experiments: {
    topLevelAwait: true,
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      chunks: `all`
    },
    moduleIds: 'named'
  },
  devtool: false,
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules')
    ],
    fallback: {
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "fs": false,
      "stream": require.resolve("stream-browserify"),
      "stylus": require.resolve("stylus"),
      "events": require.resolve("events/"),
      "util": false,
      "url": require.resolve("url/")
    },
    symlinks: false,
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'vue-rt-style-kit-atoms\/src': pathSettings.atoms,
      '@vue-rt-style-kit-atoms-local': pathSettings.atoms,
      '@vue-rt-style-kit-molecules-local': pathSettings.molecules,
      '@vue-rt-style-kit-icons-local': pathSettings.icons,
      '@projectAtoms': pathSettings.atomsJson,
      '@projectMolecules': pathSettings.moleculesJson,
      '@projectIcons': pathSettings.iconsJson,
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
          path.join(local_dirname, '..', 'vue-rt-style-kit-atoms', `src`)
        ],
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
        include: [path.join(local_dirname, `src`), path.join(local_dirname, '..', 'vue-rt-style-kit-atoms', `src`)],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        include: [path.join(local_dirname, `src`), path.join(local_dirname, '..', 'vue-rt-style-kit-atoms', `src`)],
        use: [
          {loader: `babel-loader`},
          {
            loader: `ts-loader`,
            options: {
              transpileOnly: true
            }
          }]
      },
      {
        test: /\.css$/,
        use: [
          {loader: `css-loader`},
        ],
      },
      
      {
        test: /\.js$/,
        loader: `babel-loader`,
        exclude: /node_modules/,
        include: [path.join(local_dirname, `src`), path.join(local_dirname, '..', 'vue-rt-style-kit-atoms', `src`)],
        type: "javascript/auto",
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.styl(us)?$/,
        use: [
          {
            loader: `style-loader`,
          },
          {loader: `css-loader`},
          
          {
            loader: `stylus-loader`,
            options: {
              stylusOptions: (loaderContext) => {
                const importsArr = [path.resolve(__dirname, '../', 'node_modules/nib/lib/nib/index.styl'), path.resolve(__dirname, '../', 'src/atoms/css/config.styl')]
                return {
                  imports: importsArr,
                  use: [nib(), customPlugins()]
                  //
                }
              },
            }
          }
        ],
      },
      // {
      //   test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani|eot|svg)$/,
      //   loader: `url-loader`,
      //   options: {
      //     name: `[name].[ext]`,
      //     limit: 10000,
      //   },
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: path.join(local_dirname, `static`, `index.html`),
      inject: true,
      excludeChunks: ['dev-helper']
    }),
  
  ]
};

config.plugins.push(
    new VueLoaderPlugin.VueLoaderPlugin(),
    new setSrcScripts(),
    new webpack.DefinePlugin({
      'globalVars': JSON.stringify({
        PAGES_BASE_DIR: baseDir
      })
    })
);
console.info('baseDir',baseDir);

if (contour === 'test') {
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

export default config;
