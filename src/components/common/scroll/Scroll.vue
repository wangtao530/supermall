<template>
    <div class="wrapper" ref="wrapper">
      <div class="scrollContent">
        <slot></slot>
      </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    }
  },
  props:{
    probeType: {
      type: Number,
      default: 0
    },
    isPullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // 1、创建better-scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true, // 2、scroll范围内div的点击事件必须设置，否则事件不生效
      probeType: this.probeType,
      pullUpLoad:this.isPullUpLoad
    })
    // console.log(this.scroll)
      
    // 3、监听滚动位置
    this.scroll.on('scroll',(pos) => {
      this.$emit('positionChange',pos)
    })
    // 4、上拉加载更多
    this.scroll.on('pullingUp',() => {
      console.log('上拉加载更多')
      this.$emit('pullingData')
    })

  },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    refresh(i){
      console.log(i+'---refresh')
      this.scroll && this.scroll.refresh()
    },
    finishPullUP(){
      this.scroll && this.scroll.finishPullUp()
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>
<style scoped>
</style>