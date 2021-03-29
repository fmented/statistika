<template>
  <div v-if="result">
      <auto-table :data="sorted" :boldIndex="boldIndex" :title="'Sorted'" accent/>
      <formula :display="result.display.avg" :title="'Average'"/>
      <formula :display="result.display.median" :title="'Median'" accent/>
      <formula :display="result.display.mode" :title="'Mode'"/>
  </div>
</template>

<script>
import calc from '../scripts/nonGroup'
import AutoTable from './AutoTable.vue'
import Formula from './Formula.vue'
export default {
  components: { Formula, AutoTable },
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
        
        result(){
            return calc(this.input)
        },

        sorted(){
            return this.result.sorted
        },
        boldIndex(){
            return this.result.medianIndex
        }

        
    },

    methods:{

    }
    

    



}
</script>

<style>

</style>