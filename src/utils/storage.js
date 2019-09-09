const ls = window.localStorage
const ss = window.sessionStorage
// https://github.com/tsironis/lockr
export default {
  getItem(key) {
    try {
      return JSON.parse(ls.getItem(key))
    } catch (err) {
      return null
    }
  },
  setItem(key, val) {
    ls.setItem(key, JSON.stringify(val))
  },
  clear() {
    ls.clear()
  },
  keys() {
    return ls.keys()
  },
  removeItem(key) {
    ls.removeItem(key)
  },
  getSsItem(key) {
    try {
      return JSON.parse(ss.getItem(key))
    } catch (err) {
      return null
    }
  },
  setSsItem(key, val) {
    ss.setItem(key, JSON.stringify(val))
  },
  ssClear() {
    ss.clear()
  },
  ssKeys() {
    return ss.keys()
  },
  removeSsItem(key) {
    ss.removeItem(key)
  },
  setCookie(name, pwd, exdays) {
    var exdate = new Date() // 获取时间
    exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays) // 保存的天数
    // 字符串拼接cookie
    document.cookie = 'userName' + '=' + name + ';path=/;expires=' + exdate.toGMTString()
    document.cookie = 'password' + '=' + pwd + ';path=/;expires=' + exdate.toGMTString()
  },
  getCookie(cname) {
    var name = cname + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === ' ') c = c.substring(1)
      if (c.indexOf(name) !== -1) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  },
  clearCookie() {
    this.setCookie('', '', -1) // 修改2值都为空，天数为负1天就好了
  }
}
