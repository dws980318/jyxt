<template>
  <div id="complaint">
    <div class="complaint-heared">
      <div>
        <div class="line">
          <i class="el-icon-warning"></i>设置负责每个学校招聘的的管理人员，便于接收对应学校的生源、就业招聘信息；扫码关联管理员微信号，每个学校最多设置5名管理人员。
        </div>
      </div>
    </div>
    <div class="complaint-title flex-bt">
      <div class="complaint-title-content">
        <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item class="w90" label="单位名称" prop="name">
            <el-input class="w-30" v-model="ruleForm.input" placeholder="快速查询"></el-input>
          </el-form-item>
        </el-form>
        <el-button class="mar-left" type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </div>
    <div class="complaint bg border">
      <div class="box-title border-b">关联学校</div>
      <div class="complaint-content">
        <div class="administration">
          <ul class="complaint-content-title">
            <li class="w-title">学校名称</li>
            <li class="w-foot">绑定人员</li>
            <li class="w-title">操作</li>
          </ul>
           <ul class="complaint-content-title padding">
            <li class="w-title flex-c"><img src="@/common/images/company/u96.png" alt=""> <h3>学校名称</h3></li>
            <li class="w-foot">
              <h1 class="foot-title">尚未绑定管理员微信</h1>
              <div class="text-size">当前学校已开通招聘信息通知、提醒和签到等微信服务功能。点击右侧按钮，完成以下关注和绑定管理员操作</div>
            </li>
            <li class="w-title flex-center">
              <el-button @click="dialogVisible=true" type="success">微信绑定指引</el-button>
            </li>
          </ul>
        </div>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          ></el-pagination>
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
                    src="@/common/images/company/ewm.png"
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
                    src="@/common/images/company/ewm.png"
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      ruleForm: {
        input: ""
      },
      dialogVisible: false,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped>
#complaint {
  margin: 20px;
}
.text-size {
  font-size: 15px;
}
.foot-title {
  color: red;
  line-height: 50px;
}
.flex-c {
  display: flex;
  align-items: center;
}
.padding {
  padding: 30px 0;
}
.mar-left {
  margin-left: 10px;
}
.line {
  line-height: 30px;
}
.complaint-title-content {
  display: flex;
  height: 40px;
  overflow: hidden;
}
.complaint-content-title {
  min-height: 50px;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #999;
}
.complaint-heared {
  width: 100%;
  min-height: 50px;
  display: flex;
  color: #fff;
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 14px;
  background-color: rgb(8, 189, 189);
}
.w-title {
  width: 20%;
}
.w-foot {
  width: 60%;
}
.block {
  height: 100px;
  display: flex;
  align-items: center;
}
.flex-bt {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-tabs__nav-scroll {
  border-bottom: 1px solid #999;
}
.complaint-content {
  padding: 20px;
}
.complaint-title {
  height: 80px;
  line-height: 50px;
  margin: 0 0 30px 0;
  background-color: aquamarine;
  border-left: 5px solid green;
}


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
  background-image: url("../../../../common/images/company/phone.png");
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
</style>
