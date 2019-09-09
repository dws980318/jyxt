<template>
  <div class="index_container">
    <div class="index_container_top">
      <div class="bgcolor border margin-r">
        <div class="box-title border-b">
          <div>在线职位招聘</div>
        </div>
        <div class="index_container_content flex-around">
          <div @click="onlineresume" class="content-box">
            <el-button class="circular" type="success">0</el-button>
            <div>正在招聘职位</div>
          </div>
          <div class="content-box">
            <el-button class="circular" type="warning">0</el-button>
            <div>已过期职位</div>
          </div>
        </div>
      </div>
      <div class="bgcolor border margin-r">
        <div class="box-title border-b">
          <div>待处理简历</div>
        </div>
        <div class="index_container_content flex-around">
          <div @click="processed" class="content-box">
            <el-button class="circular" type="primary">0</el-button>
            <div>新增应聘简历</div>
          </div>
        </div>
      </div>
      <div class="bgcolor border">
        <div class="box-title border-b">
          <div>招聘信息</div>
        </div>
        <div class="index_container_content flex-around">
          <div @click="recruit" class="content-box">
            <el-button class="circular" type="warning">0</el-button>
            <div>招聘会</div>
          </div>
          <div class="content-box">
            <el-button class="circular" type="warning">0</el-button>
            <div>宣讲会</div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-footer-content bgcolor">
      <div class="footer-content-title">
        <h4>入驻学校</h4>
        <div
          class="title-explain"
        >用人单位选择感兴趣的学校，申请入驻该学校；入驻后可以了解该学校的相关生源信息，并可以开展发布招聘信息，申请宣讲会，参与学校的招聘会，接收学生在线投递简历等招聘工作。</div>
      </div>
      <div class="sussess">
        <div class="sussess-title">入驻学校</div>
        <div class="successful-entrylist">
          <div class="success-company bg-w border flex-around">
            <div class="success-company-left">
              <img src="~@/common/images/company/u96.png" alt />
            </div>
            <div class="success-company-conter">
              <h3 class="line">广东工业大学</h3>
              <div class="line size-r">等待审核</div>
              <div class="line">2018-12-19-14：05</div>
              <div class="line">进入主页</div>
            </div>
            <div class="success-company-riht">
              <el-button type="primary" @click="dialogVisible=true">微信绑定指引</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="unsussess">
        <div>未驻学校</div>
        <div class="successful-entrylist">
          <div class="success-company bg-w border flex-around">
            <div class="success-company-left">
              <img src="~@/common/images/company/u96.png" alt />
            </div>
            <div class="success-company-conter">
              <h3 class="line">广东工业大学</h3>
              <div class="line size-r">等待审核</div>
            </div>
            <div class="success-company-riht">
              <el-button type="success" plain>入驻</el-button>
            </div>
          </div>
          <div class="success-company bg-w border flex-around">
            <div class="success-company-left">
              <img src="~@/common/images/company/u96.png" alt />
            </div>
            <div class="success-company-conter">
              <h3 class="line">广东工业大学</h3>
              <div class="line size-r">等待审核</div>
            </div>
            <div class="success-company-riht">
              <el-button type="success" plain>入驻</el-button>
            </div>
          </div>
          <div class="success-company bg-w border flex-around">
            <div class="success-company-left">
              <img src="~@/common/images/company/u96.png" alt />
            </div>
            <div class="success-company-conter">
              <h3 class="line">广东工业大学</h3>
              <div class="line size-r">等待审核</div>
            </div>
            <div class="success-company-riht">
              <el-button type="success" plain>入驻</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="微信绑定指引" close="modal" :visible.sync="dialogVisible" width="50%">
      <div class="modal-body">
        <p
          class="text-center"
          style="color: #f8ac59"
        >尊敬的用人单位，为了方便您高效快捷的参会，我校已开通信息通知、提醒和签到等微信服务功能。敬请完善以下关注和绑定管理员操作</p>
        <div class="row">
          <div class="col-md-6 text-center">
            <h3>
              <span style="font-size:30px;color:#23c6c8;vertical-align: sub">第 1 步</span>
              关注我校微信公众号
            </h3>
            <p>了解我校生源信息，招聘活动</p>
            <div class="wechat-guide-phone">
              <div style="margin: 0 30px;padding-top:120px;">
                <div style="padding-top: 10px !important;padding-bottom: 10px !important;">
                  <img
                    src="../../../common/images/company/ewm.png"
                    style="height:131px;width:131px;"
                    alt
                  />
                </div>
                <p class="text-navy mg">广东工业大学</p>
                <p class="text-navy">微信公众号</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 text-center">
            <h3>
              <span style="font-size:30px;color:#23c6c8;vertical-align: sub">第 2 步</span>
              绑定管理员微信
            </h3>
            <p style="margin-bottom:20px;">微信端直接参会签到，填写调查问卷，减少等待时间</p>
            <div
              class="wechat-guide-phone"
              style="transform:rotate(90deg);margin:-70px auto -90px;"
            >
              <div style="margin: 0 30px;padding-top:120px;">
                <div style="padding-top: 10px !important;padding-bottom: 10px !important;">
                  <img
                    src="../../../common/images/company/ewm.png"
                    style="height:131px;width:131px;"
                    alt
                  />
                </div>
              </div>
            </div>
            <p style="margin-top:-20px;" class="text-navy">扫描绑定管理员</p>
          </div>
        </div>
        <div style="color: #888888;text-align: right;">注：对应操作需要绑定不同的入驻学校</div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      dialogVisible: false,
      one: true
    };
  },
  mounted() {
    // if (this.one) {
    //   if (localStorage.roleId) {
    //     this.dialogVisible = true;
    //   }
    // }
    setTimeout(() => {
      this.one = false;
      // if (!one) {
      //   this.dialogVisible = false;
      // }
    }, 500);
    console.log(this.one)
  },
  methods: {
    // 在线简历
    onlineresume() {
      this.$router.push({ path: "/company/home/Online" });
    },
    // 待处理简历
    processed() {
      this.$router.push({ path: "/company/home/processed" });
    },
    // 招聘简历
    recruit() {
      this.$router.push({ path: "/company/home/recruit" });
    }
  }
};
</script>

