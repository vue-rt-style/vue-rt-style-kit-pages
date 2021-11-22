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
import HtmlWebpackPlugin from "html-webpack-plugin";
import {fileMover} from "./fileMover.js";
const __dirname = path.resolve()
const local_dirname = path.join(__dirname,'..','..');
const baseDir = process.env.NODE_ENV_PATH || 'vue-rt-style-kit-pages'
const port = process.env.PORT || config.dev.port;

const proxyTable = config.dev.proxyTable;
const isProductionBuuild = process.env.NODE_ENV == 'production'
const app = express();
// console.log('config',webpackConfig)
if(isProductionBuuild){
  webpackConfig.output.publicPath = './'
  webpackConfig.output.assetModuleFilename =  'vue-rt-style-kit-pages/static/[name][ext]'
}
const compiler = webpack(webpackConfig);
let devMiddleware;
console.info('isProductionBuuild',isProductionBuuild)
if(!isProductionBuuild) {
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
  
  webpackConfig.entry.app.unshift('webpack-hot-middleware/client');
  
  
  Object.keys(proxyTable).forEach(function (context) {
    let options = proxyTable[context];
    if (typeof options === 'string') {
      options = {target: options};
    }
    app.use(createProxyMiddleware(options.filter || context, options));
  });
  
  app.use(connectHistoryApiFallback());
  devMiddleware = webpackDevMiddleware(compiler);
  app.use(hotMiddleware);
  app.use(devMiddleware);
  
  const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
}else{
  class setSrcScripts {
    apply(compiler) {
      compiler.hooks.compilation.tap('MyPlugin', (compilation) => {
        HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
            'setSrcScripts',
            (data, cb) => {
              data.html = data.html
                  .replace(/stylesheet\" href=\"(?!http)/g, `stylesheet" href="./${baseDir}/`)
                  .replace(/script\ src=\"(?!http)/g, `script src="./${baseDir}/`)
              cb(null, data)
            }
        )
      })
    }
  }
  webpackConfig.plugins.push(new setSrcScripts())

  console.info('start run')
  compiler.run((err,stats)=>{
    
    // compiler.close()
    
    fileMover();
  })
}
app.use('/static/', express.static(path.join(__dirname,'static')));
app.use('/mode-html.js', express.static(local_dirname+'/static/mode-html.js'));



let _resolve;
const readyPromise = new Promise(resolve => {
  _resolve = resolve;
});
if(!isProductionBuuild) {
  devMiddleware.waitUntilValid(() => {
    console.info('webpack-hot-middleware : start')
    _resolve();
  });
}

const server = app.listen(port);

export default {
  ready: readyPromise,
  close: () => {
    server.close();
  }
};
