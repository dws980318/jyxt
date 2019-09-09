import { Loading } from 'element-ui'
let load
export default {
  startLoading (txt) {
    load = Loading.service({
      lock: true,
      text: txt,
      background: 'rgba(0, 0, 0, 0.7)'
    })
    return load
  }
}
