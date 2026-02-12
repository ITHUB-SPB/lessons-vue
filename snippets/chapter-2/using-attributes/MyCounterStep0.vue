<script setup>
import { 
    ref, 
    computed, 
    onMounted, 
    onUnmounted, 
    defineProps 
} from 'vue';

let timer;
const props = defineProps(["init", "end"]);  

const init = props.init || 0;
const end = props.end || 0;

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