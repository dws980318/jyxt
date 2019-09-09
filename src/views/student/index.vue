<template>
  <div id="index">
    <div class="index_container">
      <div class="index-remind">
        <div class="index-remind-one flex-between border bg">
          <div>提醒</div>
          <div class="remind-icon">
            <i class="el-icon-arrow-up"></i>
            <i class="el-icon-setting"></i>
            <i class="el-icon-close"></i>
          </div>
        </div>
        <div class="index-remind-content bg">
          <p>最近没有提醒内容</p>
        </div>
        <div class="index-remind-success bg">
          <div class="index-remind-one flex-between border-n bg">
            <div>提醒</div>
            <div class="remind-icon">
              <i class="el-icon-arrow-up"></i>
              <i class="el-icon-setting"></i>
              <i class="el-icon-close"></i>
            </div>
          </div>
          <div class="index-remind-table">
            <p>你已有六个月没修改密码，请修改登陆密码</p>
            <div class="time">
              <i class="el-icon-time"></i>
              <span>12:05</span>
            </div>
          </div>
          <div class="index-remind-table">
            <p>你已有六个月没修改密码，请修改登陆密码</p>
            <div class="time">
              <i class="el-icon-time"></i>
              <span>12:05</span>
            </div>
          </div>
          <div class="index-remind-table">
            <p>你已有六个月没修改密码，请修改登陆密码</p>
            <div class="time">
              <i class="el-icon-time"></i>
              <span>12:05</span>
            </div>
          </div>
        </div>
      </div>
      <div class="index-otice">
        <div class="index-remind-one flex-between border bg">
          <div>今晚活动预告</div>
          <div class="remind-icon">
            <i class="el-icon-arrow-up"></i>
            <i class="el-icon-setting"></i>
            <i class="el-icon-close"></i>
          </div>
        </div>
        <div class="active-imformation border bg">
          <div class="active-imformation-list">
            <div class="imformation-list-left">
              <div class="active-icon">
                <i class="el-icon-time"></i>
              </div>
              <div class="active-time">12-27&nbsp;16:30</div>
            </div>
            <div class="imformation-list-right">
              <div class="active-school">茂名职业技术学院2019年招聘会</div>
              <div class="adress">
                <i class="el-icon-location-outline"></i>
                <span>大学城南城</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="index-imformation">
        <div class="index-remind-one flex-between border-b bg">
          <div>消息设置</div>
          <div class="remind-icon">
            <i class="el-icon-arrow-up"></i>
            <i class="el-icon-setting"></i>
            <i class="el-icon-close"></i>
          </div>
        </div>
        <div class="index-imformation-content bg">
          <div class="imformation-content-hear border-b flex-between">
            <div>预订宣讲会</div>
            <div>
              <el-radio v-model="radio" label="1">开启</el-radio>
              <el-radio v-model="radio" label="2">关闭</el-radio>
            </div>
          </div>
          <div class="footer">
            <div class="imformation-content-footer">
              <div class="content-footer-title">
                <p>设置预览信息的好处？</p>
                <p>设置预览信息的好处？</p>
                <p>点击开通没有接受到信息？</p>
              </div>
              <div class="steplist">
                <div class="steplist-left">
                  <el-steps direction="vertical" :active="1">
                    <el-step></el-step>
                    <el-step></el-step>
                    <el-step></el-step>
                  </el-steps>
                </div>
                <div class="steplist-right">
                  <div class="steplist-top">
                    <div class="icon-left"></div>
                    <div class="steplist-one bg">
                      <p>关注学校就业公众号</p>
                      <div class="cord">
                        <img src="../../common/images/student/card.png" alt />
                      </div>
                    </div>
                  </div>
                  <div class="steplist-top">
                    <div class="icon-left"></div>
                    <div class="steplist-two bg">
                      <p>学生中心绑定学生学号</p>
                      <div class="cord">
                        <img src="../../common/images/student/xszx.png" alt />
                      </div>
                    </div>
                  </div>
                  <div class="steplist-top">
                    <div class="icon-left"></div>
                    <div class="steplist-two bg">
                      <p>开启预订信息推送</p>
                      <div @click="sessionAction" class="cord">
                        <img src="../../common/images/student/ts.png" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="footer-all bg flex-between">
      <div>当前时间：2018年12月20日 10：20：31</div>
      <div>©  2015-2018 JOBSYS.CN</div>
    </div>-->
  </div>
