<template>
    <div class="shopshow">
      <img :src="shopshow.image_path | imgPath" alt="" class="logo">
      <div>
        <div class="shop">
           <h3>
             <router-link :to=" '/store/' + shopshow.id ">
               <strong>
                 {{ shopshow.name }}
               </strong>
             </router-link>
             <span> ··· </span>
           </h3>
            <p class="star">
              <span>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </span> &nbsp;
              <span>
                {{ shopshow.rating }}
              </span> &nbsp;
              <span>
                月售{{ shopshow.recent_order_num }}单
              </span>
            </p>
            <p class="price">
              <span>
                ￥{{ shopshow.piecewise_agent_fee.rules[0].price }}起送   |
                <template v-if="shopshow.piecewise_agent_fee.rules[0].fee !== 0">
                  配送费￥{{ shopshow.piecewise_agent_fee.rules[0].fee }}
                </template>
                <template v-else>
                  免配送费
                </template>
              </span>
              <span>
                {{ shopshow.distance | distance }} |
                {{ shopshow.order_lead_time }}分钟
              </span>

            </p>
            <p class="tag">
              <span v-for="(flavor, ins) in shopshow.flavors">
                {{ flavor.name }}
              </span>
            </p>
        </div>
        <div class="zhekou" :class="{zhekouHidden:isShow}">
          <p>
            <i class="active" @click="showActive">
              {{ shopshow.activities.length }}个活动
              <i class="fa fa-caret-down"></i>

            </i>
          </p>
          <p v-for="(activitie, ins) in activeSingle">
            <span>
              <i :class="activitie.icon_name == '首' ? 'shou' : 'jian' "> {{ activitie.icon_name }} </i>
              {{ activitie.tips }}
            </span>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                shopshow:this.shoplist,
                isShow:true
            }
        },
        props:['shoplist'],
        computed:{
            activeSingle:function(){
                // 同类活动至显示一次，减，折，首，特，保
                // 数组排重，根据元素的某个属性值进行排重
                // [{},{},{},{}]

                let activities = this.shopshow.activities;

                // 循环遍历剩下的活动
                for( var i = 0; i < activities.length; i++ ){
                    for( var j = 0; j < i; j++ ){
                        if( activities[j].icon_name === activities[i].icon_name ){
                          activities.splice(i,1);
                            i--;
                            break;
                        }
                    }
                }

                return activities;

            }
        },
        methods:{
            showActive:function(){
                this.isShow = !this.isShow;
            }
        }
    }


</script>

<style scoped>
  .shopshow{
    overflow: hidden;
    padding:15px 10px;
    border-bottom:solid 1px #eee;
  }
  .logo{
    width:50px;
    height:50px;
    border:solid 1px #ccc;
    float:left;
  }
  .shopshow > div{
    width:80%;
    /*height:100px;*/
    /*background: rgba(0,0,0,0.1);*/
    float:right;
  }
  .shop{
    font-size:12px;
    text-align: left  ;
  }
  .shop h3{
    font-size:15px;
    position: relative;
  }
  .shop h3 a{
    color:#666;
  }
  .shop h3 a:hover{
    color:red;
  }
  .shop h3 strong{
    display: inline-block;
    width:80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

  }

  .shop h3 span{
    position: absolute;
    right:0;
    top:0;
    color:#aaa;
    cursor: pointer;
  }
  .shop p{
    color:#777;
    line-height: 22px;
  }
  .shop p.star i.fa{
    color:orangered;
    font-size:10px;
  }
  .shop p.price span:last-child{
    float: right;
  }
  .shop p.tag span{
    border:solid 1px #ccc;
    /*display: inline-block;*/
    padding:0 5px;
    margin-right:5px;
  }
  .zhekou{
    font-size:12px;
    text-align: left;
    color:#777;
    border-top:solid 1px #eee;
    margin-top:10px;
    padding-top:10px;

    /*height:45px;*/
    overflow: hidden;
  }
  .zhekouHidden{
    height:51px;
  }
  .zhekou p{
    position: relative;
  }

  .zhekou p span:first-child{
    display: inline-block;
    width:70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
  .zhekou p span:first-child i{
    color:#fff;
    font-style: normal;
    margin-right:5px;
    display: inline-block;
    padding:0 3px;
    border-radius:2px;
  }
  .zhekou p span:first-child i.shou{
    background:green;

  }

  .zhekou p span:first-child i.jian{
    background: orangered;
  }
  .zhekou p:first-child{
    cursor:pointer;
  }

  .zhekou p:first-child{
    cursor: pointer;
    z-index:10;
  }
  .zhekou p i.active{
    position: absolute;
    right:0;
    font-size:10px;
    cursor: pointer;
    font-style: normal;

  }
</style>
