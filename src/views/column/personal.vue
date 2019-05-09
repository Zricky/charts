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
      const data = [{
        'name': 'John',
        'vote': 35654
      }, {
        'name': 'Damon',
        'vote': 65456
      }, {
        'name': 'Patrick',
        'vote': 45724
      }, {
        'name': 'Mark',
        'vote': 13654
      }]
      const imageMap = {
        'John': 'https://zos.alipayobjects.com/rmsportal/mYhpaYHyHhjYcQf.png',
        'Damon': 'https://zos.alipayobjects.com/rmsportal/JBxkqlzhrlkGlLW.png',
        'Patrick': 'https://zos.alipayobjects.com/rmsportal/zlkGnEMgOawcyeX.png',
        'Mark': 'https://zos.alipayobjects.com/rmsportal/KzCdIdkwsXdtWkg.png'
      }
      const chart = new G2.Chart({
        container: 'c1',
        forceFit: true,
        height: window.innerHeight,
        padding: [60, 20, 40, 60]
      })
      chart.source(data, {
        vote: {
          min: 0
        }
      })
      chart.legend(false)
      chart.axis('vote', {
        labels: null,
        title: null,
        line: null,
        tickLine: null
      })
      chart.interval().position('name*vote').color('name', ['#7f8da9', '#fec514', '#db4c3c', '#daf0fd'])
      chart.point().position('name*vote').size(60).shape('name', function (name) {
        return ['image', imageMap[name]]
      })
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
