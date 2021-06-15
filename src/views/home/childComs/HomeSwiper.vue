<template>
  <div class="bannerWrap">
    <Banner swiperid="go">
      <template #swiper-con>
        <div class="swiper-slide" v-for="item in banners" :key="item.id">
          <a :href="item.link"><img :src="item.image"></a>
        </div>
      </template>
    </Banner>
  </div>
</template>
<script>
import Banner from '@/components/common/banner'
export default {
  name: 'HomeSwiper',
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
  }
}
</script>
<style scoped>
.bannerWrap{
  width: 100%;
  /* border:bisque 2px solid; */
}
</style>
