import mock from './fetch'

export default {
  login (url, params) {
    return mock.mockdata(url, params)
  }
}
