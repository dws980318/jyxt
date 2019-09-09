`<template>
  <div>
    <div class="container">
      <div class="tit">
        <h4>咨询信息管理</h4>
      </div>
      <div class="list">
        <div id="appoint_form">
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="咨询师姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="擅长领域">
              <el-input type="textarea" v-model="form.desc" placeholder="输入擅长方向！"></el-input>
            </el-form-item>
            <el-form-item label="开始时间" style="display:inline-block;margin-right:100px;">
              <el-date-picker v-model="form.time1" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间" style="display:inline-block">
              <el-date-picker v-model="form.time2" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
            </el-form-item>
            <el-form-item label="预约地点">
              <el-radio-group v-model="form.site">
                <el-radio label="指定范围"></el-radio>
                <el-input v-model="form.site1"></el-input>
                <el-radio label="指定地点"></el-radio>
                <el-input v-model="form.site2"></el-input>
              </el-radio-group>
            </el-form-item>
            <el-form-item class="submit">
              <el-button>取 消</el-button>
              <el-button type="primary" @click="onSubmit">提 交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="40"
        ></el-pagination>
      </div>
      <div class="footer">
        <div>
          <span>当前时间：2018年12月20日 10：20：31</span>
          <span>© 2015-2018 JOBSYS.CN</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    onSubmit() {
      const fd = new FormData();
      fd.append("teacherId", this.form.name);
      fd.append("comment", this.form.desc);
      fd.append("beginTime", this.form.time1);
      fd.append("endTime", this.form.time2);
      fd.append("adderss", this.form.site2);
      console.log(this.form.name);
      console.log(this.form.desc);
      console.log(this.form.time1);
      console.log(this.form.time2);
      console.log(this.form.site2);
      this.api.counselor(fd).then(res => {
        console.log(res);
        if (res.status == 200) {
           this.$message({
               message: '提交成功',
               type: 'success'
           })
        }else{
          this.$message({
               message: '提交失败',
               type: 'error'
           })
        }
      });
    }
  },
  data() {
    return {
      currentPage4: 1,

      form: {
        name: "",
        site: "",
        time1: "",
        time2: "",
        site1: "",
        site2: "",
        desc: ""
      }
    };
  }
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  min-width: 1080px;
  height: 1000px;
  background-color: #e4e4e4;
  border: 1px solid #c9c9c9;
  margin-top: 20px;
  padding: 20px;
}
.tit {
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
.pagination {
  width: 100%;
  height: 50px;
  border: 1px solid #c9c9c9;
  background-color: #fff;
  padding: 10px 20px 0;
  border-radius: 0 0 5px 5px;
}
.list {
  width: 100%;
  height: 600px;
  border: 1px solid #c9c9c9;
  background-color: #fff;
  position: relative;
}
.list #appoint_form {
  padding: 150px 100px 0px;
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
</style>
<style>
#appoint_form .el-form-item__label {
  text-align: left;
}
#appoint_form .el-input {
  width: 200px;
}
#appoint_form .el-textarea__inner {
  width: 350px;
  height: 100px;
}
#appoint_form .el-select {
  margin-right: 50px;
}
#appoint_form .el-radio:nth-of-type(2) {
  margin-left: 50px;
}
#appoint_form .submit {
  position: absolute;
  bottom: 0;
  right: 100px;
}
#appoint_form .el-button {
  width: 120px;
  height: 48px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background-color: #ccc;
}
#appoint_form .el-button--primary {
  background-color: #3399cc;
}
</style>
