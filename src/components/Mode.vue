<template>
  <div  class="formula">
      <h3>Mode</h3>
      <p>`Mode=b+i((F1)/(F1+F2))`</p>
      <p>`={{b}}+{{interval}}(({{f[0]}}-{{f[1]}})/(({{f[0]}}-{{f[1]}})+({{f[0]}}-{{f[2]}})))`</p>
      <p>`={{b}}+{{interval}}({{f[0]-f[1]}}/({{f[0]-f[1]}}+{{f[0]-f[2]}}))`</p>
      <p>`={{mode.toFixed(2)}}`</p>
      <br>
  </div>
</template>

<script>
export default {
    props:{

            b:Number,
            f:Array,
            mode: Number,
            interval: Number
        
    }

}
</script>

<style>

</style>