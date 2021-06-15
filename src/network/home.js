import {request} from './request'
export function getHomeMultidata(){
  return request({
    url: '/vuedeploytest/supermall/home/multidata.json'
  })
}