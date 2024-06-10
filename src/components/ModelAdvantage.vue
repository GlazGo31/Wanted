<script setup>

import {useAdvantageStore} from "../store/advantages/advantages.js";
import {ref, toRefs, watch} from "vue";
import {storeToRefs} from "pinia";

const props = defineProps({
  model: {
    type: Array
  },
  title: {
    type: String
  }
})

const store = useAdvantageStore();

const {model} = toRefs(props)

const buttonDis = ref(false)
watch(()=>model.value, (newVal)=> {
  if(newVal.length > 3) {
    buttonDis.value = true
  }
}, {deep: true})


</script>

<template>
<div class="model_advantage">
  <h2>{{ props.title }}</h2>
  <div class="advantage__items">
    <div class="model_advantage__item" v-for="uniq in props.model" :key="uniq.description">
      <img :src="`../../src/` + uniq.image" :alt="uniq['image_alt']">
      <p>{{uniq?.description}}</p>
    </div>
  </div>
  <button :disabled="buttonDis" @click="store.addUniqModelFigaro()">Добавить описание</button>
</div>
</template>

<style scoped>
.model_advantage {
  margin-bottom: 94px;
}
h2 {
  text-align: left;
  font-size: 48px;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 24px;
}
.advantage__items {
  display: flex;
  justify-content: space-between;
}

.model_advantage__item {
  max-width: 384px;
  flex: 1 1 auto;
}

@media (max-width: 1820px) {
  .advantage__items {
    flex-flow: row wrap;
  }
  .model_advantage__item {
    max-width: 50%;
  }
}

@media (max-width: 768px) {
  .advantage__items {
    flex-flow: column nowrap;
  }
  .model_advantage__item {
    max-width: 100%;

  }
}
</style>