<template>
  <div id="home">
    <nav-bar>
      <span slot="left">left</span>
      <span slot="center">购物车</span>
      <span slot="right">right</span>
    </nav-bar>
    <HomeSwiper :banners="banners" />
    <Recommend :recommends="recommend" />
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar"
import HomeSwiper from './childComs/HomeSwiper'
import Recommend from './childComs/Recommend'
import {getHomeMultidata} from '@/network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    //Banner,
    Recommend
  },
  data(){
    return {
      banners: [],
      recommend: []
    }
  },
  created(){
    getHomeMultidata().then(res=>{// 发送网络请求数据
      console.log(res)
      this.banners = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  }
}
</script>
