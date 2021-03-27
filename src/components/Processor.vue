<template>
  <div v-if="result">
    <range :min="result.input_min" :max="result.input_max" :key="`${input}${result.range}`"/>
    <class :n="result.fi_sum" :cls="result.cls" :key="`${input}${result.cls}`"/>
    <interval :cls="result.cls" :range="result.range" :key="`${input}${result.interval}`"/>
    <freq-table :data="result.table" :fi_sum="result.fi_sum" :fixi_sum="result.fixi_sum" :fixi2_sum="result.fixi2_sum" :hifi_index="result.hifi_index"/>
    <mean :fi_sum="result.fi_sum" :fixi_sum="result.fixi_sum" :key="`${input}${result.mean}`"/>
    <median :b="result.b" :jf="result.jf" :f="result.f[0]" :med="result.median" :n="result.fi_sum" :interval="result.interval" :key="`${input}${result.median}`"/>
    <mode :b="result.b" :f="result.f" :mode="result.mode" :interval="result.interval" :key="`${input}${result.mode}`"/>
    <deviation :n="result.fi_sum" :fixi2_sum="result.fixi2_sum" :fixi_sum="result.fixi_sum" :sd="result.sd" :key="`${input}${result.sd}`"/>
    <div class="formula">
      <h3>Chart</h3>
      <chart-bar :chartdata="chart" />
    </div>
    
  </div>
</template>

<script>
import ChartBar from './ChartBar.vue'
import Class from './Class.vue'
import Deviation from './Deviation.vue'
import FreqTable from './FreqTable.vue'
import Interval from './Interval.vue'
import Mean from './Mean.vue'
import Median from './Median.vue'
import Mode from './Mode.vue'
import Range from './Range.vue'
import withGroup from '../scripts/withGroup'
import {test} from '../scripts/withGroup'
export default {
  components: { Range, Interval , Class, FreqTable,
  Deviation, ChartBar, Mean, Mode, Median},
    
  props:{
    input:{
      type:Array,
      default: ()=>test
    }
  },

  data(){
    return {

    }
  },


computed:{
  chart(){
          let x = this.result.table.filter(i=>i.fi!=0).map(i=>{
              return {data: [i.fi,0], label:`${i.min}-${i.max}`, backgroundColor: this.getRandomColor()}
          })
          let labels = ['Frequency']
          
          return {
              labels,
              datasets: x
    }
      },

  result(){
    return withGroup(this.input)
  }
},


  methods:{
    

    getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    },

  },
  mounted(){

  },

  watch:{
  }
 
}
</script>

