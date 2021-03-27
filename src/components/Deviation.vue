<template>
  <div>
      <h3>Standard Deviation</h3>
      <p>`S=sqrt((n sumFiX\i^2-(sumFiX\i)^2)/(n(n-1)))`</p>
      <p>`=sqrt(({{n}}{{fixi2_sum}}-{{fixi_sum**2}})/({{n}}({{n}}-1)))`</p>
      <p>`=sqrt(({{n*fixi2_sum-(fixi_sum**2)}})/({{n*(n-1)}}))`</p>
      <p>`={{sd.toFixed(2)}}`</p>
      <br>
  </div>
</template>

<script>
export default {
    props:{
        fixi2_sum:Number,
        fixi_sum:Number,
        n:Number,
        sd:Number
    }

}
</script>

<style>

</style>