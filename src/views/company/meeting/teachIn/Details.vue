<template>
  <el-col :span="24">
    <div class="information">
      <div class="form">
        <div class="el-notification__title form_title">基本信息</div>
        <el-form :model="information" label-width="100px" ref="ruleForm" class="demo-ruleForm">
          <!-- <el-form-item v-if="information.id" label="id：" prop="id"> -->
          <!-- <p>{{information.id}}</p> -->
          <!-- <el-input type="text" v-model="information.id"></el-input> -->
          <!-- </el-form-item> -->
          <el-form-item label="宣讲会标题：" prop="title">
            <!-- <p>{{information.title}}</p> -->
            <el-input type="text" placeholder="请输入宣讲会标题" v-model="information.title"></el-input>
          </el-form-item>
          <el-form-item label="宣讲企业：" prop="company">
            <!-- <p>{{information.company}}</p> -->
            <el-input type="text" placeholder="请输入宣讲会企业" v-model="information.company"></el-input>
          </el-form-item>
          <el-form-item label="开始时间：" prop="startTime">
            <!-- <p>{{information.startTime}}</p> -->
            <el-date-picker
              value-format="yyyy-MM-dd HH:mm:ss"
              v-model="information.startTime"
              type="datetime"
              placeholder="选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="结束时间：" prop="endTime">
            <!-- <p>{{information.endTime}}</p> -->
            <el-date-picker
              value-format="yyyy-MM-dd HH:mm:ss"
              v-model="information.endTime"
              type="datetime"
              placeholder="选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="活动地点：" prop="place">
            <!-- <p>{{information.place}}</p> -->
            <el-input type="text" placeholder="请输入活动地点" v-model="information.place"></el-input>
          </el-form-item>
          <el-form-item label="宣讲内容：" prop="place">
            <tinymce-editor placeholder="请输入宣讲内容" v-model="information.content" ref="editor"></tinymce-editor>
          </el-form-item>
          <el-form-item size="large">
            <el-button size="small" type="primary" @click="onSubmit('ruleForm')">确定</el-button>
            <el-button size="small" @click="$router.back(-1)">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </el-col>
</template>

<script>
import TinymceEditor from "@/components/tinymce-editor";
export default {
  name: "Details",
  components: {
    TinymceEditor
  },
  data() {
    return {
      information: {}
    };
  },
  watch: {},
  created() {
    this.port = this.$route.params.port;
    if (this.$route.params.id) {
      this.loadObject(this.$route.params.id);
      this.handleEdit();
    }
  },
  methods: {
    //查询校园宣讲会详情
    handleEdit() {
      let preachMeeting = {
        id: this.$route.params.id
      };
      this.api.selePreachMeetingById(preachMeeting).then(res => {
        console.log(res);
        if (res.code === 200) {
          (this.information.id = res.data.id),
            (this.information.endTime = res.data.pm_endtime),
            (this.information.startTime = res.data.pm_starttime),
            (this.information.company = res.data.pm_num),
            (this.information.place = res.data.pm_field),
            (this.information.title = res.data.pm_title),
            (this.information.content = res.data.pm_content);
        }
      });
    },
    loadObject(portId) {
      this.information = {
        id: 1,
        title: "这是宣讲会的标题",
        company: "这是举行宣讲会公司",
        startTime: "2019-04-15 10:00",
        endTime: "2019-04-15 12:00",
        place: "这是宣讲会的地点",
        content: "这是宣讲会的内容"
      };
    },
    onSubmit(formName) {
      //修改校园宣讲会接口
      if (this.$route.params.id) {
        let preachMeeting = {
          id: this.$route.params.id,
          pm_endtime: this.information.endTime,
          pm_starttime: this.information.startTime,
          pm_num: this.information.company,
          pm_field: this.information.place,
          pm_title: this.information.title,
          pm_content: this.information.content.replace(/<[^>]+>/g, ""),
          sm_id: 3001
        };
        this.api.updPreachMeetingById(preachMeeting).then(res => {
          console.log(res);
          if (res.code === 200) {
            this.$message({
              message: res.inio,
              type: "success"
            });
            this.$router.push({ path: "/meeting/teachIn" });
          }
        });
      } else {
        //申请宣讲会接口
        let preachMeeting = {
          pm_endtime: this.information.endTime,
          pm_starttime: this.information.startTime,
          pm_num: this.information.company,
          pm_field: this.information.place,
          pm_title: this.information.title,
          pm_content: this.information.content.replace(/<[^>]+>/g, ""),
          sm_id: 3001
        };
        this.api.addPreachMeeting(preachMeeting).then(res => {
          console.log(res);
          if (res.code === 200) {
            this.$message.success(res.inio);
            this.$refs[formName].resetFields();
            this.$router.push({ path: "/meeting/teachIn" });
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.el-input {
  width: 360px;
}
.breadcrumb {
  position: relative;
  width: 100%;
  height: 45px;
  padding-top: 20px;
}
.breadcrumb:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #42b983;
}
.form_title {
  padding: 10px 0;
}
.information {
  width: 920px;
  height: auto;
  padding: 0 10px 20px 10px;
}
.form {
  width: 100%;
  height: auto;
  padding: 10px 0;
}
.el-form {
  padding: 10px 20px;
}
</style>
