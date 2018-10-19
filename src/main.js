// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/font-awesome/css/font-awesome.css';

// 导入http功能的模块
import axios from 'axios';
import $ from './assets/jquery'

Vue.config.productionTip = false;

// vue中处理字符串的方式 使用过滤器filter，

// 注册一个过滤器
// 参数1：过滤器名称
// 参数2：回调函数，其参数为要处理的数据，返回值为处理好的数据

// 使用方式：通过管道符"|"，挂载过滤器，处理数据

Vue.filter('imgPath', function(value){
  // console.log(value);
  let v1 = value.substring(0,1);
  let v2 = value.substring(1,3);
  let v3 = value.substring(3);
  let v4 = value.substring(32);
  // console.log(v4);
  let path = 'http://fuss10.elemecdn.com/' + v1 + '/' + v2 + '/' + v3 + '.' + v4;
  // console.log(path);
//fuss10.elemecdn.com/a/3e/b5811be4fb5d083a7df707d2d99cepng.png?imageMogr2/thumbnail/70x70
  return path ;
})


/// 配送距离，<1000m，原数据，大于1000m，1.00千米
Vue.filter('distance', function(value){

  if( value < 1000 ){
    return value + 'm';
  }
  let result = value / 1000;

  result = result.toFixed(2);

  return result + 'km';

})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