<style scoped>
.row {
  display: flex;
  /* justify-content: space-around;
  align-items: center; */
}
.text-navy {
  color: #1ab394;
}
.mg {
  margin: 0 !important;
}
.wechat-guide-phone {
  background-image: url("../../../common/images/company/phone.png");
  background-size: contain;
  width: 191px;
  height: 382px;
  margin: 0 auto;
}
.col-md-6 {
  width: 50%;
}
p {
  margin: 0 0 10px;
}
.index_container /deep/ .el-dialog {
  width: 900px;
}
.index_container /deep/ .el-dialog__header {
  text-align: center;
  padding: 30px 15px;
  border-bottom: 1px solid #e5e5e5;
}
.index_container /deep/ .el-dialog__body {
  padding: 20px 30px 30px 30px;
  background: #f8fafb;
}
.index_container /deep/ .el-dialog__header .el-dialog__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
}
.text-center {
  text-align: center;
}
.sussess {
  margin-bottom: 20px;
}
.success-company-conter .line {
  line-height: 30px;
}
.success-company-conter {
  max-width: 150px;
  overflow: hidden;
}
.success-company-left {
  width: 80px;
  height: 80px;
  overflow: hidden;
}
.success-company-left img {
  width: 100%;
}
.successful-entrylist {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
}
.success-company {
  width: 32%;
  height: 150px;
  margin: 0 2% 0 0;
}
.success-company:nth-child(3n + 3) {
  margin-right: 0;
}
.sussess-title {
  color: green;
}
.footer-content-title {
  margin-bottom: 10px;
}
.title-explain {
  font-size: 15px;
  line-height: 30px;
}
.index-footer-content {
  margin: 30px 0;
  padding: 20px;
  min-height: 500px;
}
.circular {
  width: 60px;
  height: 60px;
  padding: 0;
  border-radius: 50%;
  text-align: center;
  display: block;
  margin: 0 auto;
  font-size: 40px;
}
.index_container_content {
  height: 100px;
}
.content-box {
  width: 100px;
  height: 80px;
  text-align: center;
}
.index_container {
  width: 100%;
  margin: 20px 0;
  border: 1px solid transparent;
  min-height: 300px;
}
.margin-r {
  margin-right: 3%;
}
.index_container_top {
  display: flex;
}
.index_container_top .bgcolor {
  width: 32%;
  height: 150px;
}
</style>
