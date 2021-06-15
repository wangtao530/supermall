/**
 * 网络请求的封装
 */
import axios from 'axios'
export function request(config){
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://192.168.0.102:19900',
    timeout: 5000
  })
  // 2.axios拦截器
  instance.interceptors.request.use(config => {
    // console.log('请求成功拦截器')
    // console.log(config)
    // 请求拦截的作用

    // 1.比如config中一些信息不符合服务器的要求
    // (添加额外或修改请求信息))
    // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    // (响应成功时取消)
    // 3.某些网络请求（比如登录token）,必须携带一些特殊的信息
    return config
  },
  err =>{
    // console.log('请求失败拦截器')
    // console.log(err)
  })
  instance.interceptors.response.use(res => {
    // 响应拦截器的使用
    // console.log('响应成功拦截器')
    // console.log(res)
    return res.data // 对数据进行一些转化
  },err => {
    // console.log('响应失败拦截器')
    // console.log(err)
    throw err
  })
  // 3.发送真正的网络请求
  return instance(config)
}
