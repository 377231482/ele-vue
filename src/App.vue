<template>
  <div id="app">

    <router-view/>

    <footer-nav></footer-nav>

  </div>
</template>

<script>

  import FooterNav from './components/Footer-nav.vue';

  export default {
    name: 'App',
    components:{
        FooterNav
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
  *{
    margin:0;
    padding:0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
</style>
