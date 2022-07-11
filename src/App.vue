<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <RegularComponent msg="Options API" />
    <SFCComponent  msg="Composition API" />
  </div>
</template>

<script>
import RegularComponent from '@/components/RegularComponent.vue'
import SFCComponent from '@/components/SFCComponent.vue'

export default {
  name: 'App',
  components: {
    RegularComponent,
    SFCComponent
  }
}
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
