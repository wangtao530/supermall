import {
  request
} from './request'
export function getHomeMultidata() {
  return request({
    url: '/home/multidata.json'
  })
}
export function getHomeGoods(type, index) {
  return request({
    url: '/home/goodspage',
    params: {
      type,
      index
    }
  })
}
