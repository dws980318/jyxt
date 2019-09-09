<template>
  <div id="complaint">
    <div class="complaint-heared">
      <div class="complaint-heared-left"></div>
      <el-button type="primary">新增投诉与建议</el-button>
    </div>
    <div class="complaint bg">
      <div class="complaint-title border-b flex-bt">
        <div>我的投诉与建议</div>
        <div class="complaint-title-content">
          <el-input class="w-30" v-model="input" placeholder="快速查询"></el-input>
          <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
        </div>
      </div>
      <div class="complaint-content">
        <ul class="complaint-content-title">
          <li class="w-title">问题标题</li>
          <li class="w-title">问题内容</li>
          <li class="w-title">提交时间</li>
          <li class="w-title">回复时间</li>
          <li class="w-foot">操作</li>
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
import '../../../common/css/student/style.css';
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
.complaint-title-content {
  display: flex;
  height: 40px;
  align-items: center;
  overflow: hidden;
}
.complaint-heared-left {
  height: 100%;
  width: 5px;
  margin-right: 20px;
  background-color: green;
}
.complaint-content-title {
  height: 50px;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #999;
}
.complaint-heared {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: #fff;
  margin-bottom: 20px;
  background-color: aquamarine;
}
.w-title {
  width: 22%;
}
.w-foot {
  width: 12%;
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
 #complaint {
  margin: 20px;
}
 .complaint {
  border: 1px solid #999;
}
.border-b {
  border-bottom: 1px solid #999;
}
.bg {
  background-color: #fff;
}
.complaint-title {
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
}
</style>
