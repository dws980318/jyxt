// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import axios from 'axios'
import store from './store'
import BaiduMap from 'vue-baidu-map'
import Load from './utils/loading'
// import 'babel-polyfill'
// 引入company共用css
import './common/css/company/index.css'

import init from './router/init'
import api from './utils/api.js'
import Storage from './utils/storage'

import '@/common/css/element-ui.css'
import '@/common/css/iconfont.css'

require('./mock')

Vue.use(ElementUI)
Vue.prototype.Loading = Load
Vue.use(BaiduMap, {
  ak: 'qZq1DsPrwOWyDpWtZOFbOqdN924qEwZ9'
})

Vue.prototype.api = api
Vue.prototype.init = init
Vue.prototype.Storage = Storage

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let path = to.path
  let login = Storage.getItem('login')
  // if (login) {
  //   next()
  // } else {
  //   //调用检查session接口
  //   if () {

  //   } else {
  //     init.addRoute(res.role)
  //     next({
  //       path: '/index'
  //     })
  //   }
  // }

  let role = Storage.getItem('role') ? Storage.getItem('role') : store.state.role
  let havaLogin = store.state.haveLogin
  let userName = Storage.getCookie('userName')
  let password = Storage.getCookie('password')
  let isLogin = !!(userName && password)
  if (path === '/login') {
    next()
    return false
  }
  if (!login) {
    if (isLogin) {
      // const form = {
      //   username: userName, // 保存到保存数据的地方
      //   password: password
      // }
      this.api.login()
        .then(res => {
          if (!res.role === 0) {
            ElementUI.Message.error({
              message: res.info
            })
            next({
              path: '/login'
            })
          } else {
            init.addRoute(res.role)
            console.log('接口登录')
            next({
              path: '/index'
            })
          }
          return false
        })
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    if (role !== 0) {
      if (havaLogin) {
        next()
      } else {
        init.addRoute(role)
        next({
          path: path
        })
      }
    } else {
      next('/login')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
