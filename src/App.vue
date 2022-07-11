<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <RegularComponent msg="Options API" />
    <SFCComponent  msg="SFC Composition API" />
    <CompositionApi  msg="Composition API" />
  </div>
</template>

<script>
import RegularComponent from '@/components/RegularComponent.vue'
import SFCComponent from '@/components/SFCComponent.vue'
import CompositionApi from '@/components/CompositionApi.vue'

export default {
  name: 'App',
  components: {
    RegularComponent,
    SFCComponent,
    CompositionApi
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
