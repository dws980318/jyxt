<template>
  <div id="resume">
    <div class="personal-resume bg">
      <div class="resume-title border-b flex-bt">
        <div>我的个人简历</div>
        <div class="resume-title-content">
          <el-input class="w-30" v-model="input" placeholder="快速查询"></el-input>
          <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
        </div>
      </div>
      <div class="resume-table">
        <ul class="resumelist border-b">
          <li>职位信息</li>
          <li>工作性质</li>
          <li>公司信息</li>
          <li>简历信息</li>
        </ul>
        <div class="resumelist-content">查无记录</div>
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
      </div>
    </div>
     <!-- <div class="footer-all bg">
      <div>当前时间：2018年12月20日 10：20：31</div>
      <div>©  2015-2018 JOBSYS.CN</div>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  methods: {
    personal() {
      this.$router.push({path:'/personalinformation/information/setresume'});
    },
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
#resume {
  /* height: 100vh; */
  padding: 20px 20px 0 20px;
}
.resume-title-content{
  display: flex;
  align-items: center;
  height: 40px;
  overflow: hidden;
}
.footer-all {
  position:  absolute;
  bottom: 0;
  width: 97%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.block {
  width: 600px;
  margin: 30px auto;
  text-align: center;
}
.resumelist-content {
  padding: 20px 10px;
}
.resume-table {
  width: 95%;
  margin: 0 auto;
}
.resumelist {
  margin-top: 20px;
  display: flex;
}
.resumelist li {
  width: 25%;
  line-height: 40px;
}
.w-30 {
  width: 300px;
}
.border-b {
  border-bottom: 1px solid #999;
}
.flex-bt {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.personal-resume {
  margin: 30px 0;
  border: 1px solid #999;
}
.resume-title {
  width: 100%;
  height: 50px;
  padding: 5px 30px;
  overflow: hidden;
}

.information-heared {
  display: flex;
}
</style>
