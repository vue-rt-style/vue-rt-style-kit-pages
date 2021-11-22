'use strict';
import { fileURLToPath } from 'url';

import prodEnv from './prod.env.js'
import devEnv from './dev.env.js'
import {resolve,dirname} from 'path'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)


export default {
  build: {
    env: prodEnv,
    index: resolve(__dirname, '../../static/index.html'),
    assetsRoot: resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    cssSourceMap: false,
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: devEnv,
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: true
  }
};
