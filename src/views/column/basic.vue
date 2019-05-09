<template>
  <div id="c1"></div>
</template>

<script>
import G2 from '@antv/g2'

export default {
  name: 'App',
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.drawChart()
  },
  methods: {
    drawChart () {
      const data = [
        { 'genre': 'Sports', 'sold': 275 },
        { 'genre': 'Strategy', 'sold': 1150 },
        { 'genre': 'Action', 'sold': 120 },
        { 'genre': 'Shooter', 'sold': 350 },
        { 'genre': 'Other', 'sold': 150 }
      ]
      const chart = new G2.Chart({
        container: 'c1',
        width: 500,
        height: 500
      })
      chart.source(data)
      chart.interval().position('genre*sold').color('genre')
      chart.render()
    }
  }

}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
