<template>
  <div id="app">
    <header class="nav">
      <h2>
        Statistika
      </h2> 
    </header>
    <input-box @process="override">
    <div style="text-align:center">
      <label for="nongroup">Process Non Group</label>
    <input type="checkbox" name="nongroup" id="nongroup" v-model="nongroup">
    </div>
    </input-box>
    <div v-if="input">
      <p style="text-align:center">Original: {{input.original}}</p>
      <p style="text-align:center">Added: {{input.addedVal}}</p>
      </div>
    
    <div v-if="nongroup">
        <processor-non-group  v-if="input" :input="input.added"/>
        <processor-non-group v-else ></processor-non-group>
    </div>
    <div v-else>
      <processor  v-if="input" :input="input.added"/>
      <processor  v-else ></processor>
    </div> 
  </div>
</template>

<script>

import Processor from './components/Processor.vue'
import InputBox from './components/InputBox.vue'
import ProcessorNonGroup from './components/ProcessorNonGroup.vue'

export default {
  components: { Processor, InputBox, ProcessorNonGroup },
  name: 'App',
    
  data(){
    return{
      input:undefined,
      nongroup: true
    }
  },
  

  methods:{
    override(v){
      this.input = v
    },
    log(v){
      console.log(v);
    }
  },

  watch:{
    input(){
      let vm = this
      this.$nextTick(()=>setTimeout(()=>vm.reRender()))
    },

    nongroup(){
        let vm = this
      this.$nextTick(()=>setTimeout(()=>vm.reRender()))
    }
  }
 
}
</script>

<style>
*{
    box-sizing: border-box;
}

body{
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top:-20px;
  margin-left: 0;
  
}

.nav{
    position: relative;
    display: block;
    background-color: #008978;
    color: #ffff;
    text-align: left;
    height: 40px;
    padding-bottom: 20px;
}

.nav>h2{
  padding: 5px;
}


p, h3{
  text-align: left;
  margin-left: 10%;
}

h3{
  margin-top: 5%;
}
</style>
