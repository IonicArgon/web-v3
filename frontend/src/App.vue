<script setup lang="ts">
import BaseLayout from './layout/BaseLayout.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import { onMounted } from 'vue';

interface Props {
  theme: string;
}
const props = withDefaults(defineProps<Props>(), {
  theme: 'light',
});

onMounted(() => {
  const initialTheme = localStorage.getItem('theme') || props.theme;
  document.documentElement.setAttribute('data-theme', initialTheme);
});
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
