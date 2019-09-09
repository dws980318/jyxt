<template>
  <div id="container">
    <!-- 左边部分 -->
    <div class="infoList">
      <div class="infoContent">
        <div class="tit">
          <h2>就业报表信息</h2>
          <el-button @click="getList">筛选</el-button>
        </div>
        <div class="infoSelect">
          <!-- <el-date-picker
            v-model="value1"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>-->
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
      <div class="list">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column align="center" prop="si_sno" label="学号" width="150"></el-table-column>
          <el-table-column align="center" prop="si_name" label="姓名" width="150"></el-table-column>
          <el-table-column align="center" label="编辑">
            <template slot-scope="scope">
              <!-- <i class="el-icon-edit-outline"></i> -->
              <i class="el-icon-view" @click="editAction(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            layout="total, sizes, pager, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>
    </div>
    <!-- 左边部分 -->

    <!-- 右边 -->
    <div class="right">
      <div class="student_info">
        <div class="stu_tit">
          <h2>个人信息</h2>
          <i class="el-icon-arrow-down"></i>
        </div>
        <div class="stu_info">
          <el-form
            :model="ruleForm"
            :label-position="labelPosition"
            :show-message="showMessage"
            ref="ruleForm"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="出生日期">
              <el-form-item prop="date">
                <el-date-picker
                  type="date"
                  disabled
                  placeholder="选择日期"
                  v-model="ruleForm.date"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  style="width: 200px;"
                ></el-date-picker>
                <template>
                  <div class="head_photo">
                    <img :src="ruleForm.si_img" alt />
                  </div>
                </template>
              </el-form-item>
            </el-form-item>
            <el-form-item label="政治面貌">
              <el-select disabled v-model="ruleForm.politics" placeholder="请选择政治面貌">
                <el-option label="共青团员" value="member"></el-option>
                <el-option label="群众" value="people"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="民族">
              <el-select disabled v-model="ruleForm.nation" placeholder="请选择民族">
                <el-option label="汉" value="han"></el-option>
                <el-option label="壮" value="zhuang"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="婚姻状况">
              <el-select disabled v-model="ruleForm.marry" placeholder="请选择婚姻状况">
                <el-option label="未婚" value="1"></el-option>
                <el-option label="已婚" value="0"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="经济状况">
              <el-select disabled v-model="ruleForm.money" placeholder="请选择经济状况">
                <el-option label="一般" value="normal"></el-option>
                <el-option label="富裕" value="rich"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="户口是否在校">
              <el-radio-group disabled v-model="ruleForm.registered">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="户口地区">
              <el-input disabled v-model="ruleForm.area" style="width: 400px;"></el-input>
            </el-form-item>
            <el-form-item label="户口地址">
              <el-input disabled v-model="ruleForm.address" style="width: 400px;"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="jobInfo">
        <div class="stu_tit">
          <h2>公司信息</h2>
          <i class="el-icon-arrow-down"></i>
        </div>
        <div class="job_info">
          <el-form
            :model="ruleForm"
            :label-position="labelPosition"
            :show-message="showMessage"
            ref="ruleForm"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="公司名称" prop="conpany_name">
              <el-input disabled v-model="ruleForm.conpany_name"></el-input>
            </el-form-item>

            <el-form-item label="企业性质" prop="nature">
              <el-input disabled v-model="ruleForm.nature"></el-input>
            </el-form-item>

            <el-form-item label="成立时间" prop="build_time">
              <el-input disabled v-model="ruleForm.build_time"></el-input>
            </el-form-item>
            <el-form-item label="实习报告" prop="report" class="upload">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <span>上传附件</span>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt />
              </el-dialog>
            </el-form-item>
            <el-form-item label="就业协议" prop="deal" class="upload">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <span>上传附件</span>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt />
              </el-dialog>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <!-- 右边 -->
    <!-- <div class="footer">
      <div>
        <span>当前时间：2018年12月20日 10：20：31</span>
        <span>© 2015-2018 JOBSYS.CN</span>
      </div>
    </div>-->
  </div>
</template>

