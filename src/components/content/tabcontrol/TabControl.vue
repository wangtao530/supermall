<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" :key="item" class="tabcontrol-item" :class="{active:index == currentIndex}" @click="tabItemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabControl',
  props: {
    titles:{
      type: Array,
      default(){ // 当type是对象或是数据时，默认值是一个函数
        return []
      }
    }
  },
  data(){
    return{
      currentIndex: 0
    }
  },
  methods:{
    tabItemClick(i){
      this.currentIndex = i
      this.$emit('tabControlClick',i)
    }
  }
}
</script>
<style scoped>
.tabcontrol{
  background: #fff;
  display: flex;
  text-align: center;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
}
.tabcontrol .tabcontrol-item{
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.active span{
  padding: 5px;
  border-bottom: 2px solid var(--color-tint);
}
</style>
