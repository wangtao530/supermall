<template>
  <div id="home">
    <nav-bar>
      <span slot="left">left</span>
      <span slot="center">购物车</span>
      <span slot="right">right</span>
    </nav-bar>
    <TabControl ref="tabControl2" 
      :titles="['流行','新款','精选']" 
      @tabControlClick="tabControlClick"
      class="tabControl2"
      v-show="isTabFixed"/>
    <Scroll class="content" ref="scroll" 
    :probeType="3" @positionChange="changedo" 
    :isPullUpLoad="true" @pullingData="loadMore">
      <HomeSwiper :banners="banners" @homeSwiperImgLoad="setTabControlOffsetTop" />
      <Recommend :recommends="recommend" />
      <FeatureView/>
      <TabControl ref="tabControl" 
      :titles="['流行','新款','精选']" 
      @tabControlClick="tabControlClick"/>
      <GoodsList :goodslist="showGoods"/>
    </Scroll>
    <BackTop @click.native="toTop" v-show="isShowBackToTop"/>
    <!-- ul>li{列表$}*100 -->

  </div>
</template>
<script>
// 头部导航栏
import NavBar from "@/components/common/navbar/NavBar"

import Scroll from '@/components/common/scroll/Scroll'

import HomeSwiper from './childComs/HomeSwiper'
import Recommend from './childComs/Recommend'
import FeatureView from './childComs/FeatureView'

import TabControl from '@/components/content/tabcontrol/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'

import BackTop from '@/components/content/backtop/BackTop'

import {getHomeMultidata,getHomeGoods} from '@/network/home'
import { debounce } from '@/common/utils'
export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return {
      banners: [],
      recommend: [],
      goodsList:{
        'pop':{page: 0,list:[]},
        'new':{page: 0,list:[]},
        'sell':{page: 0,list:[]},
      },
      currentType: 'pop',
      isShowBackToTop: false,
      tabControlOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  computed:{
    showGoods(){
      return this.goodsList[this.currentType].list
    }
  },
  created(){
    console.log('home created')
    
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
    
  },
  mounted(){
    // 3.使用事件总线监听goodslistitem的加载
    const refresh = debounce(this.$refs.scroll.refresh,20) //防抖函数避免刷新频繁
    this.$bus.$on('goodsItemImgLoad',() => {
      refresh('i')
    })
  },
  destroyed(){
    console.log('home destroyed')
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.saveY = this.$refs.scroll.getScrollY()
  },
  methods:{
    setTabControlOffsetTop(){
      // 组件的没有offsetTop,必须通过.$el获取对应元素的offsetTop
      let offsetTop = this.$refs.tabControl.$el.offsetTop
      console.log(offsetTop)
      this.tabControlOffsetTop = offsetTop
    },
    /**
     * 事件监听相关的方法
     */
    tabControlClick(i){
      console.log(i)
      switch (i) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
        this.$refs.tabControl.currentIndex = i
        this.$refs.tabControl2.currentIndex = i
    },
    toTop(){
      // console.log('backtotop')
      this.$refs.scroll.scrollTo(0,0,500) // $refs可以获取对应组件对象，从而使用其方法或属性
    },
    changedo(pos){
      //console.log(pos.y)
      // 1、 backtop是否显示
      this.isShowBackToTop = pos.y > -1000 ? false : true
      // 2、 tabcontrol是否吸顶
      this.isTabFixed = (-pos.y) > this.tabControlOffsetTop
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    /**
     * 网络请求相关方法
     */
    getHomeMultidata(){
      getHomeMultidata().then(res=>{// 发送网络请求数据
      //console.log(res)
      this.banners = res.data.banner.list
      this.recommend = res.data.recommend.list
      })
    },
    getHomeGoods(type){
      getHomeGoods(type,++this.goodsList[type].page).then(
        (res) =>{
          //console.log(res)
          //console.log(this)
          //console.log(this.goodsList[type])
          this.goodsList[type].list.push(...res) // 将数组中的数据逐个添加进list
          // 数据加载完毕，finish一下，不然不能加载下一次
          this.$refs.scroll.finishPullUP()
        },
        function(rej){
          console.log(rej)
        }
      ).catch(
        err => console.log(err)
      )
    }
  }
}
</script>
<style scoped>
#home{
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
/* 使用浏览器原生滚动时使用 */
/* .navBar{
  position:fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
} */
/* .tab-control{
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 9;
} */
.tabControl2 {
  position: relative;
  z-index: 9;
}
.tabControlIsFixed{
  position:fixed;
  left: 0;
  right: 0;
  top: 44px;
}
.content{
  /* height: calc(100% -93); */
  overflow: hidden;
  position: absolute;/**子絕父相 */
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
