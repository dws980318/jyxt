<template>
  <div id="activity">
    <div class="personal-activity bg">
      <div class="activity-title border-b flex-bt">
        <div>项目活动列表</div>
        <div class="activity-title-content">
          <el-input class="w_30" v-model="input" placeholder="快速查询"></el-input>
          <el-button type="primary" icon="el-icon-search">搜索条件</el-button>
          <el-button type="primary" icon="el-icon-search">其他条件</el-button>
          <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
        </div>
      </div>
      <div class="activity-table">
        <div class="activitylist" v-for="(items,index) in list" :key="index">
          <div class="activity-table-list border-b">
            <div class="w50">
              <div class="line-active">{{items.name}}</div>
              <div class="line-active">审核状态：未报名</div>
            </div>
            <div class="w40">
              <div class="line-active">举办单位：{{items.sponsor}}</div>
              <div class="line-active">申请实践：{{items.startTime}}　至　{{items.endTime}}</div>
            </div>
            <div class="w10">
              <el-button type="primary" icon="el-icon-check">报名参加</el-button>
            </div>
          </div>
        </div>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-size="pageSize"
            layout="total, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>
    </div>
    <!-- <div class="footer-all bg">
      <div>当前时间：2018年12月20日 10：20：31</div>
      <div>©  2015-2018 JOBSYS.CN</div>
    </div>-->
  </div>
</template>
<script>
import "../../../common/css/student/style.css";
export default {
  data() {
    return {
      input: "",
      pageNum: 0,
      pageSize: 5,
      total: 0,

      list: []
    };
  },
  methods: {
    personal() {
      this.$router.push({
        path: "/personalinformation/information/setactivity"
      });
    },

    getList() {
      this.api.activity({
        pageNum:this.pageNum,
        pageSize:this.pageSize,
        total: this.total
      }).then(res => {
        let newData = res.data.list.map(items => {
          return {
            name: items.name,
            sponsor: items.sponsor,
            startTime: items.startTime,
            endTime: items.endTime
          };
        });
        this.list = newData;
        // this.name = res.data.list.name
        // this.sponsor = res.data.list.sponsor
        // this.startTime = res.data.list.startTime
        // this.endTime = res.data.list.endTime
        this.pageNum = res.data.pageNum;
        this.pageSize = res.data.pageSize;
        this.total = res.data.total;
      });
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getList();
    },

    handleSizeChange(val) {
      this.pageSize = val;
      this.getList();
    }
  },
  created() {
    this.getList()
  },
  watch: {
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList();
    }
  }
};
</script>

<style>
.w_30 {
  width: 300px;
}
.line-active {
  line-height: 40px;
}
.activity-table-list {
  height: 100px;
  align-items: center;
  display: flex;
  font-size: 14px;
  overflow: hidden;
}
.w50 {
  width: 50%;
}
.w40 {
  width: 35%;
}
.w10 {
  width: 15%;
  text-align: center;
}
#activity {
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
.activity-table {
  width: 95%;
  margin: 0 auto;
}
.activitylist {
  width: 100%;
  margin-top: 20px;
}
.activity-title-content {
  display: flex;
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
.personal-activity {
  margin: 30px 0;
  border: 1px solid #999;
}
.activity-title {
  width: 100%;
  height: 50px;
  padding: 0 30px;
}

.information-heared {
  display: flex;
}
</style>
