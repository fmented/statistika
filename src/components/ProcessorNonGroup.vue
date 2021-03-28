<template>
  <div>
      <div  class="formula accent">
          <h3>Sorted</h3>
          <div class="table-container">
          <table class="table">
              <tbody>
                  <tr v-for="(v, i) in sortedList" :key="i">
                      <td v-for="(v2, j) in v" :key="j" style="border:1px solid #dddd"
                      v-html="result.medianIndex.includes(breakPoint*i+j) ? `<b>${v2}</b>` : v2 "
                      >
                      </td>
                  </tr>
              </tbody>
          </table>
          </div>
          </div>
      <formula :display="result.display.avg" :title="'Average'"/>
      <formula :display="result.display.median" :title="'Median'" accent/>
      <formula :display="result.display.mode" :title="'Mode'">
          <p>` = {{result.mode.length ? result.mode.toString() : 'No Mode'}}`</p>
      </formula>
  </div>
</template>

<script>
import calc from '../scripts/nonGroup'
import Formula from './Formula.vue'
export default {
  components: { Formula },
    props:{
        input:{
            type:Array,
        }
    },

    data(){
        return {
            breakPoint : 12
        }
    },

    computed:{
        sortedList(){
            let i = [...this.result.sorted]
            let x = []
            while (i.length) x.push(i.splice(0,this.breakPoint))
            return x
        },

        
        result(){
            return calc(this.input)
        },

        
    },

    methods:{

    }
    

    



}
</script>

<style>

</style>