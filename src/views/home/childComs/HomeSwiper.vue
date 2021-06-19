<template>
  <div class="bannerWrap">
    <Banner swiperid="go">
      <template #swiper-con>
        <div class="swiper-slide" v-for="item in banners" :key="item.id">
          <a :href="item.link"><img :src="item.image" @load="homeSwiperImgLoad"></a>
        </div>
      </template>
    </Banner>
  </div>
</template>
<script>
import Banner from '@/components/common/banner'
export default {
  name: 'HomeSwiper',
  data () {
    return {
      imgIsLoad: false
    }
  },
  components: {
    Banner
  },
  props:{
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    homeSwiperImgLoad(){
      if(!this.imgIsLoad){
        this.$emit('homeSwiperImgLoad')
        this.imgIsLoad = true
      }
    }
  }
}
</script>
<style scoped>
.bannerWrap{
  width: 100%;
  /* border:bisque 2px solid; */
}
</style>
