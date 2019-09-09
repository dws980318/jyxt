<template>
  <div id="complaint">
    <div class="complaint-heared">
      <div>
        <div class="line">
          <i class="el-icon-warning"></i>请关注您感兴趣的学校，以便直接了解这些学校的信息，发布的信息才可以转到相关学校网站。
        </div>
      </div>
    </div>
    <div class="complaint bg border">
      <div class="complaint-title border-b flex-bt">
        <div>所有学校</div>
        <div class="complaint-title-content">
          <el-input class="w-30" v-model="input" placeholder="快速查询"></el-input>
          <el-button class="mar-left" type="primary" icon="el-icon-search">搜索条件</el-button>
          <el-button type="primary" icon="el-icon-search">其他条件</el-button>
          <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
        </div>
      </div>
      <div class="complaint-content">
        <!-- <ul class="complaint-content-title">
          <li class="w-title">审核状态</li>
          <li class="w-title">宣讲会信息</li>
          <li class="w-title"></li>
          <li class="w-title"></li>
          <li class="w-foot"></li>
          <li class="w-title">时间</li>
          <li class="w-title">操作</li>
        </ul>-->
        <div class="complaint-table">
          <el-col class="border" :span="24">
            <div class="dataTable">
              <div class="dataTable_main">
                <el-table
                  ref="multipleTable"
                  :data="list"
                  tooltip-effect="dark"
                  size="small"
                  style="width: 100%"
                >
                  <el-table-column type="selection" width="40"></el-table-column>
                  <el-table-column prop="pm_title" label="状态" show-overflow-tooltip></el-table-column>
                  <el-table-column prop="pm_starttime" label="学校信息" show-overflow-tooltip></el-table-column>
                  <el-table-column prop="pm_endtime" label="我的入驻" show-overflow-tooltip></el-table-column>
                  <el-table-column align="center" label="操作" width="150">
                    <template slot-scope="scope">
                      <el-button size="mini" type="success">编辑</el-button>
                      <el-button size="mini" type="danger">撤销</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div class="panel_pagination">
                <el-pagination
                  style="text-align:center"
                  background
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :page-size="pageSize"
                  layout="prev, pager, next, jumper"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
          </el-col>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 20,
      pageNum: 0,
      total: 0,
      list: [],
      input: "",
      dialogVisible: false
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
  align-items: center;
  display: flex;
  color: #fff;
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 14px;
  background-color: rgb(8, 189, 189);
}
.complaint-heared button {
  margin-left: 20px;
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
/* .complaint-content {
  padding: 20px;
} */
.complaint-title {
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
}
.breadcrumb {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #999999;
}
.breadcrumb {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #999999;
}
.dataTable {
  width: 100%;
  height: auto;
}
.dataTable_header {
  width: 100%;
  height: 30px;
}
.dataTable_main {
  width: 100%;
  height: auto;
  padding: 0 0 20px 0;
}
.thumbnail {
  width: 120px;
  height: auto;
}
.thumbnail_big {
  width: 270px;
  height: auto;
}
.art_view {
  max-width: 600px;
  max-height: 360px;
  overflow-y: scroll;
}
.alert_panel {
  width: calc(100% - 20px);
  height: auto;
  margin: auto;
}
.el-alert {
  margin: 10px auto;
}
</style>
