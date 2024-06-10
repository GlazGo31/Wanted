<script setup>
defineProps({
  tag: {
    type: String
  },
  title: {
    type: String
  }
})
</script>

<template>
  <component :is="tag" :class="`title-${tag}`">{{ title }}</component>
</template>

<style scoped>
.title-h1 {
  font-size: clamp(28px, 5vw, 56px);
  text-align: left;
  color: #000000;
  font-weight: 300;
  margin: 0;
}

.title-h2 {
  font-size: 36px;
}

.title-h3 {
  font-size: 24px;
}
</style>