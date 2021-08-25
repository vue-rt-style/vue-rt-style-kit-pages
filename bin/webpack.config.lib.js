const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const path = require(`path`);
const UglifyJsPlugin = require(`uglifyjs-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const nib = require('nib');
const stylusLoader = require('stylus-loader');
const OptimizeCSSAssetsPlugin = require(`optimize-css-assets-webpack-plugin`);
const customPlugins = require("../src/example-pages/css/plugins");
const env = process.env.NODE_ENV;
const local_dirname = path.join(__dirname,'..');

const config = {
  entry: {
    'vue-rt-style-kit-atoms':[path.join(local_dirname, `src`, `index.js`)],
  },
  
  externals:'vue',
  mode: env,
  output: {
    path: local_dirname + '/lib',
    filename: 'vue-rt-style-kit-atoms.js',
    library: 'vue-rt-style-kit-atoms  ',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: 'babel-loader!ts-loader',

      },
      {
        test: /\.ts$/,
        loader: 'babel-loader!ts-loader',
        type: "javascript/auto",
        resolve: {
          fullySpecified: false
        }

      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: `vue-loader`,

          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {loader:'style-loader'},
          {loader: `css-loader`},
            ],
      },
      {
        test: /\.js$/,
        loader: `babel-loader`,
        include: [path.join(local_dirname, `src`)],
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
  optimization: {
    splitChunks: {
      chunks: `all`
    },
    moduleIds: 'named'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),


    new stylusLoader.OptionsPlugin({
      default: {
        use: [nib()],
        import: ['~nib/lib/nib/index.styl']
      }
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),

  ]
};




module.exports = config;
