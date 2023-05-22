<script setup lang="ts">
import BaseLayout from './layout/BaseLayout.vue';
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <BaseLayout>
    <template #header>
      <HeaderComponent />
    </template>

    <template #default>
      <h1>Default</h1>
      <RouterView />
    </template>

    <template #footer>
      <h1>Footer</h1>
    </template>
  </BaseLayout>
</template>

<style scoped>

</style>
