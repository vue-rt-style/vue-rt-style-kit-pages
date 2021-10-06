import VueLoaderPlugin from 'vue-loader';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import filewatcherPlugin from "filewatcher-webpack-plugin";
// import variables from '../src/atoms/variables.json'
import fs from 'fs'
// console.info('fs',fs.readFileSync('../src/atoms/variables.json'))
// const variables = JSON.parse(fs.readFileSync('./src/atoms/variables.json'))
// const colors = JSON.parse(fs.readFileSync('./src/atoms/color.json'))

// console.info('variables',variables);
import nib from 'nib'
import customPlugins from '../src/example-pages/css/plugins.js'

let baseDir = process.env.NODE_ENV_PATH || ''
if(process.env.NODE_ENV == 'production') {
  baseDir = process.env.NODE_ENV_PATH || 'vue-rt-style-kit-pages'
}
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const local_dirname = path.join(__dirname, '..')

function include() {
  return [
    path.join(local_dirname, `src`),
    path.join(local_dirname, '..', 'vue-rt-style-kit-atoms', `src`)
  ]
}

const config = {
  entry: {
    app: [path.join(local_dirname, `src`, `example-pages`, `index.js`)],
  },
  mode: 'development',
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  experiments: {
    asyncWebAssembly: true,
    buildHttp: true,
    layers: true,
    syncWebAssembly: true,
    topLevelAwait: true,
  },
  optimization: {
    splitChunks: {
      chunks: `all`
    },
    moduleIds: 'named'
  },
  devtool: false,
  resolve: {
    symlinks: false,
    alias: {
      
      'vue$': 'vue/dist/vue.esm.js',
      // Symlinks
      
      '@vue-rt-style-kit-atoms-local': path.join(local_dirname, 'src', 'atoms'),
      'vue-rt-style-kit-atoms/src': path.join(local_dirname, 'src', 'atoms'),
      'vue-rt-style-kit-atoms': path.join(local_dirname, 'src', 'atoms'),
      '@vue-rt-style-kit-molecules-local': path.join(local_dirname, 'src', 'molecules'),
      '@vue-rt-style-kit-icons-local': path.join(local_dirname, 'src', 'icons'),
      '@projectAtoms': path.join(local_dirname, 'src', 'projectsJsons', 'atoms.json'),
      '@projectMolecules': path.join(local_dirname, 'src', 'projectsJsons', 'molecules.json'),
      '@projectIcons': path.join(local_dirname, 'src', 'projectsJsons', 'icons.json'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          
          {
            loader: "vue-loader",
            options: {
              shadowMode: true,
              hotReload: true,
            }
          },
        ],
        include: include(),
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
        include: include(),
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        include: include(),
        
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
          MiniCssExtractPlugin.loader,
          {loader: `css-loader`},
        ],
      },
      
      {
        test: /\.js$/,
        loader: `babel-loader`,
        exclude: /node_modules/,
        include: include(),
        type: "javascript/auto",
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.styl(us)?$/,
        use: [
          // MiniCssExtractPlugin.loader,
          {
            loader: `style-loader`,
          },
          {
            loader: `css-loader`,
          },
          {
            loader: `stylus-loader`,
            options: {
              stylusOptions: (loaderContext) => {
                const importsArr = [path.resolve(__dirname, '../', 'node_modules/nib/lib/nib/index.styl'),path.resolve(__dirname, '../', 'src/atoms/css/config.styl')]
                
                return {
                  imports: importsArr,
                  use: [nib(), customPlugins()]
                  //
                }
              },
              // additionalData: (content, loaderContext) => {
              //   const {resourcePath, rootContext} = loaderContext;
              //   const relativePath = path.relative(rootContext, resourcePath);
              //   // console.info('content',content);
              //   if (resourcePath.search('.styl') >= 0 ) {
              //     if(!config.step) {
              //       config.step = 1
              //     }
              //     if(config.step == 1){
              //       content = content+'\n@require "../../atoms/css/vue-rt-style-atoms.styl"\n'
              //     }
              //
              //     // if(config.step == 3){
              //     //   // content = content.replace('support-for-ie = false','support-for-ie = false\n@require "../../atoms/css/vue-rt-style-atoms.styl"\n@require "../../molecules/css/vue-rt-style-kit-molecules.styl\n')
              //     //   // content = content.replace('support-for-ie = false','support-for-ie = false\n@require "../../atoms/css/vue-rt-style-atoms.styl"\n@require "../../molecules/css/vue-rt-style-kit-molecules.styl\n')
              //     //   content+='\n@require "../../atoms/css/vue-rt-style-atoms.styl"\n@require "../../molecules/css/vue-rt-style-kit-molecules.styl"\n'
              //     // }
              //
              //     // console.info('content',content)
              //     // importsArr.push(path.resolve(__dirname, '../', 'src/atoms/css/vue-rt-style-atoms.styl'))
              //   }
              //   config.step += 1
              //
              //   // if(relativePath.search('vue-rt-style-kit-molecules.styl')>=0){
              //   // //   // molecules
              //   //   return '@require "../../atoms/vue-rt-style-kit-atoms.styl \n'+content
              //   // }
              //   // vue-rt-style-kit-molecules.styl
              //
              //   return content
              // }
            }
          }
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
  watchOptions: {
    followSymlinks: true,
    ignored: ['**/node_modules'],
    
  },
  // path.resolve(__dirname, '../', 'src/atoms/css/vue-rt-style-atoms.styl')
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: path.join(local_dirname, `static`, `index.html`),
      inject: true,
    }),
    
    new webpack.DefinePlugin({
      'globalVars': JSON.stringify({
        PAGES_BASE_DIR: baseDir
      })
    })
  ]
};


config.entry.app.unshift('webpack-hot-middleware/client');
config.plugins.push(
    new VueLoaderPlugin.VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css',
    }),
    new webpack.HotModuleReplacementPlugin()
);

export default config;
