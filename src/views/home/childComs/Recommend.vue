<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{ item.title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Recommend',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
.recommend {
  display:flex;
  width: 100%;
  text-align: center;
  font-size: 14px;
  padding: 8px 0 8px;
  border-bottom: 8px solid #eee;
}
.recommend-item{
  flex: 1;
}
.recommend img {
  height: 70px;
  width: 70px;
  margin-bottom: 5px;
}
</style>