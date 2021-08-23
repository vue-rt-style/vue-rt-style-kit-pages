
import config from '../../build/config/index.js'
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'develop';
}
import "@babel/polyfill";
import path from 'path';
import express from 'express';
import connectHistoryApiFallback from 'connect-history-api-fallback';

import webpack from 'webpack';
import { createProxyMiddleware } from 'http-proxy-middleware';
import webpackConfig from '../webpack.config.example.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';


const __dirname = path.resolve()
const local_dirname = path.join(__dirname,'..','..');

const port = process.env.PORT || config.dev.port;

const proxyTable = config.dev.proxyTable;

const app = express();
// console.log('config',webpackConfig)
const compiler = webpack(webpackConfig);
const hotMiddleware = webpackHotMiddleware(compiler, {
  path: '/__webpack_hmr',
  quiet: true,
  log: console.log,
  stats: {
    colors: true,
    hash: false,
    version: false,
    timings: true,
    assets: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: true,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: true
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
});
let spinner;

// const hotMiddleware = webpackHotMiddleware(compiler, {
//   log: function(text){
//     console.info('webpack-hot-middleware : '+(new Date())+' '+text);
//   }
// });
webpackConfig.entry.app.unshift('webpack-hot-middleware/client');
// webpackConfig.plugins.push(
//   new webpack.HotModuleReplacementPlugin()
// );
//
// app.use(hotMiddleware);


Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options };
  }
  app.use(createProxyMiddleware(options.filter || context, options));
});

app.use(connectHistoryApiFallback());
const devMiddleware = webpackDevMiddleware(compiler);
app.use(hotMiddleware);
app.use(devMiddleware);

const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);

app.use('/static/', express.static(path.join(__dirname,'static')));
app.use('/mode-html.js', express.static(local_dirname+'/static/mode-html.js'));

const url = 'http://localhost:' + port;


let _resolve;
const readyPromise = new Promise(resolve => {
  _resolve = resolve;
});

devMiddleware.waitUntilValid(() => {
  
  
  console.info('webpack-hot-middleware : start')
  
  _resolve();
});

const server = app.listen(port);

export default {
  ready: readyPromise,
  close: () => {
    server.close();
  }
};
