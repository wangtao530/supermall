<template>
  <div class="goods">
    <GoodsListItem v-for="item in goodslist" :key="item.id" :goodsItem="item"/>
  </div>
</template>
<script>
import GoodsListItem from './GoodListItem.vue'
export default {
  name: 'GoodsList',
  props: {
    goodslist:{
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>
<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1%;
}
</style>