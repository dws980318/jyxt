<template>
  <div>
    <div class="container">
      <div class="tit">
        <div>
          <h4>就业指导课程安排</h4>
        </div>
        <div class="search">
          <el-input placeholder="快速查询"></el-input>
          <el-button>
            <i class="el-icon-search"></i>搜索条件
          </el-button>
          <el-button>
            <i class="el-icon-refresh"></i>刷新
          </el-button>
        </div>
      </div>
      <div id="courseList">
        <el-table :data="lists" style="width: 100%" ref="table" :show-header="hideHeader">
          <el-table-column width="220" align="center">
            <template slot-scope="scope">
              <div class="h2">{{scope.row.oc_name}}</div>
            </template>
          </el-table-column>
          <el-table-column width="auto" align="left">
            <template slot-scope="scope">
              <div>类型：{{scope.row.oc_type}}</div>
              <div>
                学分：
                <span style="color:#ED5565">{{scope.row.oc_credit}}</span>
              </div>
              <div>总课时：{{scope.row.oc_trachinghour + scope.row.oc_practicehour}}小时（教学{{scope.row.oc_trachinghour}}/小时：实践{{scope.row.oc_practicehour}}/小时）</div>
            </template>
          </el-table-column>
          <el-table-column width="300" align="left">
            <template slot-scope="scope">
              <div>教师姓名：{{scope.row.ti_name}}</div>
              <div>课程排期：{{scope.row.car_period}}</div>
              <div>教室安排：{{scope.row.car_place}}</div>
            </template>
          </el-table-column>
          <el-table-column width="200" align="center">
            <template slot-scope="scope">
              <div>
                <el-button class="blue" @click="couresInfoAction(scope.row)">课程资料</el-button>
              </div>
              <!-- <div>
                <el-button class="blue" @click="classInfoAction(scope.row)">班级信息</el-button>
              </div>-->
            </template>
          </el-table-column>
          <el-table-column width="200" align="center" prop="control">
            <template slot-scope="scope">
              <el-button class="red" @click="classInfoAction(scope.row)">修改班级信息</el-button>
            </template>
          </el-table-column>

          <el-table-column width="200" align="center" prop="control">
            <template slot-scope="scope">
              <el-button
                :class="{red: scope.row.showAll,blue2: !scope.row.showAll}"
                @click="toogleExpand(scope.row)"
              >{{scope.row.showAll ? '展开:作业列表' : '关闭:作业列表'}}</el-button>
            </template>
          </el-table-column>
          <!-- 下拉表格 -->
          <el-table-column width="1" align="center" type="expand">
              <el-table
                :data="tableData"
                style="width: 100%"
                :cell-style="backgroundColor"
                :header-cell-style="getRowClass2"
              >
                <el-table-column align="center" property="si_id" label="序号" width="80"></el-table-column>
                <el-table-column align="center" property="si_name" label="学生姓名" width="150"></el-table-column>
                <el-table-column align="center" property="ce_name" label="学院" width="180"></el-table-column>
                <el-table-column align="center" property="mr_name" label="专业" width="180"></el-table-column>
                <el-table-column align="center" property="cs_name" label="班级" width="160"></el-table-column>
                <el-table-column align="center" property="accessory" label="课程信息" width="auto"></el-table-column>
                <el-table-column align="center" :render-header="renderHeader" width="250">
                  <el-button class="small-red" @click="tableVisible = true">查看评分</el-button>
                </el-table-column>
                <el-table-column align="center" :render-header="renderHeader2" width="150">
                  <el-button class="small-red">查看评分</el-button>
                </el-table-column>
                <el-table-column align="center" width="150" :render-header="renderHeader3">
                  <el-button class="small-red">查看评分</el-button>
                </el-table-column>
                <el-table-column align="center" label="总评成绩" width="100">
                  <el-button class="small-red">查看评分</el-button>
                </el-table-column>
              </el-table>
          </el-table-column>
          <!-- 下拉表格 -->
        </el-table>
      </div>
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
      <!-- <div class="footer">
        <div>
          <span>当前时间：2018年12月20日 10：20：31</span>
          <span>© 2015-2018 JOBSYS.CN</span>
        </div>
      </div>-->
    </div>

    <!-- 课程信息弹窗 -->
    <el-dialog id="classInfo" title="课程信息" :visible.sync="couresInfo" width="50%" center>
      <div class="classInfoContent">
        <div class="info">
          <div class="info_tit">
            <span>基本信息</span>
          </div>
          <div class="info_content">
            <p>课程名称：{{list.oc_name}}</p>
            <p>学分：{{list.oc_credit}}学分</p>
            <p>
              <span>总课时：{{list.oc_trachinghour + list.oc_practicehour}}课时</span>
              <span>教学学时：{{list.oc_trachinghour}}课时</span>
              实践学时：{{list.oc_practicehour}}课时
            </p>
          </div>
        </div>
        <div class="info">
          <div class="info_tit">
            <span>课程介绍</span>
          </div>
          <div class="introduce">
            <p>{{list.oc_introduce}}</p>
            <!-- <p>课程还设置了一定的实践学时，让学生通过合理使用测评工具、参加校内各类就业实践活动等方式加深对教学内容的理解掌握。课程目的是引导在校生制定一份可行的职业生涯设计，有计划地度过大学生涯，为职业发展奠定良好的基础。</p> -->
          </div>
        </div>
        <div class="info">
          <div class="info_tit">
            <span>其他说明</span>
          </div>
          <div class="state">{{list.oc_explain}}</div>
        </div>
      </div>
    </el-dialog>
    <!-- 课程信息弹窗 -->

    <!-- 班级信息弹窗 -->
    <el-dialog id="classInfo" title="班级信息" :visible.sync="classInfo" width="56%" center>
      <div class="classInfoContent">
        <div class="info">
          <div class="info_tit">
            <span>基本信息</span>
          </div>
          <div class="info_content">
            <el-form ref="ruleForm" label-width="120px" class="demo-ruleForm">
              <div class="table-content">
                <el-form-item class="w50" label=" 课程开展时间：">
                  <el-date-picker
                    v-model="value1"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  ></el-date-picker>
                </el-form-item>
                <el-form-item class="w50" label="课表安排：">
                  <el-input placeholder="请输入课表安排" v-model="one.car_period"></el-input>
                </el-form-item>
              </div>
              <div class="table-content">
                <el-form-item class="w80" label="教师姓名：">
                  <el-input disabled placeholder="请输入教师姓名" v-model="one.ti_name"></el-input>
                </el-form-item>
                <el-form-item class="w80" label="教师工号：">
                  <el-input disabled placeholder="请输入教师工号" v-model="one.ti_jobnumber"></el-input>
                </el-form-item>
              </div>
              <div class="table-content">
                <el-form-item class="w80" label="上课地点：">
                  <el-input placeholder="请输入上课地点" v-model="one.car_place"></el-input>
                </el-form-item>
                <el-form-item class="w80" label="学生对象：">
                  <el-select
                    @change="selectAction"
                    style="width:100%;"
                    v-model="value2"
                    multiple
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.cs_id"
                      :label="item.cs_name"
                      :value="item.cs_id"
                    ></el-option>
                  </el-select>
                  <!-- <el-input placeholder="请输入学生对象" v-model="one.ti_jobnumber"></el-input> -->
                </el-form-item>
              </div>
              <div class="table-content">
                <el-form-item class="w80" label="班级人数：">
                  <el-input disabled placeholder="请输入班级人数" v-model="one.cs_studentcount"></el-input>
                </el-form-item>
                <el-form-item class="w80">
                  <!-- <el-input v-model="value1"></el-input> -->
                </el-form-item>
              </div>
            </el-form>
          </div>
        </div>
        <div class="info">
          <div class="info_tit">
            <span>其他说明</span>
          </div>
          <div class>
            <el-input rows="6" type="textarea" v-model="one.oc_explain"></el-input>
          </div>
        </div>
        <div class="upload1 bg">
          <el-button class="red1" @click="updateAction">确认</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 班级信息弹窗 -->

    <!-- 评分弹窗 -->
    <div id="gradeInfo">
      <el-dialog title="张伟" :visible.sync="tableVisible" width="80%">
        <h3>
          实践作业
          <span>(8学时 ，占总评 40%)</span>
        </h3>
        <el-table :data="gridData" :cell-style="backgroundColor2" :header-cell-style="getRowClass">
          <el-table-column align="center" property="id" label="ID" width="150"></el-table-column>
          <el-table-column align="center" property="jobName" label="作业活动名称"></el-table-column>
          <el-table-column align="center" property="jobType" label="作业类型"></el-table-column>
          <el-table-column align="center" property="learnTime" label="对应学时" width="150"></el-table-column>
          <el-table-column align="center" property="accessory" label="附件" width="150"></el-table-column>
          <el-table-column align="center" property="grade" label="评分" width="150">
            <template slot-scope="scope">
              <span>{{scope.row.grade}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="300">
            <template>
              <el-button class="btn1">
                <i class="el-icon-view">点击查看</i>
              </el-button>
              <el-button class="btn2">评分</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-dialog>
    </div>
    <!-- 评分弹窗 -->
  </div>
</template>

<script>
export default {
  created() {
    this.getList();
    this.getList1();
  },
  methods: {
    //查询就业指导课程列表
    getList() {
      let pageUtil = {
        page: this.pageNum,
        strip: this.pageSize,
        relation_id: 2
      };
      this.api.seleCourseArrangementByList(pageUtil).then(res => {
        console.log(res);
        let newData = res.data.map(item => {
          return {
            id: item.id,
            car_period: item.car_period,
            car_place: item.car_place,
            car_id: item.car_id,
            oc_name: item.oc_name,
            oc_practicehour: item.oc_practicehour,
            oc_trachinghour: item.oc_trachinghour,
            ti_name: item.ti_name,
            oc_id: item.oc_id,
            ti_id: item.ti_id,
            oc_credit: item.oc_credit,
            oc_type: item.oc_type,
            showAll: true
          };
        });
        console.log(newData);
        this.lists = newData;
        this.total = Number(res.total);
      });
    },
    //查询所有学生对象列表
    getList1() {
      let pageUtil = {
        // page: this.pageNum,
        // strip: this.pageSize,
        // relation_id: 2
      };
      this.api.selectClassSchoolByList(pageUtil).then(res => {
        console.log(res);
        let newData = res.data.map(item => {
          return {
            cs_id: item.cs_id,
            cs_name: item.cs_name,
            cs_studentcount: item.cs_studentcount
          };
        });
        console.log(newData);
        this.options = newData;
      });
    },
    //选中学生对象
    selectAction(event) {
      console.log(event);
      console.log(this.options);
      if (event.length === 0) {
        this.one.cs_studentcount = "";
      }
      let one = this.options.map(item => {
        return item.cs_id;
      });
      console.log(one);
      let a = [];
      for (let i in event) {
        console.log(one.indexOf(event[i]));
        console.log(Number(this.options[i].cs_studentcount));
        if (one.indexOf(event[i]) === 0) {
          a.push(this.options[0].cs_studentcount);
        }
        if (one.indexOf(event[i])) {
          a.push(this.options[one.indexOf(event[i])].cs_studentcount);
        }
        // this.one.cs_studentcount = Number(a);
        console.log(a);
        let bj = 0;
        for (let i in a) {
          bj += Number(a[i]);
        }
        this.one.cs_studentcount = bj;
      }
    },
    //查询班级信息详情
    classInfoAction(row) {
      console.log(row);
      this.classInfo = true;
      sessionStorage.ti_id = row.ti_id;
      sessionStorage.car_id = row.car_id;
      let courseArrangementInioVO = {
        ti_id: row.ti_id,
        car_id: row.car_id
      };
      this.api
        .seleCourseArrangementInioByCarId(courseArrangementInioVO)
        .then(res => {
          console.log(res);
          (this.one.ti_name = res.data.ti_name),
            (this.one.ti_jobnumber = res.data.ti_jobnumber),
            (this.value1 = [res.data.car_createtime, res.data.car_endtime]),
            (this.one.car_period = res.data.car_period),
            (this.one.car_place = res.data.car_place),
            (this.one.oc_explain = res.data.oc_explain);

          if (res.data.cs_id !== ",") {
            let a = res.data.cs_id.slice(1).split(",");
            let b = [];
            let c = [];
            for (let i in a) {
              b.push(Number(a[i]));
            }
            this.value2 = b;

            let one = this.options.map(item => {
              return item.cs_id;
            });
            for (let i in b) {
              console.log(one.indexOf(b[i]));
              console.log(Number(this.options[i].cs_studentcount));
              if (one.indexOf(b[i]) === 0) {
                c.push(this.options[0].cs_studentcount);
              }
              if (one.indexOf(b[i])) {
                c.push(this.options[one.indexOf(b[i])].cs_studentcount);
              }
              console.log(c);
              let bj = 0;
              for (let i in c) {
                bj += Number(c[i]);
              }
              this.one.cs_studentcount = bj;
            }
            console.log(this.value2);
          } else {
            this.value2 = [];
          }
        });
    },
    //编辑班级信息详情
    updateAction() {
      console.log(this.value1);
      console.log("," + this.value2);
      let a = this.value1[0];
      let b = this.value1[1];
      let c = "," + this.value2;
      console.log(a);
      console.log(b);
      let courseArrangementInioVO = {
        car_createtime: a,
        car_endtime: b,
        ti_id: sessionStorage.ti_id,
        car_id: sessionStorage.car_id,
        cs_id: c,
        ...this.one
      };
      this.api
        .updCourseArrangementInioByCarId(courseArrangementInioVO)
        .then(res => {
          console.log(res);
          if (res.code === 200) {
            this.$message.success(res.inio);
            this.classInfo = false;
          }
        });
    },
    //查询课程信息详情
    couresInfoAction(row) {
      console.log(row);
      this.couresInfo = true;
      let obtainCurriculum = {
        id: row.oc_id
      };
      this.api.seleProposalFeedbackById(obtainCurriculum).then(res => {
        console.log(res);
        // let newData = res.data.map(item => {
        // return {
        //   id: res.data.id,
        //   car_period: res.data.car_period,
        //   car_place: res.data.car_place,
        //   oc_name: res.data.oc_name,
        //   oc_practicehour: res.data.oc_practicehour,
        //   oc_trachinghour: res.data.oc_trachinghour,
        //   ti_name: res.data.ti_name
        // };
        // });
        // console.log(newData);
        this.list = res.data;
      });
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    indexMethod(index) {
      return index + 1 * 1;
    },
    backgroundColor() {
      return "background-color: #3b515b; color: #fff; border:none;";
    },
    backgroundColor2() {
      return "background-color: #f2f2f2;border-bottom: 1px solid #333;";
    },
    getRowClass({ rowIndex }) {
      if (rowIndex === 0) {
        return "background-color: #f2f2f2;border-bottom: 1px solid #333;";
      }
    },
    getRowClass2({ rowIndex }) {
      if (rowIndex === 0) {
        return "background-color: #3b515b;color: #fff; border-bottom: 1px solid #fff;";
      }
    },
    //展开收起
    toogleExpand(row) {
      console.log(row);
      if(row.showAll) {

        let pageUtil = {
          relation_id: row.car_id
        };
        this.api.seleStudentCourseInioByList(pageUtil).then(res => {
          console.log(res);
          let newData = res.data.map(item => {
          return {
            si_id: item.si_id,
            si_name: item.si_name,
            ce_name: item.ce_name,
            mr_name: item.mr_name,
            cs_name: item.cs_name,
            oc_trachinghour: item.oc_trachinghour,
            ti_name: item.ti_name
          };
          });
          console.log(newData);
          this.tableData = res.data;
        });
      }

      row.showAll = !row.showAll;
      let $table = this.$refs.table;
      this.lists.map(item => {
        if (row.id != item.id) {
          $table.toggleRowExpansion(item, false);
        }
      });
      $table.toggleRowExpansion(row);
    },

    renderHeader(h) {
      return [
        h("p", {}, ["平时成绩"]),
        h("p", { style: "font-size:14px" }, ["(课堂考勤、表现,占总评 20%)"])
      ];
    },
    renderHeader2(h) {
      return [
        h("p", {}, ["实践作业"]),
        h("p", { style: "font-size:14px" }, ["(8学时,占总评 40%)"])
      ];
    },
    renderHeader3(h) {
      return [
        h("p", {}, ["期末考核"]),
        h("p", { style: "font-size:14px" }, ["(占总评 40%)"])
      ];
    }
  },
  data() {
    return {
      list: {},
      value1: "",
      value2: "",
      activeIndex: 0,
      expands: [],
      pageSize: 10,
      pageNum: 0,
      total: 0,
      tableData: [],
      options: [],
      couresInfo: false,
      classInfo: false,
      tableVisible: false,
      hideHeader: false,
      showAll: false,
      one: {
        ti_name: "",
        ti_jobnumber: "",
        car_period: "",
        car_place: "",
        oc_explain: "",
        cs_studentcount: ""
      },
      lists: [
        {
          id: "1",
          className: "大学生就业指导课程",
          type: "公共选修课",
          credit: "2.0学分",
          oc_practicehour: "12",
          ti_name: "阿珂",
          car_period: "第十周周一",
          car_place: "北区六栋阶梯3教室",
          control: "",
          tableData: [
            {
              name: "张伟",
              college: "广东",
              subject: "软件",
              class: "四班",
              class_info: "基础"
            },
            {
              name: "张伟",
              college: "广东",
              subject: "软件",
              class: "四班",
              class_info: "基础"
            },
            {
              name: "张伟",
              college: "广东",
              subject: "软件",
              class: "四班",
              class_info: "基础"
            }
          ]
        },
        {
          id: "2",
          className: "大学生就业指导课程",
          type: "公共选修课",
          credit: "2.0学分",
          oc_practicehour: "12",
          ti_name: "阿珂",
          car_period: "第十周周一",
          car_place: "北区六栋阶梯3教室",
          tableData: [
            {
              name: "张伟",
              college: "广东",
              subject: "软件",
              class: "二班",
              class_info: "基础"
            },
            {
              name: "张伟",
              college: "广东",
              subject: "软件",
              class: "二班",
              class_info: "基础"
            },
            {
              name: "张伟",
              college: "广东",
              subject: "软件",
              class: "二班",
              class_info: "基础"
            }
          ]
        },
        {
          id: "3",
          className: "大学生就业指导课程",
          type: "公共选修课",
          credit: "2.0学分",
          oc_practicehour: "12",
          ti_name: "阿珂",
          car_period: "第十周周一",
          car_place: "北区六栋阶梯3教室",
          tableData: [
            {
              name: "张伟",
              college: "广东",
              subject: "软件",
              class: "一班",
              class_info: "基础"
            },
            {
              name: "张伟",
              college: "广东",
              subject: "软件",
              class: "一班",
              class_info: "基础"
            },
            {
              name: "张伟",
              college: "广东",
              subject: "软件",
              class: "一班",
              class_info: "基础"
            }
          ]
        }
      ],

      gridData: [
        {
          id: "132465789",
          jobName: "4D天性测试",
          jobType: "自我认知报告",
          learnTime: "2",
          accessory: "",
          grade: "未评分"
        },
        {
          id: "132465789",
          jobName: "4D天性测试",
          jobType: "自我认知报告",
          learnTime: "2",
          accessory: "",
          grade: "未评分"
        },
        {
          id: "132465789",
          jobName: "4D天性测试",
          jobType: "自我认知报告",
          learnTime: "2",
          accessory: "",
          grade: "未评分"
        },
        {
          id: "132465789",
          jobName: "4D天性测试",
          jobType: "自我认知报告",
          learnTime: "2",
          accessory: "",
          grade: "未评分"
        }
      ]
    };
  }
};
</script>

<style scoped>
.upload1 {
  text-align: center;
}
.red1 {
  width: 120px;
  color: #fff;
  background-color: #ed5565;
  cursor: pointer;
}
.container {
  position: relative;
  width: 100%;
  min-width: 1080px;
  height: 100vh;
  background-color: #e4e4e4;
  border: 1px solid #c9c9c9;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
}
.tit {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border: 1px solid #c9c9c9;
  border-radius: 5px 5px 0 0;
  background-color: #fff;
  padding: 0 20px;
}
.tit h4 {
  font-size: 16px;
  font-weight: normal;
}
.tit .search .el-input {
  width: 200px;
  margin-right: 10px;
}
.tit .search .el-button {
  padding: 7px 10px;
  background-color: #1bb394;
  color: #fff;
}
.pagination {
  width: 100%;
  height: 50px;
  border: 1px solid #c9c9c9;
  background-color: #fff;
  padding: 10px 20px 0;
  border-radius: 0 0 5px 5px;
}
#courseList {
  width: 100%;
  border: 1px solid #c9c9c9;
  background-color: #fff;
}
#courseList div {
  font-size: 14px;
}
.h2 {
  font-size: 18px !important;
}
.blue {
  height: 28px;
  padding: 5px 20px;
  color: #fff;
  background-color: #1c84c6;
  cursor: pointer;
  margin-bottom: 5px;
}
.red {
  padding: 10px 10px;
  color: #fff;
  background-color: #ed5565;
  cursor: pointer;
}
.blue2 {
  padding: 10px 10px;
  color: #fff;
  background-color: #1c84c6;
  cursor: pointer;
}
.small-red {
  padding: 5px 5px;
  color: #fff;
  background-color: #ed5565;
  cursor: pointer;
  border: none;
}
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
  border-radius: 5px 5px 0 0;
  background-color: #fff;
}
.footer span {
  font-size: 14px;
  color: #333;
}
/* 课程信息弹窗 */
.classInfoContent {
  padding: 0 20px;
}
#classInfo .info {
  width: 100%;
  border: 1px solid #23c6c8;
  border-radius: 5px;
  margin-bottom: 20px;
}
#classInfo .info_tit {
  padding: 15px;
  color: #fff;
  background-color: #23c6c8;
}
#classInfo .info_content {
  padding: 20px 15px;
}
#classInfo .info_content p {
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
}
#classInfo .info_content p span {
  margin-right: 120px;
}
.table-content {
  /* height: 40px; */
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.el-form-item {
  margin-bottom: 10px;
}
.el-input__inner {
  width: 100%;
}
/* .w50 {
  width: 50%;
} */
#classInfo .introduce {
  padding: 30px 15px;
}
#classInfo .introduce p {
  margin-bottom: 10px;
}
#classInfo .state {
  min-height: 100px;
  padding: 20px 15px;
}
/* 课程信息弹窗 */

