<template>
  <div id="app">
    <img class="logoimg" src="./assets/logo.png">
    <div>
      <router-link to="/">Go to HelloWorld</router-link>
      <router-link to="/chart">Go to chart</router-link>
       <router-link to="/todolist">Go to todolist</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.logoimg{
  width: 150px;
  height: 150px;
}
</style>
