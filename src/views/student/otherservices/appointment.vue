<template>
  <div class="investigation-content">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label">
            <i class="el-icon-date"></i>我的预约
          </span>
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
        </el-tab-pane>
        <el-tab-pane label="咨询师">
          <span slot="label">
            <i class="el-icon-date"></i>咨询师
          </span>
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
        </el-tab-pane>
      </el-tabs>
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
}
</style>
