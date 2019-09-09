<template>
  <div id="center">
    <!-- 左边部分 -->
    <div class="appoint_left">
      <!-- 通知栏 -->
        <div class="notice">
          <div class="tit" v-on:click="show1">
            <h2>学校通知</h2>
            <i class="el-icon-arrow-down"></i>
          </div>
          <div class="list" v-show="isShow1">
              <ul>
                <li v-for="item in notices" :key="item.value">
                  {{item.notice}}<i class="el-icon-arrow-right"></i>
                </li>
              </ul>
          </div>
        </div>
        <!-- 通知栏 -->
        <!-- 咨询列表 -->
        <div class="appointList">
          <div class="tit" v-on:click="show2">
              <h2>就业咨询</h2>
              <i class="el-icon-arrow-down"></i>
          </div>
          <div class="list" v-show="isShow2">
              <ul>
                  <li v-for="(item,index) in appoints" :key="item.value" v-show="index < num">
                      <span>{{item.name}}</span>
                      <span>{{item.subject}}</span>
                      <span>{{item.date}}</span>
                  </li>
                  <span @click="showMore">{{txt}}</span>
              </ul>
          </div>
        </div>
      <!-- 咨询列表 -->
      <!-- 代办提醒 -->
      <div class="remind">
          <div class="notice">
            <div class="tit" v-on:click="show3">
              <h2>代办提醒</h2>
              <i class="el-icon-arrow-down"></i>
            </div>
          <div class="list" v-show="isShow3">
              <ul>
                <li v-for="item in notices" :key="item.value">
                  {{item.notice}}<i class="el-icon-arrow-right"></i>
                </li>
              </ul>
          </div>
        </div>
      </div>
      <!-- 代办提醒 -->
    </div>
    <!-- 左边部分 -->

    <!-- 中间部分 -->
    <div class="appoint_center">
        <div class="tit2">
            <h2>今明大型咨询活动会场</h2>
        </div>
    </div>
    <!-- 中间部分 -->

    <!-- 右边部分 -->
    <div class="appoint_right">
        <div class="tit3">
            <h2>消息设置</h2>
            <div><i class="el-icon-arrow-up"></i>
            <img src="../../common/images/set.png">
            <i class="el-icon-close"></i></div>
        </div>
        <div class="content">
            <div>
                <span>预定宣讲会</span>
                <span>
                    <el-radio v-model="radio" label="1">开启</el-radio>
                    <el-radio v-model="radio" label="2">关闭</el-radio>
                </span>
            </div>
        </div>
    </div>
    <!-- 右边部分 -->
    <div class="footer">
        <div>
            <span>当前时间：2018年12月20日 10：20：31</span>
            <span>©  2015-2018 JOBSYS.CN</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isShow1: true,
            isShow2: true,
            isShow3: true,
            isShowAll: true,
            txt: '展示更多',
            num: 3,
            radio: "2",

            notices: [{
                value: "1",
                notice: "关于新生入学心里咨询测试发布意见"
            },
            {
                value: "2",
                notice: "国家心里咨询导师政策报考通知"
            },
            {
                value: "3",
                notice: "关于新生入学心里咨询测试发布意见"
            },
            {
                value: "4",
                notice: "国家心里咨询导师政策报考通知"
            },
            {
                value: "5",
                notice: "关于新生入学心里咨询测试发布意见"
            },
            {
                value: "6",
                notice: "国家心里咨询导师政策报考通知"
            },
            ],


            appoints: [{
                value: "1",
                name: "王毅",
                subject: "金融系",
                date: "2018-12-25",
            },
            {
                value: "2",
                name: "王毅",
                subject: "金融系",
                date: "2018-12-25",
            },
            {
                value: "3",
                name: "王毅",
                subject: "金融系",
                date: "2018-12-25",
            },
            {
                value: "4",
                name: "王毅",
                subject: "金融系",
                date: "2018-12-25",
            },
            {
                value: "5",
                name: "王毅",
                subject: "金融系",
                date: "2018-12-25",
            },
            {
                value: "6",
                name: "王毅",
                subject: "金融系",
                date: "2018-12-25",
            },
            ]
        }
    },
    methods: {
        show1() {
            this.isShow1 = !this.isShow1;
        },
        show2() {
            this.isShow2 = !this.isShow2;
        },
        show3() {
            this.isShow3 = !this.isShow3;
        },
        showMore() {
            this.isShowAll = !this.isShowAll;
            this.num = this.isShowAll? 3 : this.appoints.length;
            this.txt = this.isShowAll? '展示更多': '收起'
        }
    }
};
</script>

<style scoped>
.appoint_left,
.appoint_center,
.appoint_right{
    width: 33.3%;
}

#center {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 20px 20px;
  width: 100%;
  min-width: 1080px;
  height: 1200px;
  background-color: #e4e4e4;
}
/* 左边 */
.tit,
.tit2,
.tit3 {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  background-color: #fff;
}
.tit {
    cursor: pointer;
}
.tit h2,
.tit2 h2,
.tit3 h2 {
    display: inline-block;
    font-size: 16px;
    font-weight: normal;
}
.el-icon-arrow-down,
.el-icon-arrow-up,
.el-icon-close {
    line-height: 48px;
    cursor: pointer;
}
.list {
    border: 1px solid #c9c9c9;
    border-radius: 5px;
    background-color: #fff;
    margin-top: 3px;
}
.list ul {
    padding: 20px;
    text-align: center;
}
.list ul>span{
    font-size: 12px;
    color: #c9c9c9;
    cursor: pointer;
}
.list ul li{
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    margin-bottom: 10px;
    border-bottom: 1px solid #c9c9c9;
    cursor: pointer;
}
.list ul li i {
    float: right;
    line-height: 30px;
    margin-right: 10px;
}
.appointList,
.remind {
    margin-top: 20px;
}
.list li {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
}
.list li span:nth-of-type(3) {
    margin-right: 10px;
}
/* 左边 */

/* 中间 */
.appoint_center {
    margin-left: 20px;
    margin-right: 20px;
}
/* 中间 */

/* 右边 */
.appoint_right .tit3 img{
    width: 16px;
    height: 16px;
    margin: 15px 5px 0 5px;
    cursor: pointer;
}
.content {
    border: 1px solid #c9c9c9;
    border-top: 0;
    height: 800px;
    background-color: #fff;
    border-radius: 0 0 5px 5px;
}
.tit3 {
    border-radius: 5px 5px 0 0;
}
.content div {
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    margin: 0 20px;
    border-bottom: 1px solid #c9c9c9;
}
.content span:nth-of-type(1) {
    font-size: 20px;
    margin-left: 20px;
}
.content span:nth-of-type(2) {
    font-size: 14px;
    margin-right: 20px;
}
/* 右边 */
.footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
}
.footer div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
    border: 1px solid #c9c9c9;
    border-radius: 5px;
    background-color: #fff;
}
.footer span {
    font-size: 14px;
    color: #333;
}
</style>
