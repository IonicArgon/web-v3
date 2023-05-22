<script setup lang="ts">
interface Props {
    link?: string;
    text: string;
}
const props = withDefaults(defineProps<Props>(), {
    link: '#',
    text: 'Link',
});

</script>

<template>
  <div class="header-link">
    <RouterLink :to="props.link">{{ props.text }}</RouterLink>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/main.css';

.header-link {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-btn);
  border-radius: 25px;

  a {
    text-decoration: none;
    color: var(--primary-text);
    padding: 10px 20px 10px 20px;
  }
}
</style>