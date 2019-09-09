<template>
  <div id="complaint">
    <div class="complaint-title">
      <div class="complaint-title-content">
        <el-button @click="toAdd()" class="mar-left" type="primary">新增投诉与建议</el-button>
      </div>
    </div>
    <div class="complaint bg border">
      <div class="box-title border-b flex-bt">
        <div>我的投诉与建议</div>
        <div>
          <el-button class="mar-left" type="primary" icon="el-icon-refresh">刷新</el-button>
        </div>
      </div>
      <div class="complaint-content">
        <div class="administration">
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
            <el-table-column prop="pf_title" align="center" label="问题标题" show-overflow-tooltip></el-table-column>
            <el-table-column prop="pf_content" align="center" label="问题内容" show-overflow-tooltip></el-table-column>
            <el-table-column align="center" prop="pf_createtime" label="提交时间" show-overflow-tooltip></el-table-column>
            <el-table-column align="center" prop="pf_createtime" label="回复时间" show-overflow-tooltip></el-table-column>
            <el-table-column align="center" label="操作" width="150">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
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
      ruleForm: {
        input: ""
      },
      loading: false,
      headerStyle: {
        color: "#0d8e52"
      },
      list: [],
      pageSize: 20,
      pageNum: 0,
      total: 0,
      multipleSelection: []
    };
  },
  watch: {
    // 监听改变页数
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getList();
    }
  },
  created() {
    this.getList();
  },
  methods: {
    toAdd() {
      this.$router.push("/survey/proposal/add");
    },
    getList() {
      let pageUtil = {
        page: this.pageNum,
        strip: this.pageSize,
        relation_id: 5
      };
      this.api.seleProposalFeedbackByList(pageUtil).then(res => {
        console.log(res);
        let newData = res.data.map(item => {
          return {
            id: item.id,
            pf_content: item.pf_content,
            pf_title: item.pf_title,
            pf_createtime: item.pf_createtime
          };
        });
        console.log(newData);
        this.list = newData;
        this.total = Number(res.total);
      });
    },
      handleDelete(index, row) {
      let proposalFeedback = { id: row.id, su_id: 5227143 };
      this.api.deleProposalFeedbackById(proposalFeedback).then(res => {
        console.log(res);
        if (res.code === 200) {
          this.$message.success(res.inio);
        }
      });
      this.list.splice(index, 1);
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      console.log(this.pageNum);
      this.getList();
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getList();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<style scoped>
#complaint {
  margin: 20px;
}
.text-size {
  font-size: 15px;
}
.foot-title {
  color: red;
  line-height: 50px;
}
.flex-c {
  display: flex;
  align-items: center;
}
.padding {
  padding: 30px 0;
}
.mar-left {
  margin-left: 10px;
}
.line {
  line-height: 30px;
}
.complaint-title-content {
  display: flex;
  align-items: center;
  height: 80px;
  margin: 0 30px;
  overflow: hidden;
}
.complaint-content-title {
  min-height: 50px;
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
  width: 20%;
}
.w-foot {
  width: 60%;
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
.complaint-title {
  height: 80px;
  line-height: 50px;
  margin: 0 0 30px 0;
  background-color: aquamarine;
  border-left: 5px solid green;
}
</style>
