<script setup>
import { ref } from 'vue'
import Button from "primevue/button"; // Import the PrimeVue buttons.
import "primeflex/primeflex.css"; // Import the PrimeVue layout utility library.

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <Button label="Submit" />
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
