'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    //代理配置,解决跨域问题,设置代理服务器
    //所使用的模块  http-proxy-midddleware
    proxyTable: {
      //属性名:凡是以当前参数开头的请求路径，一律开启代理服务器
      //属性值：该参数的相关设置
      '/ele':{
          //   target:目标网址,即当前请求路径的实际请求网址服务器
          target: 'https://www.ele.me',
           //  是否开启代理服务器,可以实现跨域
           changeOrigin:true,
           //  重写路径,即凡是以/ele开头的字符串,被替换成空,请求的实际路径网址即target+get请求路径
           //  注意: /ele,只是一个请求路径中的标识符, 是个请求路径接口
           pathRewrite:{
            '^/ele':''
           }
           // 举例:请求路径:/ele/app/location
           //  代理服务开启之后,实际的请求路径:https://www.ele.me/app/location
      },
      '/h5':{
          target:'https://h5.ele.me',
          changeOrigin:true,
          pathRewrite:{
            '^/h5':''
          }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
