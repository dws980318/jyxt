<template>
  <div id="center">
    <!-- 左边部分 -->
    <div class="left">
      <div class="notice">
        <el-collapse v-model="activeNames">
          <el-collapse-item class="list" title="就业信息管理通知" name="1">
            <ul>
              <li
                v-for="(item,index) in notices"
                :key="item.value"
                v-show="index < num"
              >{{item.notice}}</li>
              <span @click="showMore">{{txt}}</span>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </div>

      <div class="infoList">
        <div class="infoContent">
          <div class="tit4" v-on:click="show2">
            <h2>就业报表信息</h2>
            <el-button @click="getList">筛选</el-button>
          </div>
          <div class="infoSelect">
            <el-select v-model="value1" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.cs_id"
                :label="item.time"
                :value="item.time"
              ></el-option>
            </el-select>
            <el-select v-model="value2" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.cs_id"
                :label="item.ce_name"
                :value="item.cs_id"
              ></el-option>
            </el-select>
            <el-select v-model="value3" placeholder="请选择">
              <el-option
                v-for="item in options3"
                :key="item.cs_id"
                :label="item.cs_name"
                :value="item.cs_id"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="list2">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column align="center" prop="si_name" label="姓名" width="150"></el-table-column>
            <el-table-column align="center" prop="si_sno" label="学号" width="150"></el-table-column>
            <el-table-column align="center" prop="oe_state" label="就业与否">
              <template slot-scope="scpoe">
                <div v-if="scpoe.row.oe_state === 1">已就业</div>
                <div v-else>未就业</div>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="oe_unitname" label="就业单位"></el-table-column>
            <el-table-column align="center" prop="oe_postname" label="备注信息"></el-table-column>
          </el-table>
          <div class="pagination">
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
    <!-- 左边部分 -->

    <!-- 中间部分 -->
    <div class="center">
      <div class="remind">
        <div class="notice">
          <el-collapse v-model="activeNames1">
            <el-collapse-item class="list" title="代办提醒" name="1">
              <ul>
                <li v-for="item in notices" :key="item.value">{{item.notice}}</li>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
    <!-- 中间部分 -->

    <!-- 右边部分 -->
    <div class="right">
      <div class="tit3">
        <h2>消息设置</h2>
        <div>
          <i class="el-icon-arrow-up"></i>
          <img src="../../../common/images/set.png" />
          <i class="el-icon-close"></i>
        </div>
      </div>
      <div class="content">
        <div class="content_header">
          <span>预定宣讲会</span>
          <span>
            <el-radio v-model="radio" label="1">开启</el-radio>
            <el-radio v-model="radio" label="2">关闭</el-radio>
          </span>
        </div>
        <div class="step">
          <p>设置预定信息有什么好处？</p>
          <p>接收学校就业信息，及时了解学校就业动态，政策法规，以及相关用人单位的招聘</p>
          <p>点了开通没有接收到信息</p>
          <div class="stepOn">
            <el-steps direction="vertical" :active="1">
              <el-step>
                <template slot="description">
                  <img src="../../../common/images/code.png" alt />
                </template>
              </el-step>
              <el-step>
                <template slot="description">
                  <img src="../../../common/images/code2.png" alt />
                </template>
              </el-step>
              <el-step>
                <template slot="description">
                  <img src="../../../common/images/code3.png" alt />
                </template>
              </el-step>
            </el-steps>
          </div>
        </div>
      </div>
    </div>
    <!-- 右边部分 -->
    <div class="footer">
      <div>
        <span>当前时间：2018年12月20日 10：20：31</span>
        <span>© 2015-2018 JOBSYS.CN</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      activeNames1: ["1"],
      pageSize: 10,
      pageNum: 0,
      total: 0,

      isShow1: true,
      isShow2: true,
      isShow3: true,
      isShowAll: true,
      txt: "展示更多",
      num: 5,
      radio: "2",

      notices: [
        {
          value: "1",
          notice: "就业信息将上传院的总结通知"
        },
        {
          value: "2",
          notice: "学生就业资料整理规划通知"
        },
        {
          value: "3",
          notice: "学生就业资料整理规划通知"
        },
        {
          value: "4",
          notice: "学生就业资料整理规划通知"
        },
        {
          value: "5",
          notice: "学生就业资料整理规划通知"
        },
        {
          value: "6",
          notice: "学生就业资料整理规划通知"
        }
      ],

      appoints: [
        {
          value: "1",
          name: "王毅",
          subject: "金融系",
          date: "2018-12-25"
        },
        {
          value: "2",
          name: "王毅",
          subject: "金融系",
          date: "2018-12-25"
        },
        {
          value: "3",
          name: "王毅",
          subject: "金融系",
          date: "2018-12-25"
        },
        {
          value: "4",
          name: "王毅",
          subject: "金融系",
          date: "2018-12-25"
        },
        {
          value: "5",
          name: "王毅",
          subject: "金融系",
          date: "2018-12-25"
        },
        {
          value: "6",
          name: "王毅",
          subject: "金融系",
          date: "2018-12-25"
        }
      ],

      options1: [],
      options2: [],
      options3: [],
      value1: "",
      value2: "",
      value3: "",

      tableData: []
    };
  },
  created() {
    this.getList();
    this.getOptions();
  },
  methods: {
    //查询就业指导课程列表
    getList() {
      let one = [];
      let two = "";
      let three = "";
      if (this.value1) {
        console.log(this.value1.split("-"));
        one = this.value1.split("-");
        two = one[0] + "-" + one[1];
        three = one[3] + "-" + one[4];
      }
      console.log(three);
      if (this.value1 === "") {
        two = "";
        three = "";
      }
      let pageUtil = {
        page: this.pageNum,
        strip: this.pageSize,
        lonTime: two,
        onecolumn_id: this.value2,
        twocolumn_id: this.value3,
        outTime: three
      };
      this.api.selectObtainEmploymentInioByList(pageUtil).then(res => {
        console.log(res);
        let newData = res.data.map(item => {
          return {
            si_id: item.si_id,
            si_name: item.si_name,
            si_sno: item.si_sno,
            oe_state: item.oe_state,
            oe_postname: item.oe_postname,
            oe_unitname: item.oe_unitname,
            oc_trachinghour: item.oc_trachinghour
          };
        });
        console.log(newData);
        this.tableData = newData;
        this.total = Number(res.total);
      });
    },
    //查询搜索条件
    getOptions() {
      let pageUtil = {};
      this.api.selectObtainEmploymentClassByList(pageUtil).then(res => {
        console.log(res);
        let newData = res.data.map(item => {
          return {
            cs_id: item.cs_id,
            cs_name: item.cs_name,
            time: item.si_createtime + "-" + item.si_endtime,
            ce_name: item.ce_name
          };
        });
        let a = newData;
        this.options1 = a;
        this.options2 = [{ ce_name: "全部", cs_id: "0" }, ...a];
        this.options3 = [{ cs_name: "全部", cs_id: "0" }, ...a];
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    show1() {
      this.isShow1 = !this.isShow1;
    },
    show2() {
      this.isShow2 = !this.isShow2;
    },
    show3() {
      this.isShow3 = !this.isShow3;
    },
    showMore() {
      this.isShowAll = !this.isShowAll;
      this.num = this.isShowAll ? 5 : this.notices.length;
      this.txt = this.isShowAll ? "展示更多" : "收起";
    }
  }
};
</script>

<style scoped>
.notice /deep/ .el-collapse .el-collapse-item__header {
  padding-left: 20px;
}
.left,
.center,
.right {
  width: 33.3%;
}

#center {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 20px 20px;
  width: 100%;
  min-width: 1280px;
  height: 1200px;
  background-color: #e4e4e4;
}
/* 左边 */
.tit,
.tit3 {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  background-color: #fff;
}
.tit {
  cursor: pointer;
}
.tit h2,
.tit3 h2,
.tit4 h2 {
  display: inline-block;
  font-size: 16px;
  font-weight: normal;
}
.tit4 {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #c9c9c9;
  background-color: #fff;
}
.tit3 {
  border-radius: 5px 5px 0 0;
}

.infoContent {
  padding: 0 20px;
  height: 120px;
  border: 1px solid #c9c9c9;
  border-radius: 5px 5px 0 0;
  background-color: #fff;
}

.el-icon-arrow-down,
.el-icon-arrow-up,
.el-icon-close {
  line-height: 48px;
  cursor: pointer;
}
.list {
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 3px;
}
.list ul {
  padding: 20px;
  text-align: center;
}
.list ul > span {
  font-size: 12px;
  color: #c9c9c9;
  cursor: pointer;
}
.list ul li {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  margin-bottom: 10px;
  border-bottom: 1px solid #c9c9c9;
  cursor: pointer;
}
.list ul li i {
  float: right;
  line-height: 30px;
  margin-right: 10px;
}
.list li {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.list2 {
  width: 840px;
  border: 1px solid #c9c9c9;
  border-radius: 0 0 5px 5px;
  background-color: #fff;
}
/* .el-table {
    display: flex;
} */
.infoList {
  margin-top: 40px;
}

.infoList .el-button {
  height: 28px;
  margin-top: 12px;
  padding: 0 20px;
  color: #000;
  background-color: #e4e4e4;
}
.infoSelect {
  display: flex;
  justify-content: space-around;
  height: 60px;
  line-height: 60px;
  background-color: #fff;
}
.infoList .infoSelect .el-select {
  width: 30%;
}
.pagination {
  height: 50px;
  padding: 10px 20px;
}
/* 左边 */

/* 中间 */
.center {
  margin-left: 20px;
  margin-right: 20px;
}
/* 中间 */

/* 右边 */
.right .tit3 img {
  width: 16px;
  height: 16px;
  margin: 15px 5px 0 5px;
  cursor: pointer;
}
.content {
  border: 1px solid #c9c9c9;
  border-top: 0;
  height: 1000px;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  padding: 0 20px;
}

.content .content_header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #c9c9c9;
}
.content span:nth-of-type(1) {
  font-size: 20px;
  margin-left: 20px;
}
.content span:nth-of-type(2) {
  font-size: 14px;
  margin-right: 20px;
}
.step {
  height: 850px;
  margin-top: 20px;
  padding-top: 5px;
  background-color: #e4e4e4;
}
.step p {
  margin-left: 20px;
  margin-top: 20px;
  font-size: 14px;
}
.stepOn {
  padding: 20px;
  margin-top: 40px;
  height: 600px;
}
.stepOn img {
  width: 100%;
  height: 150px;
}

/* 右边 */
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
}
.footer div {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  background-color: #fff;
}
.footer span {
  font-size: 14px;
  color: #333;
}
</style>
<style>
.el-step__description {
  padding: 0;
}
</style>

