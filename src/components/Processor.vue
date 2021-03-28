<template>
  <div>
    <formula :display="result.display.range" :title="'Range'" accent/>
    <formula :display="result.display.cls" :title="'Class'"/>
    <formula :display="result.display.interval" :title="'Interval'" accent/>
    <freq-table :data="result.table" :fi_sum="result.fi_sum" :fixi_sum="result.fixi_sum" :fixi2_sum="result.fixi2_sum" :hifi_index="result.hifi_index"/>
    <formula :display="result.display.mean" :title="'Mean'" accent/>
    <formula :display="result.display.median" :title="'Median'"/>
    <formula :display="result.display.mode" :title="'Mode'" accent/>
    <formula :display="result.display.sd" :title="'Standard Deviation'" />
    <div class="formula accent">
      <h3>Chart</h3>
      <chart-bar :chartdata="chart" />
    </div>
    
  </div>
</template>

<script>
import ChartBar from './ChartBar.vue'
import FreqTable from './FreqTable.vue'
import withGroup from '../scripts/withGroup'
import Formula from './Formula.vue'
export default {
  components: { FreqTable, ChartBar, Formula},
    
  props:{
    input:{
      type:Array,
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

