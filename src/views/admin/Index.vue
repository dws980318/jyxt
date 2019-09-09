<template>
  <div class="index_container">
    <div class="function">
      <div class="function_item" v-for="(item, index) in function_list" :key="index">
        <div class="img_box" :style="{ backgroundColor: item.background }">
          <img :src="item.img" alt="">
        </div>
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import newsImg from '@/common/images/admin/news.png'
import activityImg from '@/common/images/admin/activity.png'
import briefImg from '@/common/images/admin/brief.png'
import policyImg from '@/common/images/admin/policy.png'
import informationImg from '@/common/images/admin/information.png'

export default {
  name: 'Index',
  data () {
    return {
      function_list: [
        {
          img: newsImg,
          title: '最新就业新闻',
          background: '#23C6C8',
          path: ''
        },
        {
          img: activityImg,
          title: '最新就业活动',
          background: '#CC9966',
          path: ''
        },
        {
          img: briefImg,
          title: '最新招聘信息',
          background: '#FD9866',
          path: ''
        },
        {
          img: policyImg,
          title: '最新政策法规',
          background: '#0066CC',
          path: ''
        },
        {
          img: informationImg,
          title: '最新资料上传',
          background: '#64B559',
          path: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
  .index_container{
    width: 100%;
    height: auto;
  }
  .function{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
  }
  .function_item{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 28%;
    height: 200px;
    margin-top: 30px;
    margin-left: 2%;
    margin-right: 2%;
    background: #ebebeb;
    box-shadow: 3px 3px 12px #d0d0d0;
    border-radius: 10px;
  }
  .function_item:nth-of-type(3n+1){
    margin-left: 4%;
    margin-right: 2%;
  }
  .function_item:nth-of-type(3n){
    margin-left: 2%;
    margin-right: 4%;
  }
  .function_item .img_box{
    position: relative;
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #000000;
  }
  .function_item .img_box img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 50px;
    height: auto;
    margin: auto;
  }
  .function_item p{
    margin-top: 5px;
    font-size: 18px;
    color: #333333;
    line-height: 30px;
    font-weight: 600;
  }
</style>
