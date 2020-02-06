const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require(`path`);

const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const local_dirname = path.join(__dirname,'..');
const env = process.env.NODE_ENV;
function include () {
  return [
    path.join(local_dirname, `src`),
    path.join(local_dirname,'..','vue-rt-style-kit-atoms', `src`)
  ]
}

const config = {
  entry: {
    main:[path.join(local_dirname, `src`,`example-pages`,`index.js`)],
  },
  mode: env,
  resolve: {
    symlinks: false,
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@vue-rt-style-kit-atoms-local': path.join(local_dirname,'src','atoms'),
      '@vue-rt-style-kit-molecules-local': path.join(local_dirname,'src','molecules'),
      '@vue-rt-style-kit-icons-local': path.join(local_dirname,'src','icons'),
      '@projectAtoms': path.join(local_dirname,'src','projectsJsons','atoms.json'),
      '@projectMolecules': path.join(local_dirname,'src','projectsJsons','molecules.json'),
      '@projectIcons': path.join(local_dirname,'src','projectsJsons','icons.json'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: `all`
    },
  },
  devtool:  false,
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: `vue-loader`,
            options: {
              transformAssetUrls: {
                source: './src/',
              },
            },
          },
        ],
        include: include()
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
        include: include()
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader!ts-loader',
        exclude: /node_modules/,
        include: include()
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
        include: [path.join(local_dirname, `src`)],
        include: include()
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
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join(local_dirname, `dist`, `index.html`),
      template: path.join(local_dirname, `static`, `index.html`),
      inject: true,
      minify:{
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
        }
    }),
  ]
};



config.plugins.push(new MiniCssExtractPlugin());


module.exports = config;
