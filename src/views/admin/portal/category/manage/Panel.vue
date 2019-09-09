<template>
  <el-col :span="24" class="tab_card">
    <div class="tab_list">
      <div class="tab_item" v-for="(item, index) in tabList" :key="index" :class="item.path === historyActive?'active':''" @click="tabClick(item.path)">{{item.name}}</div>
    </div>
    <div class="paddingTop20">
      <router-view v-loading="loading"></router-view>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'Panel',
  data () {
    return {
      loading: false,
      tabList: [
        {
          name: '就业新闻',
          path: '/portal/category/manage/news'
        },
        {
          name: '就业指导',
          path: '/portal/category/manage/employment'
        },
        {
          name: '就业活动',
          path: '/portal/category/manage/activity'
        },
        {
          name: '招聘信息',
          path: '/portal/category/manage/information'
        },
        {
          name: '政策法规',
          path: '/portal/category/manage/policy'
        },
        {
          name: '资料下载',
          path: '/portal/category/manage/data'
        },
        {
          name: '专业介绍',
          path: '/portal/category/manage/specialty'
        }
      ],
      historyActive: '/portal/category/manage/news'
    }
  },
  watch: {
  },
  methods: {
    tabClick (tab) {
      if (this.historyActive === tab) {
        return false
      } else {
        this.loading = true
        this.historyActive = tab
        this.$router.push(tab)
        setTimeout(() => {
          this.loading = false
        }, 1000)
      }
    }
  }
}
</script>

<style scoped>
  .paddingTop20{
    padding-top: 20px;
  }
  .tab_card{
    padding: 20px 0;
  }
  .tab_list{
    position: relative;
    width: 100%;
    height: 35px;
    font-size: 0;
  }
  .tab_list:after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #0d8e52;
  }
  .tab_item{
    cursor: pointer;
    position: relative;
    z-index: 1;
    display: inline-block;
    width: auto;
    height: 35px;
    margin-right: 1px;
    line-height: 35px;
    padding: 0 20px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-size: 14px;
    border: 1px solid #0d8e52;
    background: #0d8e52;
    color: #fff;
  }
  .tab_item.active{
    border-bottom-color: #ffffff;
    background: #ffffff;
    color: #0d8e52;
  }
</style>
