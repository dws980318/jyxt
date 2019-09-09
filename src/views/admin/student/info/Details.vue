<template>
  <div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/student/info/list">学生信息管理</el-breadcrumb-item>
        <el-breadcrumb-item>基本信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="el-notification__title form_title">生源信息</div>
      <el-form ref="form" :model="form" label-width="120px" class="bb">
        <div class="big_one">
          <el-form-item label="姓名">
            <el-input v-model="form.name" disabled></el-input>
          </el-form-item>
          <el-form-item label="学号">
            <el-input v-model="form.number" disabled></el-input>
          </el-form-item>
        </div>
        <el-form-item label="身份证号">
          <el-input v-model="form.idCard" disabled></el-input>
        </el-form-item>
        <div class="big_one">
          <el-form-item label="性别">
            <el-input v-model="form.gender" disabled></el-input>
          </el-form-item>
          <el-form-item label="考生号">
            <el-input v-model="form.test_num" disabled></el-input>
          </el-form-item>
        </div>
        <div class="big_one">
          <el-form-item label="入学时间">
            <el-input v-model="form.enrol_time" disabled></el-input>
          </el-form-item>
          <el-form-item label="毕业年份">
            <el-input v-model="form.graduate_date" disabled></el-input>
          </el-form-item>
        </div>
        <div class="big_one">
          <el-form-item label="定向或委托单位">
            <el-input v-model="form.company" disabled></el-input>
          </el-form-item>
          <el-form-item label="毕业时间">
            <el-input v-model="form.graduate_time" disabled></el-input>
          </el-form-item>
        </div>
        <div class="big_one">
          <el-form-item label="学制">
            <el-input v-model="form.eductional_systme" disabled></el-input>
          </el-form-item>
          <el-form-item label="培养方式">
            <el-input v-model="form.train_type" disabled></el-input>
          </el-form-item>
        </div>
        <div class="big_one">
          <el-form-item label="学历">
            <el-input v-model="form.education" disabled></el-input>
          </el-form-item>
          <el-form-item label="校区">
            <el-input v-model="form.area" disabled></el-input>
          </el-form-item>
        </div>
        <div class="big_one">
          <el-form-item label="学院">
            <el-input v-model="form.college" disabled></el-input>
          </el-form-item>
          <el-form-item label="系别">
            <el-input v-model="form.department" disabled></el-input>
          </el-form-item>
        </div>
        <div class="big_one">
          <el-form-item label="专业名称">
            <el-input v-model="form.subject_name" disabled></el-input>
          </el-form-item>
          <el-form-item label="专业方向">
            <el-input v-model="form.subject_direction" disabled></el-input>
          </el-form-item>
        </div>
        <el-form-item label="班级">
          <el-input v-model="form.class_name" disabled></el-input>
        </el-form-item>
      </el-form>

      <div class="el-notification__title form_title">个人信息</div>
      <el-form ref="form" :model="form" label-width="120px">
        <div class="big_one">
          <el-form-item label="出生日期：" prop="birthday">
            <p>{{form.birthday}}</p>
          </el-form-item>
          <el-form-item label="身高：" prop="tall">
            <p>{{form.tall}}</p>
          </el-form-item>
        </div>
        <div class="big_one">
          <el-form-item label="生源地区：" prop="from_area">
            <p>{{form.from_area}}</p>
          </el-form-item>
          <el-form-item label="体重：" prop="weight">
            <p>{{form.weight}}</p>
          </el-form-item>
        </div>
        <div class="big_one">
          <el-form-item label="政治面貌：" prop="face">
            <p>{{form.face}}</p>
          </el-form-item>
          <el-form-item label="户口是否在校：" prop="is_on_school">
            <p>{{form.is_on_school}}</p>
          </el-form-item>
        </div>
        <div class="big_one">
          <el-form-item label="民族：" prop="nation">
            <p>{{form.nation}}</p>
          </el-form-item>
          <el-form-item label="户口地区：" prop="registered_area">
            <p>{{form.registered_area}}</p>
          </el-form-item>
        </div>
        <div class="big_one">
          <el-form-item label="婚姻状况：" prop="married">
            <p>{{form.married}}</p>
          </el-form-item>
          <el-form-item label="户口地址：" prop="address">
            <p>{{form.address}}</p>
          </el-form-item>
        </div>
        <el-form-item label="经济状况：" prop="economics">
          <p>{{form.economics}}</p>
        </el-form-item>
      </el-form>

      <div class="el-notification__title form_title">联系信息</div>
      <el-form ref="form" :model="form" label-width="120px">
        <div>
          <el-form-item label="手机号码：" prop="telephone">
            <p>{{form.telephone}}</p>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="QQ号：" prop="qq">
            <p>{{form.qq}}</p>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="家庭地址：" prop="family_address">
            <p>{{form.family_address}}</p>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="宿舍号：" prop="doorplate">
            <p>{{form.doorplate}}</p>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="其他方式1：" prop="other_tel">
            <p>{{form.other_tel}}</p>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div>
      <el-button class="back" @click="$router.back(-1)">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        number: "",
        idCard: "",
        gender: "",
        test_num: "",
        enrol_time: "",
        graduate_date: "",
        company: "",
        graduate_time: "",
        eductional_systme: "",
        train_type: "",
        education: "",
        area: "",
        college: "",
        department: "",
        subject_name: "",
        subject_direction: "",
        class_name: "",
        birthday: "1998-09-19",
        tall: "174cm",
        from_area: "广东省湛江市遂溪县",
        weight: "53g",
        face: "共青团员",
        is_on_school: "否",
        nation: "汉族",
        registered_area: "广东省湛江市遂溪县",
        married: "未婚",
        address: "广东省湛江市遂溪县黄略镇台岭村",
        economics: "一般",
        telephone: "18406608525",
        qq: "390383410",
        family_address: "广东省湛江市遂溪县台岭村",
        doorplate: "西一419",
        other_tel: "18219436248"
      }
    };
  },
  methods: {}
};
</script>

<style scoped>
.back {
  width: 80px;
  height: 38px;
  color: #23c6c8;
  background-color: #fff;
  border: 1px solid #23c6c8;
  margin-bottom: 100px;
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
  padding: 5px 10px;
  width: 1200px;
  margin: 20px 0;
  background-color: #f2f2f2;
}
.information {
  width: 880px;
  height: auto;
  padding: 0 10px 20px 10px;
}

.el-form {
  width: 1200px;
  padding: 10px 20px;
}
.bb {
  border-bottom: 1px solid #ccc;
}
.big_one {
  width: 1200px;
}
.el-form-item {
  display: inline-block;
  margin-right: 120px;
}
.information .el-input {
  width: 300px;
}
.information p {
  width: 250px;
}
</style>
