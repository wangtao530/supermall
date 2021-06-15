<template>
  <div class="mainTabBar">
    <tab-bar>
      <tab-bar-item path="/home" colorStyle="#ff5777">
        <img src="~@/assets/img/tabbar/home.svg" slot="item-icon">
        <img src="~@/assets/img/tabbar/home_active.svg" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" colorStyle="#ff5777">
        <img src="~@/assets/img/tabbar/category.svg" slot="item-icon">
        <img src="~@/assets/img/tabbar/category_active.svg" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" colorStyle="#ff5777">
        <img src="~@/assets/img/tabbar/cart.svg" slot="item-icon">
        <img src="~@/assets/img/tabbar/cart_active.svg" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" colorStyle="#ff5777">
        <img src="~@/assets/img/tabbar/profile.svg" slot="item-icon">
        <img src="~@/assets/img/tabbar/profile_active.svg" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>

import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>
.mainTabBar{
  background: aquamarine;
  height: 49px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
