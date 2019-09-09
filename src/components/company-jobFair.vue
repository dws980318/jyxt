<template>
  <div class="recruitmentlist border-b">
    <el-table
      :data="list"
      ref="multipleTable"
      tooltip-effect="dark"
      size="small"
      style="width: 100%"
    >
      <el-table-column type="selection" width="40"></el-table-column>
      <el-table-column label="id" prop="id" width="80"></el-table-column>
      <el-table-column width="180" prop="pm_title" label="审核状态" show-overflow-tooltip>
        <template>
          <div class="w-one">
            <div class="margin-t">未报名</div>
            <div class="margin-f">已过期</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column width="auto" prop="mc_title" label="招聘会信息" show-overflow-tooltip>
        <template slot-scope="scope">
          <div class="w-two">
            <div class="liheight">{{scope.row.mc_title}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column width="400" prop="pm_endtime" label="参会信息" show-overflow-tooltip>
        <template>
          <div class="w-four">
            <div class="liheight">
              <i class="el-icon-location"></i>
              <span>广州大学</span>
            </div>
            <div class="liheight">
              <i class="el-icon-location"></i> 大学教室11.2馆
            </div>
            <div class="liheight">
              开始时间：
              <span>2018-12-21 10：00</span>
            </div>
            <div class="liheight">
              结束 时间：
              <span>2018-12-21 10：00</span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column width="280" prop="id" label="步骤" show-overflow-tooltip>
        <template>
          <div style="text-align: left;">
            <div class="liheight">
              <i class="el-icon-info"></i>申请参加
            </div>
            <div class="liheight">
              <i class="el-icon-info"></i>发布职位
            </div>
            <div class="liheight">
              <i class="el-icon-info"></i>上传回执资料
            </div>
            <div class="liheight">
              <i class="el-icon-info"></i>学校审核
            </div>
            <div class="liheight">
              <i class="el-icon-info"></i>缴费
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template>
          <div style="width:12%;" class="w-one center">
            <div class="line">
              <el-button type="success">
                更新
                <i class="el-icon-caret-bottom"></i>
              </el-button>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "jobfair",
  props: {
    list: [Array]
  }
};
</script>

<style scoped>
.complaint-content {
  padding: 20px;
}
.complaint-title {
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
}
.margin-t,
.margin-f {
  width: 70px;
  height: 30px;
  overflow: hidden;
  color: #fff;
  text-align: center;
  line-height: 30px;
  margin: 10px 0;
}
.margin-t {
  margin-top: 20px;
  background-color: orange;
}
.margin-f {
  background-color: orangered;
}
.recruitment-title-content {
  display: flex;
  height: 40px;
  align-items: center;
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
.margin-t {
  margin-top: 30%;
}
.liheight2 {
  line-height: 60px;
}
.liheight {
  line-height: 40px;
}
.liheight span {
  color: red;
}
.center {
  text-align: center;
  color: dodgerblue;
}
/* .line {
  height: 100px;
  display: flex;
  align-items: center;
} */
.btn {
  padding: 5px 10px;
  color: #fff;
}
.btn-f {
  padding: 5px;
}
.recruitmentlist {
  font-size: 14px;
  padding: 20px 0;
  min-height: 100px;
  display: flex;
}
.w-8 {
  width: 8%;
}
.w-30 {
  width: 300px;
}
.w-one {
  width: 10%;
}
.w-two {
  width: 35%;
  display: flex;
  align-items: center;
}
.w-five {
  width: 15%;
}
.w-three {
  width: 30%;
}
.w-5 {
  width: 6%;
}
.w-four {
  width: 20%;
}
.el-tabs__nav-scroll {
  border-bottom: 1px solid #999;
}
.recruitment-content {
  padding: 20px;
}
.recruitment {
  margin: 20px;
  border: 1px solid #999;
}
.border-b {
  border-bottom: 1px solid #999;
}
.recruitment-title {
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
}
</style>