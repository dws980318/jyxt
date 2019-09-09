<template>
  <div class="investigation bg">
    <div class="investigation-title border-b flex-bt">
      <div>所有测评</div>
      <div class="investigation-title-content">
        <el-input class="w-30" v-model="input" placeholder="快速查询"></el-input>
        <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
      </div>
    </div>
    <div class="investigation-content">
      <ul class="investigation-content-title">
        <li class="w-foot">
          <div class="table-left">性格测试</div>
          </li>
        <li class="w-45">霍兰德职业兴趣</li>
        <li class="w-15">
          <div>测评题量：<span>48</span>题</div>
          <div>测评时间：<span>20</span>分钟</div>
        </li>
        <li class="w-15">
          <div>我的完成时间</div>
          <div>尚未参加测评</div>
        </li>
        <li class="w-content">
          <span class="add"><i class="el-icon-plus"></i> </span>
          <el-button type="success">更多操作<i class="el-icon-caret-bottom"></i> </el-button>
        </li>
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
.add {
  display: inline-block;
  padding: 5px;
  background-color: deepskyblue;
  margin-right: 5px;
  color: #fff;
}
.investigation-title-content {
  display: flex;
  height: 40px;
  align-items: center;
  overflow: hidden;
}
.w-15 span {
  color: red;
}
.table-left {
  width: 100px;
  margin: 0 auto;
  color: #fff;
  background-color: orange;
  padding: 5px;
  text-align: center
}
.investigation-content-title {
  height: 100px;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #999;
}
.investigation-content-title li{
 /* border: 1px solid black; */
}
.w-title {
  width: 22%;
}
.w-content {
  width: 20%;
}
.w-45 {
  padding-left: 30px;
  width: 40%;
  font-size: 20px;
  color: #333;
  font-weight: bold;
}
.w-30 {
  width: 300px;
}
.w-15 {
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
.investigation-title {
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
}
</style>
