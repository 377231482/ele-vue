<template>
    <div class="store fixed "  >
       <header class="store-top">
         <i class="fa fa-angle-left"></i>
         <img :src=" shop.image_path | imgPath " alt="" class="logo">
       </header>
       <div class="title">
          <h2>
            {{ shop.name }}
            <i class="fa fa-caret-right"></i>
          </h2>
          <p class="sell">
            <span>
              评价{{ shop.rating }}
            </span>
            <span>
              月售{{ shop.recent_order_num }}单
            </span>
            <span>
              蜂鸟转送约{{  shop.order_lead_time }}分钟
            </span>
          </p>
          <p class="zhekou">
            <span>
              {{ shop.activities[0].icon_name }}
            </span>
            <span>
              {{ shop.activities[0].name }}
            </span>
            <span>
              {{ shop.activities.length }}个优惠
            </span>
          </p>
          <p class="gao">
            {{ shop.promotion_info }}
          </p>
       </div>

        <ul class="menu" >
          <li :class="{ active:tab === 'CheckMenu' }" @click="tab='CheckMenu'">
            <span>
              点餐
            </span>
          </li>
          <li :class="{ active:tab === 'CommentMenu' }"  @click="tab='CommentMenu'">
            <span> 评价 </span>
          </li>
          <li :class="{ active:tab === 'StoreMenu' }"   @click="tab='StoreMenu'">
            <span> 商家 </span>
          </li>
        </ul>
        <keep-alive>
          <component :is="tab" :tuijian="tuijian" :list="lists"></component>
        </keep-alive>

    </div>
</template>

<script>
    import axios from 'axios';
    import data from '../data';
    import CheckMenu from '../components/CheckMenu.vue';
    import CommentMenu from '../components/CommentMenu.vue';
    import StoreMenu from '../components/StoreMenu.vue';

    export default {
        data: function () {
            return {
              lists:data.menu,
              shop:data.rst,
              tab:'CheckMenu',
              tuijian:data.recommend[0],
              isShow:false
            }
        },
        components:{
          CheckMenu,
          CommentMenu,
          StoreMenu
        },
        mounted(){
//          https://www.ele.me/restapi/shopping/v2/menu?restaurant_id=161168904&terminal=web
//          let id = this.$route.params.id;
//          console.log(id);
//
//          axios.get('/ele/restapi/shopping/v2/menu',{
//              params:{
//                restaurant_id:id,
//                terminal:'web',
//                user_id:1845632273
//              },
//
//          } ).then( (val) => {
//
//              console.log(val);
//          }).catch( (err) => {
//              console.log(err);
//          })

//          console.log(data);

            window.onscroll = this.scrollDown;
        },
        methods:{
            scrollDown:function(){
//              console.log('滚动了');
              let scrollH = document.documentElement.scrollTop;
              let offsetH = document.querySelector('ul.menu').offsetTop;
//              console.log( scrollH );
//              console.log( offsetH ) ;

              if( scrollH > offsetH - 40 ){
                  this.isShow = true;
              } else {
                  this.isShow = false;
              }
            }
        }
    }



//    https://www.ele.me/restapi/shopping/v2/menu?restaurant_id=157796882&terminal=web&user_id=1234567


</script>

<style scoped>
  .store{
    padding-bottom:50px;
  }
  .store-top{
    height:26.67vw;
    background:url(https://fuss10.elemecdn.com/2/db/1dc46e35ffeb38d6d10c9d00b3059png.png?imageMogr/thumbnail/750x/);
    background-position:50%;
    background-size: cover;
    background-repeat: no-repeat;
    position:relative;
  }
  .store-top i.fa{
    color:#eee;
    font-size:26px;
    left:10px;
    top:0px;
    position: absolute;
    cursor: pointer;
  }
  .store-top .logo{
    width:64px;
    height:64px;
    position: absolute;
    left:calc(50% - 32px);
    bottom:-15px;
    border:solid 1px #eee;
    border-radius:5px;
  }
  .title{
    padding:30px 30px 15px;
    text-align: center;
  }
  .title h2{
    font-size: 19px;
    font-weight: 700;
    white-space: nowrap;
    position: relative;
    padding-right: .266667rem;
  }
  .title p.sell{
    font-size:10px;
    line-height: 22px;
  }
  .title p.sell span{
    margin-right:8px;
  }
  .title .zhekou{
    font-size:10px;
    text-align: left;
    position: relative;
    padding:5px 0;
  }
  .title .zhekou span:first-child{
    background:orangered;
    color:#fff;
    display: inline-block;
    padding:1px 3px;
    border-radius: 3px;
  }
  .title .zhekou span:last-child{
    position: absolute;
    right:0;
  }
  .title .gao{
    font-size:10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color:#888;
  }
  .menu{
    overflow: hidden;
    border-bottom:solid 1px #eee;
  }
  .menu li{
    float: left;
    width:33.33%;
    font-size:14px;
  }
  .menu li span{
    display: inline-block;
    line-height: 40px;
  }
  .menu li.active span{
    border-bottom:solid 1px green;
  }

</style>
