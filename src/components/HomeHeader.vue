<template>
    <div class="home-top">
      <div class="location">
        <i class="fa fa-map-marker"></i>
        <span> 郑州三和金刚石有限公司 </span>
        <i class="fa fa-caret-down"></i>
      </div>
      <div class="search">
        <i class="fa fa-search"></i>
        搜索商家、商品名称
      </div>
    </div>
</template>


<script>
    export default {
        data: function () {
            return {}
        }
    }
</script>

<style scoped>
  .home-top{
    background: #1e89e0;
    color:#fff;
    font-size:14px;
    padding:6px 10px;
  }
  .location{
    text-align: left;
    cursor: pointer;
  }
  .location span{
    display: inline-block;
    margin:0 3px;
    width:140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 30px;
  }
  .location i{
    position: relative;
    bottom:10px;
  }
  .search{
    width:100%;
    background:#fff;
    color:#888;
    line-height: 35px;
    cursor: pointer;
  }
</style>
