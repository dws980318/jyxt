<template>
  <div id="complaint">
    <div class="complaint-heared">
      <div>
        <div class="line">企业可以发布在线招聘职位信息，系统将会推送已入驻的学校就业中心和微信平台；（注：职位需学校先审核，通过后学生可在线投递简历应聘职位）</div>
        <div class="line">企业可以修改、暂停招聘职位；查看学校审核情况、学生应聘简历等</div>
        <div>
          <el-button type="primary">发布新职位</el-button>
        </div>
      </div>
    </div>
    <div class="complaint bg border">
      <div class="complaint-title border-b flex-bt">
        <div>职业列表</div>
        <div class="complaint-title-content">
          <el-input class="w-30" v-model="input" placeholder="快速查询"></el-input>
          <el-button class="mar-left" type="primary" icon="el-icon-search">搜索条件</el-button>
          <el-button type="primary" icon="el-icon-search">其他条件</el-button>
          <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
        </div>
      </div>
      <div class="complaint-content">
        <ul class="complaint-content-title">
          <li class="w-title">职位信息</li>
          <li class="w-title">工作性质</li>
          <li class="w-title">显示状态</li>
          <li class="w-title">学校审核信息</li>
          <li class="w-title">统计信息</li>
          <li class="w-foot">状态</li>
          <li class="w-title">操作</li>
        </ul>
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
  </div>
</template>

<script>
// import "../../../common/css/student/style.css";
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
.mar-left {
  margin-left: 10px;
}
#complaint {
  margin: 20px;
}
.line {
  line-height: 30px;
}
.complaint-title-content {
  display: flex;
  height: 40px;
  align-items: center;
  overflow: hidden;
}
.complaint-content-title {
  height: 50px;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #999;
}
.complaint-heared {
  width: 100%;
  min-height: 50px;
  display: flex;
  color: #fff;
  border-left: 5px solid green;
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 14px;
  background-color: rgb(8, 189, 189);
}
.w-title {
  width: 15%;
}
.w-foot {
  width: 10%;
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
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
}
</style>
