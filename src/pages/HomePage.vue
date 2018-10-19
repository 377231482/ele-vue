<template>
  <div>
      <home-header></home-header>
      <!-- 分类 -->
      <!--<kind-list></kind-list>-->
      <!-- 推荐商家 -->
      <shop-list></shop-list>
  </div>
</template>

<script>
  import axios from 'axios';

  import HomeHeader from '../components/HomeHeader.vue';
  import ShopList from '../components/ShopList.vue';
  import KindList from '../components/KindList.vue';

  export default {
      data:function(){
          return {

          }
      },
      components:{
          HomeHeader,
          ShopList,
          KindList
      },
      mounted:function(){
//          console.log('即将发送请求获取商家信息');
//          axios.get('/ele/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=ww0vsd0q8tb8&latitude=34.72893&limit=24&longitude=113.752807&offset=0&terminal=web').then(function(val){
//              console.log(val);
//          }).catch(function(err){
//              console.log(err);
//          })

//          axios.get('/ele/restapi/shopping/restaurants', {
//              params:{
//                  extras:['activities'],
//                  geohash:'ww0vsd0q8tb8',
//                  latitude:'34.72893',
//                  limit:24,
//                  longitude:'113.752807',
//                  offset:0,
//                  terminal:'web'
//              }
//          }).then(function(val){
//              console.log(val);
//          }).catch(function(err){
//              console.log(err);
//          })
      }
  }
</script>


<style scoped>

</style>
