<template>
  <div id="complaint">
    <div class="complaint-heared">
      <i class="el-icon-warning"></i>
      <div class="line">查看应聘者简历</div>
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
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
          <!-- <ul class="complaint-content-title">
          <li class="w-title center">审核状态</li>
          <li class="w-title center">宣讲会信息</li>
          <li class="w-title"></li>
          <li class="w-title center">参会信息</li>
          <li class="w-foot"></li>
          <li class="w-title center">步骤</li>
          <li class="w-title center">操作</li>
          </ul>-->
          <el-tab-pane label="所有招聘会" name="first">
            <Jobfair :list="list"></Jobfair>
          </el-tab-pane>
          <el-tab-pane label="正在报名" name="second">
            <Jobfair :list="list"></Jobfair>
          </el-tab-pane>
          <el-tab-pane label="已报名" name="third">
            <Jobfair :list="list"></Jobfair>
          </el-tab-pane>
          <el-tab-pane label="已过期" name="fourth">
            <Jobfair :list="list"></Jobfair>
          </el-tab-pane>
        </el-tabs>

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
// import "../../../common/css/student/style.css";
import Jobfair from "@/components/company-jobFair";
export default {
  components: {
    Jobfair
  },
  data() {
    return {
      input: "",
      pageSize: 20,
      pageNum: 1,
      total: 0,
      activeName: "first",
      list: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      if (tab.label === "所有招聘会") {
        this.getList();
      }
      if (tab.label === "正在报名") {
        let pageUtil = {
          // page: this.pageNum,
          // strip: this.pageSize,
          lonTime: "2019-09-04 13:36:09"
        };
        this.getList(pageUtil);
      }
       if (tab.label === "已报名") {
        this.getList1();
      }
      if (tab.label === "已过期") {
        let pageUtil = {
          // page: this.pageNum,
          // strip: this.pageSize,
          outtime: "2019-09-04 13:36:09"
        };
        this.getList(pageUtil);
      }
    },
    getList(pageUtil) {
      // let pageUtil = {
      //   page: this.pageNum,
      //   strip: this.pageSize
      // };
      this.api.selectMeetConferenceByList(pageUtil).then(res => {
        console.log(res);
        let newData = res.data.map(item => {
          return {
            id: item.id,
            mc_title: item.mc_title,
            mc_companynum: item.mc_companynum,
            mc_field: item.mc_field,
            mc_invitation: item.mc_invitation,
            mc_poster: item.mc_poster,
            mc_relationway: item.mc_relationway,
            mc_signendtime: item.mc_signendtime
          };
        });
        console.log(newData);
        this.list = newData;
        this.total = Number(res.total);
      });
    },
    getList1() {
      let pageUtil = {
        page: this.pageNum,
        strip: this.pageSize
      };
      this.api.selectMeetconferSigncomByList(pageUtil).then(res => {
        console.log(res);
        let newData = res.data.map(item => {
          return {
            id: item.id,
            mc_title: item.mc_title,
            mc_companynum: item.mc_companynum,
            mc_field: item.mc_field,
            mc_invitation: item.mc_invitation,
            mc_poster: item.mc_poster,
            mc_relationway: item.mc_relationway,
            mc_signendtime: item.mc_signendtime
          };
        });
        console.log(newData);
        this.list = newData;
        this.total = Number(res.total);
      });
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
  width: 20%;
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
