<template>
  <div class="formula">
      <h3>Range</h3>
      <p>
          `Rang\e = max – min`
      </p>
      <p>
          `={{`${max}-${min}`}}`
      </p>
      <p>
          `={{`${max-min}`}}`
      </p>
      <br>
  </div>
</template>

<script>
export default {
    props:{
        min:Number,
        max: Number
    }

}
</script>

<style>
.formula{
    background-color: rgba(0, 0, 0, .05);
    padding-top: 5%;
    padding-bottom: 5%;
}

</style>