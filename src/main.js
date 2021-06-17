import Vue from 'vue'
// 要在app.vue前引入
import Vant from 'vant'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

import './assets/font/iconfont.css'   //引入图标

import 'vant/lib/index.css'           //引入所有组件

import 'lib-flexible/flexible'        //引入rem自适应
Vue.use(Vant);

//添加appkey属性保存appkey,可以全局调用
Vue.prototype.appkey = 'U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=';

// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'

// 发起post请求之前处理
axios.interceptors.request.use(config => {
  if (config.method == "post") {
      let dataString = ''
          // post请求序列化,转成字符串
      for (var key in config.data) {
          // 转字符集
          dataString += key + '=' + config.data[key] + '&'
      }
      // 去除最后一个&,不然数据传不了后台,会报状态码为500错误,服务器拒绝访问
      config.data = dataString.slice(0, -1)
  }
  return config;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
