<template>
    <div class="bottom">
      <ul>
        <li>
          <a href="">
            <i class="fa fa-home"></i>
            首页
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa fa-eye"></i>
            发现
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa fa-file-text-o"></i>
            订单
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa fa-user-o"></i>
            我的
          </a>
        </li>
      </ul>
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
  .bottom{
    background:#fff;
    border-top:solid 1px #ccc;
    box-shadow:0 -1px 3px #ccc;
    position: fixed;
    bottom:0;
    width:100%;
  }
  .bottom ul{
    overflow: hidden;
  }
  .bottom ul li{
    width:25%;
    float:left;
  }
  .bottom ul li a{
    display: block;
    padding:7px 0;
    color:#666;
    font-size:12px;
  }
  .bottom ul li i{
    display: block;
    font-size:20px;
    margin-bottom:2px;
  }


</style>
