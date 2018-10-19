<template>
    <div class="kindList">
        <ul>
          <li v-for="(kindList, index) in kindLists">
            <img :src=" kindList.image_hash | imgPath " alt="">
            <span>
              {{ kindList.name }}
            </span>
          </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                kindLists:[]
            }
        },
        mounted(){
//          https://h5.ele.me/restapi/shopping/openapi/entries?latitude=34.728288&longitude=113.751266&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5

          axios.get('/h5/restapi/shopping/openapi/entries', {
              params:{
                latitude:34.728288,
                longitude:113.751266,
                templates:['main_template', 'favourable_template', 'svip_template'],
                terminal:'h5'
              }
          }).then( (val) =>{
//              console.log(val.data);
              this.kindLists = val.data[0].entries;
//              console.log( this.kindLists );
          }).catch( (err) => {
              console.log(err);
          })

        }
    }
</script>

<style scoped>

</style>
