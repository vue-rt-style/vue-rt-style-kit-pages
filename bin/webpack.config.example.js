import VueLoaderPlugin from 'vue-loader';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from'webpack';
import filewatcherPlugin from "filewatcher-webpack-plugin";
import nib from 'nib'
import customPlugins from '../src/example-pages/css/plugins.js'
const baseDir = process.env.NODE_ENV_PATH || ''
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const local_dirname = path.join(__dirname, '..')

function include () {
  return [
    path.join(local_dirname, `src`),
    path.join(local_dirname,'..','vue-rt-style-kit-atoms', `src`)
  ]
}

const config = {
  entry: {
    app:[path.join(local_dirname, `src`,`example-pages`,`index.js`)],
  },
  mode: 'development',
  output: {
    publicPath: '/'
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

      '@vue-rt-style-kit-atoms-local': path.join(local_dirname,'src','atoms'),
      'vue-rt-style-kit-atoms': path.join(local_dirname,'src','atoms'),
      '@vue-rt-style-kit-molecules-local': path.join(local_dirname,'src','molecules'),
      '@vue-rt-style-kit-icons-local': path.join(local_dirname,'src','icons'),
      '@projectAtoms': path.join(local_dirname,'src','projectsJsons','atoms.json'),
      '@projectMolecules': path.join(local_dirname,'src','projectsJsons','molecules.json'),
      '@projectIcons': path.join(local_dirname,'src','projectsJsons','icons.json'),
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
          {loader:`babel-loader`},
          {loader:`ts-loader`,
            options: {
              transpileOnly:true
            }
          }]
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
        include: include(),
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
          {loader:`css-loader`},
          {
            loader: `stylus-loader`,
            options: {
              stylusOptions: {
                imports: [path.resolve(__dirname, '../', 'node_modules/nib/lib/nib/index.styl')],
                use: [nib(), customPlugins()],
              }
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
    new webpack.HotModuleReplacementPlugin()
);

export default config;
