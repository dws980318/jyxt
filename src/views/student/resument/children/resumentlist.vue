<template>
  <div id="resume">
    <div class="personal-resume bg">
      <div class="resume-title border-b flex-bt">
        <div>所有简历</div>
        <div class="resume-title-content">
          <el-input class="w-30" placeholder="快速查询"></el-input>
          <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
          <el-button type="primary" icon="el-icon-search">创建新简历</el-button>
        </div>
      </div>
      <div class="resume-table">
        <el-table
          ref="multipleTable"
          v-loading="loading"
          :data="list"
          :header-row-style="headerStyle"
          tooltip-effect="dark"
          size="small"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="40"></el-table-column>
          <el-table-column label="id" prop="id" min-width="40"></el-table-column>
          <el-table-column label="姓名" prop="name" min-width="40"></el-table-column>
          <el-table-column align="center" prop="create_time" label="时间" show-overflow-tooltip></el-table-column>
          <el-table-column align="center" label="进度" show-overflow-tooltip>
            <!-- <template slot-scope="scope">
             <el-progress :percentage="scope.row.percentage"></el-progress>
            </template>-->
          </el-table-column>
          <!-- <el-table-column align="center" prop="deletion" label="浏览" width="120"></el-table-column>
          <el-table-column align="center" prop="deletion" label="收藏" width="120"></el-table-column>
          <el-table-column align="center" prop="deletion" label="下载" width="120"></el-table-column>
          <el-table-column align="center" prop="deletion" label="面试邀请" width="120"></el-table-column>-->
          <el-table-column align="center" prop="deletion" label="详情" width="120">
            <template slot-scope="scope">
              <el-button type="primary" @click="addAction(scope.row.id)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="panel_pagination">
        <el-pagination
          style="text-align:center"
          background
          :current-page="pageNum"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
          :page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      headerStyle: {
        color: "#0d8e52"
      },
      loading: false,
      multipleSelection: [],
      pageSize: 20,
      pageNum: 0,
      total: 0,
      list: []
    };
  },
  watch: {
    // 监听改变页数
    handleCurrentChange(val) {
      this.pageNum = val;
      this.resumesAction();
    }
  },
  created() {
    this.resumesAction();
  },
  methods: {
    handleCurrentChange(val) {
      this.pageNum = val;
      this.resumesAction();
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.resumesAction();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    addAction(id) {
      this.$router.push("/resument/resumentlist/detail/" + id);
    },
    resumesAction() {
      this.api
        .Resumes({
          pageNum: this.pageNum,
          pageSize: this.pageSize
        })
        .then(res => {
          console.log(res);
          let newData = res.data.list.map(item => {
            return {
              id: item.id,
              name: item.name,
              percentage: item.percentage.split("%")[0],
              update_time: item.update_time,
              create_time: item.create_time
            };
          });
          this.list = newData;
          this.pageNum = res.data.pageNum;
          this.pageSize = res.data.pageSize;
          this.total = res.data.total;
        });
    }
  }
};
</script>

<style scoped>
#resume {
  padding: 20px 20px 0 20px;
}
.resume-title-content {
  height: 40px;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.footer-all {
  position: absolute;
  bottom: 0;
  width: 97%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.resume-table {
  width: 95%;
  min-height: 100px;
  margin: 0 auto;
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
  margin: 20px 0;
  border: 1px solid #999;
}
.resume-title {
  width: 100%;
  height: 50px;
  padding: 0 20px;
}

.information-heared {
  display: flex;
}
</style>