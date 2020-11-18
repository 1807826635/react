import axios from 'axios'
import { store } from '../store'
import { productDomain } from '../utils/constant'
import Toast from 'react-native-root-toast'

// axios.defaults.withCredentials = true

const instance = axios.create({
  baseURL: productDomain,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
  }
})
instance.interceptors.request.use(config => {
  let { sessionId, appConfig } = store.getState()
  if (!config.headers.JSESSIONID) {
    config.headers.JSESSIONID = sessionId
  }
  if (appConfig.develop && config.baseURL.indexOf('rayong.gicp.net') < 0) {
    config.baseURL = appConfig.domain
    console.log(`JSESSIONID: ${config.headers.JSESSIONID}`)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use(resp => {
  return resp
}, (error) => {
  if (error.message === 'Network Error') {
    Toast.show('网络异常，请检查网络', {
      position: 0,
      duration: 3000,
      shadow: false,
      hideOnPress: false
    })
  }
  // 若请求超时，error.response 则为 undefined
  if (error.response && error.response.config.headers.handlingErrors !== 'self') {
    const errorMsg = error.response.data && error.response.data.content
    Toast.show(errorMsg || '服务器忙，请稍候再试...', {
      position: 0,
      duration: 1000,
      shadow: false
    })
  }
  return Promise.reject(error)
})

export default instance
