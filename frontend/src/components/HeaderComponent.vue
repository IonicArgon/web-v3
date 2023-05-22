<script setup lang="ts">
import HeaderLinkComponent from './HeaderLinkComponent.vue';
</script>

<template>
  <div class="links">
    <HeaderLinkComponent link="/" text="Home" />
    <HeaderLinkComponent link="/about" text="About" />
    <HeaderLinkComponent link="/contact" text="Contact" />
  </div>
</template>

<style scoped lang="scss">
@import '../assets/main.css';

.links {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-gap: 20px;
  padding: 20px 0 20px 0;
}
</style>