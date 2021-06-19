<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="isActiveStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  props: {
    path: String,
    colorStyle: {
      type: String,
      default: 'pink'
    }
  },
  methods: {
    itemClick () {
      // console.log('itemclick')
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    isActiveStyle () {
      return this.isActive ? {color: this.colorStyle} : {}
    }
  },
  created(){
    console.log('tabbaritem created')
    
  },
  destroyed(){
    console.log('tabbaritem destroyed')
    
  }
}
</script>
<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
