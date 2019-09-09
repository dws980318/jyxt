<template>
  <div id="complaint">
    <div class="complaint-heared">
      <div>
        <div class="line">
          <i class="el-icon-warning"></i> 查看应聘者的简历
        </div>
      </div>
    </div>
    <div class="complaint bg border">
      <div class="complaint-title border-b flex-bt">
        <div>所有收到的应聘简历</div>
        <div class="complaint-title-content">
          <el-input class="w-30" v-model="input" placeholder="快速查询"></el-input>
          <el-button class="mar-left" type="primary" icon="el-icon-search">搜索条件</el-button>
          <el-button type="primary" icon="el-icon-search">其他条件</el-button>
          <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
        </div>
      </div>
      <div class="complaint-content">
        <div>查无记录</div>
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
          <el-table-column align="center" prop="sr_name" label="时间" show-overflow-tooltip></el-table-column>
          <el-table-column align="center" prop="sr_name" label="简介"></el-table-column>
          <el-table-column align="center" prop="sr_username" label="状态" width="120">
            <template slot-scope="scope">
              <el-switch
                disabled
                v-model="scope.row.open"
                active-color="#13ce66"
                inactive-color="#999"
              ></el-switch>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="150">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
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
      pageNum: 1,
      total: 0,
      list: []
    };
  },
  watch: {
    // 监听改变页数
    handleCurrentChange(val) {
      this.pageNum = val;
      this.collectAction();
    }
  },
  created() {
    this.collectAction();
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      console.log(this.pageNum);
      this.collectAction();
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.collectAction();
    },
    //查询全部收藏简历列表
    collectAction() {
      let pageUtil = {
        coi_id: 1,
        page: this.pageNum,
        strip: this.pageSize
      };
      this.api.selectResumeCollectionByList(pageUtil).then(res => {
        console.log(res);
        let newData = res.data.map(item => {
          return {
            id: item.id,
            sr_name: item.sr_name,
            sr_username: item.sr_username
          };
        });
        this.list = newData;
        // this.pageNum = res.data.pageNum;
        // this.pageSize = res.data.pageSize;
        this.total = Number(res.total);
      });
    },
    //删除收藏的简历接口
    handleDelete(index, row) {
      let resumeCollection = { sr_id: row.id, coi_id: 1 };
      this.api.deleResumeCollectionBySrId(resumeCollection).then(res => {
        console.log(res);
        if (res.code === 200) {
          this.$message.success(res.inio);
        }
      });
      this.list.splice(index, 1);
    }
  }
};
</script>

<style scoped>
#complaint {
  margin: 20px;
}
.mar-left {
  margin-left: 10px;
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
