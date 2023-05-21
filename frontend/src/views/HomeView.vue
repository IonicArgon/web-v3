<script setup lang="ts">

</script>

<template>
  this is the index page probably
  <li v-for="n in 100" v-bind:key="n">
    {{ n }}: test
  </li>
</template>