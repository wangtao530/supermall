<template>
  <div class="goodsItem" @click="itemClick">
    <img :src="goodsItem.img" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥：{{ goodsItem.price}}</span>
      <span class="collect">收藏：{{ goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit('goodsItemImgLoad')
    },
    itemClick(){
      console.log(this.goodsItem.id)
      this.$router.push('/detail/'+this.goodsItem.id)
    }
  }
}
</script>
<style scoped>
.goodsItem {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goodsItem img{
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  position:absolute;
  font-size: 12px;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url(~@/assets/img/common/collect.svg) 0 0/14px 14px;
}
</style>