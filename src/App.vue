<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <Tickets />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Tickets from './components/Tickets'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Tickets
  }
}
</script>

<style lang="scss">
@import './assets/css/app.scss';
</style>
