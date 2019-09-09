import axios from 'axios'
// import router from '../router';
import { Message } from 'element-ui'
// 创建axios实例
const service = axios.create({
  timeout: 10000, /* 请求超时时间 */
  withCredentials: true
})

// 添加request拦截器
service.interceptors.request.use(
  config => {
    // if (localStorage.token) {
    //   config.headers.JSESSIONID = localStorage.token
    // }
    return config
  },
  error => {
    // console.log(error);
    return Promise.reject(error)
  }
)

// 添加respone拦截器
service.interceptors.response.use(
  response => {
    if (response.data.code === 200) {
      let res = {}
      res = response.data
      return res
    } else {
      // Message.error(response.info)
      // router.push('/blank.vue')
      // return Promise.reject(response)
    }
  },
  error => {
    if (error.response && error.response.data.code === 404) {
      // router.push('/blank.vue')
      Message.error('请求接口失败，接口无服务，404')
    } else if (error.response && error.response.data.code === 500) {
      // router.push('/blank.vue')
      Message.error('服务器异常，500')
    } else if (error.response && error.response.data.code === 401) {
      Message.error('会话超时，请重新登录!')
      // setTimeout(() => {
      //   localStorage.clear()
      //   location.reload();
      // }, 2000);
    } else {
      Message.error('异常！异常!')
    }

    return Promise.reject(error.response.data.code)
  }
)

export function get(url, params = {} || '') {
  params.t = new Date().getTime() /* get方法加一个时间参数,解决ie下可能缓存问题. */
  return service({
    url: url,
    method: 'get',
    headers: {
    },
    params
  })
}

/* 封装post请求 */
export function post(url, data = {} || '') {
  /* 默认配置 */
  let sendObject = {
    url: url,
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    data
  }
  sendObject.data = JSON.stringify(data)
  return service(sendObject)
}

/* 封装put方法 (resfulAPI常用) */
export function put(url, data = {}) {
  return service({
    url: url,
    method: 'put',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: JSON.stringify(data)
  })
}

/* 封装的post formData方法 */
export function form(url, data = {} || '') {
  let sendObject = {
    url: url,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    data
  }
  return service(sendObject)
}

/* 封装的put formData方法 */
export function putForm(url, data = {}) {
  let sendObject = {
    url: url,
    method: 'put',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    data
  }
  return service(sendObject)
}

/* 删除方法(resfulAPI常用) */
export function deletes(url) {
  return service({
    url: url,
    method: 'delete',
    headers: {}
  })
}

/* 不要忘记export */
export {
  service
}
