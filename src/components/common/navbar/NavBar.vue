<template>
  <div class="navBar">
    <div class="leftNavBar"><slot name="left"></slot></div>
    <div class="centerNavBar"><slot name="center"></slot></div>
    <div class="rightNavBar"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
}
</script>
<style scoped>
.navBar{
  display: flex;
  height: 44px;
  line-height: 44px;
  background:var(--color-tint);
}
.navBar .leftNavBar,.navBar .rightNavBar{
  width:60px;
}
.navBar .centerNavBar{
  text-align: center;
  color: #fff;
  flex: 1;
}
</style>