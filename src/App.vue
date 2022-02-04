<template>
  <div id="app">
    <GetData />
  </div>
</template>

<script>
import GetData from "./components/GetData.vue";
export default {
  name: "App",
  components: {
    GetData,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
