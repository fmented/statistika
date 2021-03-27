<template>
  <div class="formula">
      <h3>Interval</h3>
      <p>`Interval=frac{rang\e}{class}`</p>
      <p>{{'`=frac{'}}{{range}}{{`}{`}}{{cls}}{{'}`'}}</p>
      <p>`={{range/cls}} ~~ {{Math.ceil(range/cls)}}`</p>
      <p>`={{Math.ceil(range/cls)}}`</p>
      <br>
  </div>
</template>

<script>
export default {
    props:{
        range:Number,
        cls:Number
    }

}
</script>

<style>

</style>