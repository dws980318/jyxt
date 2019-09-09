<template>
  <div id="resume">
    <div class="resume-heared">
      <el-button @click="personal" type="primary">新增个人履历</el-button>
    </div>
    <div class="personal-resume bg">
      <div class="resume-title border-b flex-bt">
        <div>我的个人简历</div>
        <div class="resume-title-content">
          <el-input class="w-30" v-model="input" placeholder="快速查询"></el-input>
          <el-button type="primary" icon="el-icon-search">搜索条件</el-button>
          <el-button type="primary" icon="el-icon-search">其他条件</el-button>
          <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
        </div>
      </div>
      <div class="resume-table">
        <div class="resumelist-content">
          <el-table :data="resumelist" style="width: 100%">
            <el-table-column prop="id" label="序号" width="100"></el-table-column>
            <el-table-column prop="title" label="标题" width="220"></el-table-column>
            <el-table-column prop="file" label="附件" width="220"></el-table-column>
            <el-table-column prop="createTime" label="提交时间"></el-table-column>
            <el-table-column prop="content" label="履历内容" width="220">
              <template slot-scope="scope">
                <el-button @click="open(scope.row.content)" size="small" type="success">查看</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="endTime" label="持续时间">
              <template slot-scope="scope">
                <el-button @click="edit(scope.row.id)" size="small" type="success">编辑</el-button>
                <el-button size="small" type="danger">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- <ul v-for="(item,index) in resumelist" :key="index" class="resumelist">
            <li>{{item.title}}</li>
            <li>附件</li>
            <li>{{item.createTime}}</li>
            <li>{{ite
            </li>
          </ul>-->
        </div>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pagenum"
            :page-size="pages"
            layout="total, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../../../common/css/student/style.css";
export default {
  data() {
    return {
      total: 0,
      pages: 15,
      pagenum: 0,
      resumelist: [
        {
          id: "",
          title: "",
          file: "",
          accessory: "",
          content: "",
          createTime: "",
          endTime: "",
          startTime: ""
        }
      ],
      input: ""
    };
  },
  created() {
    this.resume();
  },
  methods: {
    open(content) {
      this.$alert(content, "履历内容", {
        confirmButtonText: "确定",
        callback: action => {}
      });
    },
    resume() {
      this.api
        .Personalresume()
        .then(res => {
          console.log(res);
          this.resumelist = res.data.list;
          this.total = res.data.total;
          this.pages = res.data.pageSize;
          this.pagenum = res.data.pageNum;
          console.log(this.pages);
        })
        .catch(err => {
          console.log(err);
        });
    },
    edit(personalid) {
      this.$router.push({
        path: "/personalinformation/information/setresume/" + personalid
      });
    },
    personal() {
      this.$router.push({ path: "/personalinformation/information/setresume" });
    },
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
#resume {
  /* height: 100vh; */
  padding: 20px 20px 0 20px;
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
.block {
  width: 600px;
  margin: 30px auto;
  text-align: center;
}
.resumelist-content {
  padding: 20px 10px;
}
.resume-table {
  width: 95%;
  margin: 0 auto;
}
.resumelist {
  margin-top: 20px;
  display: flex;
}
.resumelist li {
  width: 20%;
  line-height: 40px;
}
.resume-title-content {
  display: flex;
  height: 40px;
  align-items: center;
  overflow: hidden;
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
  margin: 30px 0;
  border: 1px solid #999;
}
.resume-title {
  width: 100%;
  height: 50px;
  padding: 0 30px;
}

.information-heared {
  display: flex;
}
.resume-heared {
  width: 100%;
  height: 60px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  background-color: aquamarine;
}
</style>
