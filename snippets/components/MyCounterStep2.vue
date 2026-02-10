<script setup>
import { ref, computed, onMounted, onUnmounted, defineProps }
from 'vue';
let timer;
const props = defineProps(["init", "end"]);  
// Declaration of the "init" and "end" attributes
const init = props.init || 0;    // 0: default value
const end = props.end || 0;  // 0: default value
const count = ref(parseInt(init));
const doubleCount = computed(() => count.value * 2);
const increment = () => {
  if (!end || count.value < parseInt(end)) count.value++;
  else stop();
};
const start = () => {
  timer = setInterval(() => {
    increment();
  }, 1000);
};
const stop = () => {
  clearInterval(timer);
};
onMounted(() => {
  start();
});
onUnmounted(() => {
  stop();
});
</script>
<template>
  <h3>MyCounter Component</h3>
  init : {{init}} => end : {{end}}
  <br /><br />
  Reactive variable count : <b>{{ count }}</b>
  <br />
   Computed variable doubleCount : <b>{{ doubleCount }}</b>
</template>