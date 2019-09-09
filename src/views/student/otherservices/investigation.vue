<template>
  <div class="investigation bg">
    <div class="investigation-title border-b flex-bt">
      <div>所有问卷</div>
      <div class="investigation-title-content">
        <el-input class="w-30" v-model="input" placeholder="快速查询"></el-input>
        <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
      </div>
    </div>
    <div class="investigation-content">
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
.investigation-title-content {
  display: flex;
  height: 40px;
  align-items: center;
  overflow: hidden;
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
.investigation-content {
  padding: 20px;
}
.investigation {
  margin: 20px;
  border: 1px solid #999;
}
.border-b {
  border-bottom: 1px solid #999;
}
.bg {
  background-color: #fff;
}
.investigation-title {
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  overflow: hidden;
}
</style>
