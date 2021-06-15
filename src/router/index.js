import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Cart = () => import('@/views/cart/Cart')
const Profile = () => import('@/views/profile/Profile')

// 以下四行代码解决由路由push的路径，重复点击时报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.replace = function replace (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const routes = [{
  path: '',
  redirect: '/home'
},
{
  path: '/home',
  component: Home
},
{
  path: '/category',
  component: Category
},
{
  path: '/cart',
  component: Cart
},
{
  path: '/profile',
  component: Profile
}]
const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

export default router