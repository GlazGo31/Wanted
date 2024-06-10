<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
<div class="our_advantage">
  <slot name="svg"></slot>
  <h3>{{title}}</h3>
  <p>{{text}}</p>
</div>
</template>

<style scoped>
.our_advantage {
  max-width: 282px;
  height: 314px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
}

h3 {
  margin: 0;
}

p {
  margin: 0;
}
 @media (max-width: 768px) {

 }

</style>