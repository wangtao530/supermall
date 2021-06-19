<template>
  <div>
    <h1>goods details</h1>
    <h2>{{ goodsid }}</h2>
  </div>
</template>
<script>
export default {
  name: 'GoodsDetail',
  data(){
    return {
      //id: null
    }
  },
  computed: {
    goodsid(){
      return this.$route.params.id
    }
  },
  created(){ // 由于App.vue中设置了keep-alive，所以这里也只创建一次
    
  },
  destroyed(){
    console.log('goodsdetail destroyed')
  }
}
</script>
<style scoped>

</style>
