<template>
  <div>
    <ul>
      <li><router-link to="/personal">柱状图-自定义</router-link></li>
      <li><router-link to="/basic">柱状图-基本</router-link></li>
    </ul>
    <ul>
      <li><router-link to="/line">折线图</router-link></li>
    </ul>
    <ul>
      <li><router-link to="/china">中国地图</router-link></li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'menu'
}
</script>

<style scoped>

</style>
