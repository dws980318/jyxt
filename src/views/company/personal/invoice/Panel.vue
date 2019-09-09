<template>
  <div class="personal_panel">
    <div class="company-heared">
      <div>
        <i class="el-icon-warning"></i>设置地图标记可以让应聘者更快捷地找到您单位。请拖动红色标记到您单位所在位置，或点左下边“定位”到您当前位置。
      </div>
    </div>
    <div class="person_container bg border">
      <div class="box-title border-b">
        <div>发票信息</div>
      </div>
      <router-view @getMessage="showMsg"></router-view>
    </div>
    <div class="upload-fp border bg">
      <el-button type="primary" @click="open" icon="el-icon-check">提交</el-button>
    </div>
  </div>
</template>

<script>
import "../../../../common/css/student/style.css";
export default {
  name: "Panal",
  data() {
    return {
      activeIndex: 0,
      structure: [
        {
          name: "发票信息",
          path: "/personal/invoice"
        },
        {
          name: "修改",
          path: "/personal/invoice/change"
        }
      ],
      invoiceInformation: {}
    };
  },
  watch: {
    $route: "getPath"
  },
  methods: {
  //企业发票信息提交接口
    open() {
      this.api.insertInvoiceInfo(this.invoiceInformation).then(res => {
        console.log(res);
        if (res.code === 200) {
          this.$message.success(res.inio);
        }
      });
    },
    getPath() {
      for (let i in this.structure) {
        if (this.structure[i].path === this.$route.path) {
          this.activeIndex = i;
        }
      }
    },
    showMsg(val) {
      console.log(val);
      this.invoiceInformation = val;
      this.invoiceInformation.coi_id = 1;
    }
  }
};
</script>

<style scoped>
.upload-fp {
  width: 1000px;
  margin: 20px 0;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
}
.personal_panel {
  margin: 20px;
}
.breadcrumb {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #999999;
}
.person_container {
  width: 1000px;
  height: auto;
}
</style>
