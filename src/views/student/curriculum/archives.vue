<template>
  <div class="curriculum">
    <div class="curriculum-content bg border">
      <div class="curriculum-hear border-b">
        <div>就业课程列表</div>
        <div class="resume-title-content">
          <el-input class="w-30" v-model="input" placeholder="快速查询"></el-input>
          <el-button type="primary" icon="el-icon-search">搜索条件</el-button>
          <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
        </div>
      </div>
      <div class="curriculum-table border-b">
        <div class="w_20 center">大学生职业规划与创业教育</div>
        <div class="w_25">
          <div>类型：必须课</div>
          <div>学分：1</div>
          <div>总课时：16学时（数学：8学时/实践：8学时）</div>
        </div>
        <div class="w_20">
          <div>教师姓名：柯婷</div>
          <div>课表安排：第10-13（周一）</div>
          <div>教室安排：教3-103</div>
        </div>
        <div class="w_20">
          <div>平时成绩：已评分</div>
          <div>实践作业成绩：已评分</div>
          <div>期末成绩：已评分</div>
        </div>
        <div class="w_15">
          <div>
            <el-button type="primary" icon="el-icon-search">课程资料</el-button>
          </div>
          <div>
            <el-button type="primary" icon="el-icon-search">班级信息</el-button>
          </div>
          <div>
            <el-button type="primary" icon="el-icon-search">作业成绩</el-button>
          </div>
        </div>
      </div>
      <div class="curriculum-table-footer">
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

    <!-- <div class="footer-all bg">
      <div>当前时间：2018年12月20日 10：20：31</div>
      <div>©  2015-2018 JOBSYS.CN</div>
    </div>-->
  </div>
</template>

<script>
import '../../../common/css/student/style.css';
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      input: ""
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
.center {
  text-align: center;
}
.curriculum-table {
  height: 200px;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.w_20 div,
.w-15 div,
.w_25 div {
  line-height: 30px;
}
.w_15 .el-button {
  display: block;
  margin: 5px 0;
  padding: 10px 15px;
  text-align: right;
}
.w_20 {
  width: 20%;
}
.w_15 {
  text-align: center;
  width: 15%;
}
.w_25 {
  width: 25%;
}
.curriculum-table-footer {
  width: 500px;
  height: 100px;
  margin: 0 auto;
  padding: 30px 0 0 0;
}
.resume-title-content {
  height: 40px;
  align-items: center;
  overflow: hidden;
  display: flex;
}
.border {
  border: 1px solid #999;
}
.border-b {
  border-bottom: 1px solid #999;
}
.curriculum-hear {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.curriculum {
  padding: 20px;
}
.flex {
  display: flex;
  justify-content: space-around;
}
.w-50 {
  width: 500px;
}
</style>