<script>
import si_img from "@/common/images/user.png";
export default {
  data() {
    return {
      pageSize: 20,
      pageNum: 0,
      total: 0,

      dialogImageUrl: "",
      dialogVisible: false,

      isShow: true,
      radio: "2",

      options1: [],
      options2: [],
      options3: [],
      value1: "",
      value2: "",
      value3: "",

      tableData: [],

      showMessage: false,
      labelPosition: "left",
      ruleForm: {
        name: "",
        date: "",
        si_img: si_img,
        politics: "",
        nation: "",
        marry: "",
        money: "",
        registered: "",
        area: "",
        address: "",
        conpany_name: "",
        nature: "",
        build_time: ""
      }
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
            oc_trachinghour: item.oc_trachinghour,
            oe_id: item.oe_id
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
    editAction(row) {
      let studentInio = {
        id: row.si_id
      };
      this.api.seleStudentInioById(studentInio).then(res => {
        console.log(res);
        this.ruleForm.name = res.data.si_name;
        this.ruleForm.date = res.data.si_birthdate;
        this.ruleForm.si_img = res.data.si_img;
        // this.ruleForm.name = res.data.si_name;
        this.ruleForm.nation = res.data.si_nation;
        this.ruleForm.marry = res.data.si_marriage;
        this.ruleForm.money = res.data.si_economics;
        this.ruleForm.registered = res.data.si_inschool === "1" ? "否" : "是";
        this.ruleForm.area = res.data.si_registered;
        this.ruleForm.address = res.data.si_regisaddress;
      });

      let obtainEmployment = {
        id: row.oe_id
      };
      this.api.seleObtainEmploymentById(obtainEmployment).then(res => {
        console.log(res);
        this.ruleForm.conpany_name = res.data.oe_unitname;
        this.ruleForm.nature = res.data.oe_nature;
        this.ruleForm.conpany_name = res.data.oe_unitname;
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    show() {
      this.isShow = !this.isShow;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style scoped>
#container {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 20px 20px;
  width: 100%;
  min-width: 1280px;
  height: 100vh;
  background-color: #e4e4e4;
}
/* 左边 */
.infoList {
  width: 500px;
}
.infoContent {
  padding: 0 20px;
  height: 120px;
  border: 1px solid #c9c9c9;
  border-radius: 5px 5px 0 0;
  background-color: #fff;
}
.tit {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #c9c9c9;
  background-color: #fff;
}
.tit h2 {
  display: inline-block;
  font-size: 16px;
  font-weight: normal;
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
.list {
  width: 500px;
  border: 1px solid #c9c9c9;
  border-radius: 0 0 5px 5px;
  background-color: #fff;
}
.list i {
  margin-right: 5px;
  font-size: 18px;
  cursor: pointer;
}
.el-table-column {
  height: 48px;
}
.pagination {
  width: 100%;
  height: 50px;
  padding: 10px 10px;
}
/* 左边 */

.el-icon-arrow-down {
  line-height: 48px;
  cursor: pointer;
}
/* 右边 */
.right {
  width: 800px;
  margin-left: 20px;
}
.student_info {
  width: 100%;
  padding: 0 20px;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  background-color: #fff;
}
.stu_tit {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #c9c9c9;
}
.stu_tit h2 {
  display: inline-block;
  font-size: 16px;
  font-weight: normal;
}
.stu_info {
  padding: 20px 20px 20px 40px;
}
.head_photo {
  position: absolute;
  top: -30px;
  right: 0;
  width: 150px;
  height: 150px;
  border: 1px solid skyblue;
}
.head_photo img {
  width: 100%;
}
.el-form-item {
  margin-bottom: 5px;
}
.el-input {
  width: 200px;
}
.el-input__inner {
  height: 28px;
}
.el-select {
  width: 200px;
}
.jobInfo {
  padding: 0 20px;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 20px;
}
.job_info {
  padding: 20px 20px 20px 40px;
}
.upload {
  margin-top: 10px;
  margin-bottom: 10px;
}
.upload span {
  color: #c9c9c9;
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
.el-input__inner {
  height: 28px;
}
</style>
