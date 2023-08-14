<script setup lang="ts">

</script>

<template>
  <div class="b">
    <header class="
      w-full
      fixed
      top-0
      left-0
      -translate-y-2
    ">
      <slot name="header"></slot>
    </header>
    <main class="
      w-1/2 
      mx-auto
      pt-28
    ">
      <slot></slot>
    </main>
    <footer class="
      w-1/2
      mx-auto
    ">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>