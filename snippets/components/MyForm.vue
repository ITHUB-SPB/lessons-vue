<script setup>

import { ref } from "vue"

const name = ref("");

</script>

<template>

<h3>Input Form</h3>
Name: <input type="text" v-model.lazy="name" />
<br/><br/>

<h3>Reactive Variables</h3>
name: <b>{{name}}</b>
<br/><br/>

</template>

<style scoped>
h3 {
  background-color: gainsboro;
  padding: 5px;
}
</style>