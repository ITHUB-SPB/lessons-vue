<script setup>

import MyCounter from "./MyCounter.vue";
import { defineProps } from "vue";

const props = defineProps(["nb"]);
const nb = props.nb || 1;

</script>

<template>

<MyCounter v-for="i in nb" :key="i" :index="i" />

</template>