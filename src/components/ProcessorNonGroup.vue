<template>
  <div>
      <div  class="formula">
          <h3>Sorted</h3>
          <div class="table-container">
          <table class="table">
              <tbody>
                  <tr v-for="(v, i) in sortedList" :key="i">
                      <td v-for="(v2, j) in v" :key="j" style="border:1px solid #dddd">
                          {{v2}}
                      </td>
                  </tr>
              </tbody>
          </table>
          </div>
          </div>
      <div :key="result.avgDisplay">
          <h3>Average</h3>
          <p>{{result.avgDisplay}}</p>
          <p>`={{result.avg}}`</p>
      </div>
      <div  class="formula" :key="result.medianDisplay">
          <h3>Median</h3>
          <div v-if="result.medianDisplay != ''">
              <p >{{result.medianDisplay}}</p>
          </div>
          <p>`= {{result.median}}`</p>
      </div>
      <div :key="`${result.mode}`">
          <h3>Mode</h3>
          <p>` = {{result.mode.toString()}}`</p>
      </div>
  </div>
</template>

<script>
import calc from '../scripts/nonGroup'
import {test} from '../scripts/withGroup.js'
export default {
    props:{
        input:{
            type:Array,
            default:()=>test
        }
    },

    computed:{
        sortedList(){
            let i = [...this.result.sorted]
            let x = []
            while (i.length) x.push(i.splice(0,8))
            return x
        },

        
        result(){
            return calc(this.input)
        },

        
    },
    

    



}
</script>

<style>

</style>