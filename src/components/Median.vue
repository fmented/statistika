<template>
  <div >
      <h3>Median</h3>
      <p>`Median=b+i((frac{1}{2}n-Jf)/f)`</p>
      <p>`={{b}}+{{interval}}((frac{1}{2}{{n}}-{{jf}})/{{f}})`</p>
      <p>`={{b}}+{{interval}}({{(.5*n-jf)/f}})`</p>
      <p>`={{med}}`</p>
      <br>
  </div>
</template>

<script>
export default {
    props:{

            b:Number,
            jf:Number,
            f: Number,
            med: Number,
            n:Number,
            interval:Number
        
    }

}
</script>

<style>

</style>