</template>

<script>
import "../../common/css/student/style.css";
export default {
  name: "Index",
  data() {
    return {
      radio: "2"
    };
  },
  created() {
    // this.sessionAction();
  },
  methods: {
    sessionAction() {
      this.api
        .session()
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style scoped>
#index {
  padding: 20px 12px 0 12px;
}
.index_container {
  display: flex;
  justify-content: space-around;
}
.footer {
  border: 1px solid #fff;
}
.footer-all {
  width: 97%;
  margin: 0 auto;
  height: 50px;
  margin-top: 30px;
  padding: 0 20px;
}
.icon-left {
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-right-color: #fff;
}
.steplist-top {
  height: 240px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.steplist-one {
  width: 95%;
  height: 160px;
  padding: 0 10px;
}
.steplist-two {
  width: 95%;
  height: 200px;
  padding: 0 10px;
}
.steplist-one p {
  font-size: 14px;
}
.steplist-two .cord {
  height: 150px;
  width: auto;
  overflow: hidden;
}
.steplist-one .cord {
  height: 120px;
  width: auto;
  overflow: hidden;
}
.steplist-one .cord img,
.steplist-two .cord img {
  height: 100%;
}
.steplist-left {
  height: 500px;
}
.steplist-right {
  width: 100%;
  height: 700px;
}
.steplist {
  height: 700px;
  margin: 30px 0;
  display: flex;
}
.content-footer-title p {
  font-size: 14px;
}
.imformation-content-hear {
  padding: 0 20px;
  height: 50px;
}
.imformation-content-footer p {
  line-height: 30px;
}
.imformation-content-footer {
  width: 94%;
  margin: 20px auto;
  min-height: 300px;
  padding: 10px;
  background-color: #e4e4e4;
}
.index-imformation {
  border: 1px solid #999;
}
.border-b {
  border-bottom: 1px solid #999;
}
.el-main {
  background-color: #e4e4e4;
}
.active-school {
  padding: 10px;
  height: 50px;
}
.adress {
  padding: 10px;
}
.active-icon {
  text-align: right;
}
.active-icon i {
  padding: 5px;
}
.active-time {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.imformation-list-left {
  width: 30%;
  height: 100px;
}
.imformation-list-right {
  border-top: 1px solid #999;
  border-left: 1px solid #999;
  width: 70%;
  height: 100px;
}
.active-imformation-list {
  display: flex;
}
.active-imformation {
  margin-top: 10px;
  padding: 10px;
}
.index-remind-table:last-child {
  border: none;
}
.index-remind-table p {
  line-height: 30px;
  color: dodgerblue;
  font-size: 16px;
}
.index-remind-table .time {
  color: #999;
  font-size: 14px;
}
.index-remind-success {
  margin-top: 20px;
  border: 1px solid #999;
}
.index-remind-table {
  width: 98%;
  margin: 0 auto;
  padding: 20px 10px;
  border-bottom: 1px solid #999;
}

.index-remind-content {
  border: 1px solid #999;
  border-top: none;
  padding: 10px;
}
.border-n {
  border: none;
  border-bottom: 1px solid #999;
}
.border {
  border: 1px solid #999;
}
.remind-icon i {
  color: #999;
  padding: 0 5px;
}
.border-r {
  border: 1px solid red;
}
.flex-around {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.index-remind,
.index-otice,
.index-imformation {
  width: 32%;
  min-height: 500px;
}
.index-remind-one {
  padding: 10px;
}
</style>
