<template>
  <div class="formula">
      <h3>Mean</h3>
      <p>`Mean=frac{sumFiX\i}{sumFi}`</p>
      <p>{{'`=frac{'}}{{fixi_sum}}{{`}{`}}{{fi_sum}}{{'}`'}}</p>
      <p>`={{(fixi_sum/fi_sum).toFixed(2)}}`</p>
      <br>
  </div>
</template>

<script>
export default {
    props:{
        fixi_sum:Number,
        fi_sum:Number
    }

}
</script>

<style>

</style>