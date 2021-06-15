<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TabBar'
}
</script>
<style>
#tabbar {
  display: flex;
  height: 49px;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 10px rgba(100, 100, 100, 0.2);
}
</style>
