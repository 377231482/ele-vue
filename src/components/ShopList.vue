<template>
    <div class="shoplist">
      <h4>
        <small></small>
        <span> 推荐商家 </span>
        <small></small>
      </h4>
      <ul class="tab">
        <li>
          <a href="">
            综合排序
          </a>
        </li>
        <li>
          <a href="">
            距离最近
          </a>
        </li>
        <li>
          <a href="">
            品质联盟
          </a>
        </li>
        <li>
          <a href="">
            筛选
          </a>
        </li>
      </ul>
      <!-- 将重复使用的代码，放置在组件中 -->
      <main>
          <shop-show v-for="(shoplist, index) in shoplists" :key="index" :shoplist="shoplist">

          </shop-show>
      </main>
    </div>
</template>

<script>
    import axios from 'axios';
    import ShopShow from './ShopShow.vue';
    export default {
        data(){
            return {
              latitude:34.728228,
              longitude:	113.751184,
              shoplists:[],
              // 是否加载更多的条件
              loadingMore:true
            }
        },
        components:{
          ShopShow
        },
        created(){
            // 第一次请求
            this.firstGet();
            // 加载更多
//            window.onscroll = function(){}
            window.onscroll = this.loadMore;
        },
        methods:{
            firstGet:function(){
              axios.get('/ele/restapi/shopping/restaurants', {
                params:{
                  extras:['activities'],
                  geohash:'ww0vs6p4ddym',
                  latitude:this.latitude,
                  limit:24,
                  longitude:	this.longitude,
                  offset:	0,
                  terminal:'web',
                }
              }).then( (val) => {
//                console.log(val.data);
                this.shoplists = val.data;

              }).catch( (err) => {
                console.log(err);
              })

//              this.sendReq().then(function(){}).catch(function(){})


            },
            loadMore:function(){
              console.log('滚动了');

              // 得到下一组数组的条件：
              //内容高度 - 20 、屏幕高度、滚动偏移量
              let contentHeight = document.body.clientHeight;
              let windowH = window.innerHeight;
              let scrollTop = document.documentElement.scrollTop;
//              console.log(scrollTop);
              if( scrollTop + windowH > contentHeight - 20 ){
//                  console.log('获取新的数据');

                  if( this.loadingMore ){
                    this.loadingMore = false;
                    axios.get('/ele/restapi/shopping/restaurants', {
                      params:{
                        extras:['activities'],
                        geohash:'ww0vsd0q8tb8',
                        latitude:this.latitude,
                        limit:24,
                        longitude:	this.longitude,
                        offset:	this.shoplists.length,
                        terminal:'web',
                      }
                    }).then( (val) => {
                        console.log('获取到数据了...');
//                console.log(val.data);
//                  this.shoplists = val.data;
                      this.shoplists = this.shoplists.concat(val.data);
                      this.loadingMore = true;

                    }).catch( (err) => {
                      console.log(err);
                    })
                  }


              }

            },
            sendReq:function(){
                return axios.get('/ele/restapi/shopping/restaurants', {
                  params:{
                    extras:['activities'],
                    geohash:'ww0vsd0q8tb8',
                    latitude:this.latitude,
                    limit:24,
                    longitude:	this.longitude,
                    offset:	0,
                    terminal:'web',
                  }
                })
            }
        }
    }

    var aaa = function(){

    }






</script>

<style scoped>

  .shoplist h4{
    font-weight:normal;
    font-size:15px;
    padding:12px 0;
  }
  .shoplist h4 small{
    display: inline-block;
    border-top:solid 1px #666;
    width:30px;
    position: relative;
    bottom:5px;
  }
  .shoplist h4 span{
    margin:0 5px;
  }

  .tab{
    overflow: hidden;
    border-bottom:solid 1px #ccc;
    background:#fff;
  }
  .tab li{
    float:left;
    font-size:13px;
    width:25%;
  }
  .tab li a{
    color:#666;
    display: block;
    padding:5px 0 10px;
  }
  .tab li a:hover{
    color:#000;
    font-weight: bold;
  }
  main{
    /*height:100vh;*/
    /*overflow: scroll;*/
    margin-bottom:50px;
  }
</style>
