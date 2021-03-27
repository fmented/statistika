<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['chartdata', 'options'],
  computed:{
      highest(){
          return Math.max(...this.chartdata.map(i=>i.fi)) + Math.min(...this.chartdata.map(i=>i.fi))
      },

  },
  methods:{

  },
  mounted () {
    let vm = this
    
    this.$nextTick(function(){
      vm.renderChart(vm.chartdata, vm.options)
      })
  },

  watch:{
    
    chartdata(){
      let vm = this
      this.$nextTick(function(){
      vm.renderChart(vm.chartdata, vm.options)
      })
    }
  }
}
</script>