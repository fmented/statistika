<template>
  <div>
      <h3>Class</h3>
      <p>`Class = 1+3.3 Log(n)`</p>
      <p>`= 1+3.3 Log({{n}})`</p>
      <p>`=1+3.3 ({{Math.log10(n)}})`</p>
      <p>`={{1+3.3*Math.log10(n)}} ~~ {{cls}}`</p>
      <p>`={{cls}}`</p>
      <br>
  </div>
</template>

<script>
export default {
    props:{
        n: Number,
        cls: Number
    }

}
</script>

<style>

</style>