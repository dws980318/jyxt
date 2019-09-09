import Vue from 'vue'
import Vuex from 'vuex'
import Storage from '../utils/storage'
Vue.use(Vuex)
const state = { // 要设置的全局访问的state对象
  person: true,
  login: false,
  hideMenu: false,
  history: [],
  role: 0,
  navlist: [],
  haveLogin: false
  // 要设置的初始属性值
}
const getters = { // 实时监听state值的变化(最新状态)
  getList(state) { // 承载变化的showFooter的值
    return state.navlist
  },
}
const mutations = {
  delPerson(state, data) {
    state.person = data
  },
  setHaveLogin(state, data) {
    state.haveLogin = data
  },
  setLogin(state, data) {
    state.login = data
    Storage.setItem('login', state.login)
  },
  setRole(state, data) {
    state.role = data
    Storage.setItem('role', state.role)
  },
  setList(state, data) {
    state.navlist = data
    Storage.setItem('navlist', state.navlist)
  },
  changehideMenu(state, data) {
    state.hideMenu = data
    Storage.setItem('hideMenu', state.hideMenu)
  },
  addHistory(state, data) {
    if (!state.history) {
      state.history = []
    }
    state.history.push(data)
    Storage.setSsItem('history', state.history)
  },
  delHistory(state, index) {
    state.history.splice(index, 1)
    Storage.setSsItem('history', state.history)
  },
  clearLogin(state, data) {
    if (data) {
      state.history = []
      state.haveLogin = false
      Storage.removeSsItem('history')
      Storage.removeItem('login')
      Storage.removeItem('navlist')
      Storage.removeItem('role')
    }
  }
}
const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store
