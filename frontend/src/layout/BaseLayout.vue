<script setup lang="ts">

</script>

<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  padding: 0 30% 0 30%;
}

main {
  margin-top: 100px;
  padding: 0 30% 0 30%;
}

footer {
  padding: 0 30% 0 30%;
}
</style>