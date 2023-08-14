<script setup lang="ts">
export interface Props {
    link?: string;
    text: string;
}
const props = withDefaults(defineProps<Props>(), {
    link: '#',
    text: 'Link',
});
</script>

<template>
  <div class="bg-primary-btn rounded-md w-full">
    <center>
      <RouterLink :to="props.link">{{ props.text }}</RouterLink>
    </center>
  </div>
</template>