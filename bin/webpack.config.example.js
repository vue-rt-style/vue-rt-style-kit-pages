const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const webpack = require('webpack');
const filewatcherPlugin = require("filewatcher-webpack-plugin");

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
        include: include(),
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
            options: {
              imports: [path.resolve(__dirname, '../', 'node_modules/nib/lib/nib/index.styl')],
              use: [require('nib')()],
            },
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
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: path.join(local_dirname, `static`, `index.html`),
      inject: true,
    }),
  ]
};



config.entry.app.unshift('webpack-hot-middleware/client');
config.plugins.push(
    new VueLoaderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new filewatcherPlugin({watchFileRegex: [
        '../../vue-rt-style-kit-atoms/**/*.js',
        '../../vue-rt-style-kit-atoms/**/*.vue',
        '../../vue-rt-style-kit-atoms/**/*.styl',
        '../../vue-rt-style-kit-molecules/**/*.js',
        '../../vue-rt-style-kit-molecules/**/*.vue',
        '../../vue-rt-style-kit-molecules/**/*.styl',
        '../../vue-rt-style-kit-icons/**/*.js',
        '../../vue-rt-style-kit-icons/**/*.vue',
        '../../vue-rt-style-kit-icons/**/*.styl'
      ]})
);

module.exports = config;
