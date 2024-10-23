<script setup lang="ts">
</script>
<template>
  <div id="app">
    <h1>Vue.js Frontend</h1>
    <p>Backend API response: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Waiting for backend response..."
    };
  },
  async mounted() {
    const response = await fetch("/api/message");
    const data = await response.json();
    this.message = data.message;
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
