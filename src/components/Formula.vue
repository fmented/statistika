<template>
  <div :key="`${title}:${display}`" :class="accent?'formula accent':'formula'">
      <h3>{{title}}</h3>
      <p v-for="(v, i) in display" :key="i">`{{v}}`</p>
      <slot></slot>
      <br>
  </div>
</template>

<script>
export default {
    props:{
        title: String,
        display: Array,
        accent :{
            type: Boolean,
            default: false
        }
    }

}
</script>

<style>

</style>