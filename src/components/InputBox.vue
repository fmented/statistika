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
    },
    watch:{
        inputValue(){
            this.check()
        },
        addition(){
            this.check()
        }
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
    padding-bottom: 5%;
}

.addition-label{
    margin-top: 24px;
    font-weight: bold;
}


textarea{
    height: 10vh;
    width: 90%;
    font-size: 1.2em;
}

.hidden{
    display: none;
}


#addition{
    margin: 12px;
    min-width: 90%;
    font-size: 1em;
}



</style>