/* 评分弹窗 */
#gradeInfo h3 {
  color: #438bca;
  font-weight: normal;
  margin-bottom: 20px;
}
#gradeInfo h3 span {
  font-size: 12px;
  color: #333;
}
#gradeInfo .el-table span {
  display: inline-block;
  padding: 5px;
  color: #fff;
  background-color: #aaa;
  border-radius: 5px;
}
/* 评分弹窗 */
</style>

<style>
/* 课程信息弹窗 */
#classInfo .el-dialog__title {
  font-size: 30px;
}
#courseList .el-table__expanded-cell[class*="cell"] {
  padding: 0;
}
#courseList .cell {
  font-size: 16px;
}
/* 课程信息弹窗 */

/* 评分弹窗 */
#gradeInfo .el-dialog {
  height: 600px;
  background-color: #f2f2f2;
}
#gradeInfo .el-dialog__title {
  color: #438bca;
}
#gradeInfo .el-table {
  border-bottom: 1px solid #333;
}
#gradeInfo .btn1 {
  padding: 10px;
  cursor: pointer;
}
#gradeInfo .btn2 {
  padding: 10px 20px;
  color: #fff;
  background-color: #ed5565;
  cursor: pointer;
}
/* 评分弹窗 */
.tit .search .el-input__inner {
  height: 28px !important;
}
</style>
