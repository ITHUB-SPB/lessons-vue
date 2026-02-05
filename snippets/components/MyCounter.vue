<script setup>

import useToggleTheme from '../composables/useToggleTheme.js';

const [toggleTheme, themeStyles] = useToggleTheme(
  {color:"red", backgroundColor:"black"}, 
  {color:"green", textAlign:"right", backgroundColor:"gainsboro"}
);

</script>

<template>

<h3>MyCounter Component</h3>
<div>
  <button @click="toggleTheme">Toggle Theme</button>
  <p :style="themeStyles">Paragraph 1</p>
  <p :style="themeStyles">Paragraph 2</p>
</div>

</template>

<style scoped>

p {
  height : 30px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

</style>