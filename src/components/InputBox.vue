<template>
  <div >
      <h3>Input Data</h3>
      <p v-if="error">Please Check Your Data Again</p>
      <div class="input">
          <label for="input" class="hidden">Add Data</label>
        <textarea  pattern="^[0-9],\s*[0-9]$" id="input" name="input" title="use comma as delimiter" v-model="inputValue" placeholder="example: 12, 32, 14, 12, 12"></textarea>
        <label for="addition" class="addition-label">Add by</label>
        <input type="number" name="addition" id="addition" v-model="addition" placeholder="each items added by">
        <slot></slot>
        <button type="button" @click="check">Process</button>
      </div>
      
  </div>
</template>

<script>
import test from '../scripts/example'
export default {
    data(){

        return {
            inputValue:test().toString(),
            error: false,
            addition: 0
        }

    },
    methods:{
        process(val){
            this.$emit('process', val)
        },

        check(){
            let val = this.inputValue.replace(' ', '')
            let arr = val.split(',')
            let cleanedVal = {
                addedVal:[]   ,
                added:[],
                original:[]         
                }

            let add

            try {
                add = parseFloat(this.addition)
            } catch (error) {
                console.log(error);
                return
            }

            for (let i = 0; i < arr.length; i++) {
                let n
                try {
                    n = parseFloat(arr[i])
                    if(Number.isNaN(n)) continue
                    cleanedVal.addedVal.push(n+add)
                    cleanedVal.added.push(n+add)
                    cleanedVal.original.push(n)
                } 
                catch(error){
                    console.log(error);
                    this.error = true
                    return
                    
                }
                
            }
            return this.process(cleanedVal)

        }
    },
    mounted(){
        let self = this
        this.$nextTick(()=>self.check())
    }

}
</script>

<style scoped>
.input{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 5%;
    padding-bottom: 5%
}

.addition-label{
    margin-top: 12px;
    font-weight: bold;
}

.base{
    
}

textarea{
    height: 10vh;
    width: 90%;
}

.hidden{
    display: none;
}

button{
    margin-top:5%;
    border-radius: 4px;
    background-color: #17ff;
    color: #ffff;
    border: 1px solid #ddd;
    font-size: 1.2em;

}

#addition{
    margin: 12px;
}



</style>