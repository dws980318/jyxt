<template>
  <div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/student/info/list">学生简历管理</el-breadcrumb-item>
        <el-breadcrumb-item>简历内容</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="el-notification__title form_title">个人基本信息</div>
      <el-form ref="form" :model="form" label-width="120px">
        <div class="big_one">
          <el-form-item label="姓名：" prop="name">
            <p>{{form.name}}</p>
          </el-form-item>
          <el-form-item label="性别：" prop="sex">
            <p>{{form.sex}}</p>
          </el-form-item>
        </div>
        <div class="big_one">
          <el-form-item label="专业：" prop="subject">
            <p>{{form.subject}}</p>
          </el-form-item>
          <el-form-item label="出生年份：" prop="birth">
            <p>{{form.birth}}</p>
          </el-form-item>
        </div>
        <div class="big_one">
          <el-form-item label="籍贯：" prop="from">
            <p>{{form.from}}</p>
          </el-form-item>
          <el-form-item label="学历：" prop="edu">
            <p>{{form.edu}}</p>
          </el-form-item>
        </div>
        <div class="big_one">
          <el-form-item label="现居住地区：" prop="area">
            <p>{{form.area}}</p>
          </el-form-item>
        </div>
        <div class="big_one">
          <el-form-item label="婚姻状况：" prop="married">
            <p>{{form.married}}</p>
          </el-form-item>
          <el-form-item label="身高：" prop="tall">
            <p>{{form.tall}}</p>
          </el-form-item>
        </div>
        <div class="big_one">
          <el-form-item label="经济状况：" prop="economics">
            <p>{{form.economics}}</p>
          </el-form-item>
          <el-form-item label="工作经验：" prop="experience">
            <p>{{form.experience}}</p>
          </el-form-item>
        </div>
      </el-form>

      <div class="el-notification__title form_title">求职意向</div>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="期望形式：" prop="type">
          <p>{{form.type}}</p>
        </el-form-item>
        <el-form-item label="期望职位：" prop="position">
          <p>{{form.position}}</p>
        </el-form-item>
        <el-form-item label="期望行业：" prop="trade">
          <p>{{form.trade}}</p>
        </el-form-item>
        <el-form-item label="期望地区：" prop="work_area">
          <p>{{form.work_area}}</p>
        </el-form-item>
        <el-form-item label="期望薪酬：" prop="payment">
          <p>{{form.payment}}</p>
        </el-form-item>
        <el-form-item label="联系电话：" prop="telephone">
          <p>{{form.telephone}}</p>
        </el-form-item>
        <el-form-item label="联系qq：" prop="qq">
          <p>{{form.qq}}</p>
        </el-form-item>
        <el-form-item label="电子邮箱：" prop="email">
          <p>{{form.email}}</p>
        </el-form-item>
        <el-form-item label="主页/博客：" prop="blog">
          <p>{{form.blog}}</p>
        </el-form-item>
        <el-form-item label="通信地址：" prop="address">
          <p>{{form.address}}</p>
        </el-form-item>
      </el-form>

      <div class="el-notification__title form_title">其他信息</div>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="简历照片：" prop="picture">
          <p>{{form.picture}}</p>
        </el-form-item>
        <el-form-item label="特长：" prop="speciality">
          <p>{{form.speciality}}</p>
        </el-form-item>
        <el-form-item label="自我评价：" prop="self_evaluation">
          <p>{{form.self_evaluation}}</p>
        </el-form-item>
      </el-form>

      <div class="el-notification__title form_title">教育经历</div>
      <div>
        <ul>
          <li v-for="(items,index) in form.data1" :key="index">
            <span>{{items.time}}</span>
            <span>{{items.school}}</span>
            <span>{{items.subject}}</span>
            <span>{{items.edu}}</span>
          </li>
        </ul>
      </div>

      <div class="el-notification__title form_title">工作经历</div>
      <div>
        <ul>
          <li v-for="(items,index) in form.data2" :key="index">
            <div class="bb">
              <span>{{items.time}}</span>
              <span>{{items.company}}</span>
              <span>{{items.job_name}}</span>
              <p>工作职责：{{items.content}}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="el-notification__title form_title">获奖情况</div>
      <div>
        <ul>
          <li v-for="(items,index) in form.data3" :key="index">
            <span>{{items.time}}</span>
            <span>{{items.certificate}}</span>
            <span>{{items.organization}}</span>
          </li>
        </ul>
      </div>

      <div class="el-notification__title form_title">培训经历</div>
      <div>
        <ul>
          <li v-for="(items,index) in form.data4" :key="index">
            <div>
              <span>{{items.time}}</span>
              <span>{{items.organization}}</span>
              <span>{{items.className}}</span>
              <p>工作职责：{{items.content}}</p>
            </div>
          </li>
        </ul>
      </div>
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
        sex: "",
        subject: "",
        birth: "",
        from: "",
        enrol_time: "",
        edu: "",
        area: "",
        married: "",
        tall: "",
        economics: "",
        experience: "",
        type: "",
        position: "",
        trade: "",
        work_area: "",
        payment: "",
        telephone: "",
        qq: "",
        email: "",
        blog: "",
        address: "",
        picture: "",
        speciality: "",
        self_evaluation: "",
        data1: [
          {
            time: "2014/06-2018/09",
            school: "广州大学",
            subject: "挖掘机",
            edu: "小学"
          },
          {
            time: "2014/06-2018/09",
            school: "广州大学",
            subject: "挖掘机",
            edu: "小学"
          },
          {
            time: "2014/06-2018/09",
            school: "广州大学",
            subject: "挖掘机",
            edu: "小学"
          }
        ],
        data2: [
          {
            time: "2014/06-2018/09",
            company: "广州大学",
            job_name: "挖掘机",
            content: "洗厕所"
          },
          {
            time: "2014/06-2018/09",
            company: "广州大学",
            job_name: "挖掘机",
            content: "洗厕所"
          },
        ],
        data3: [
          {
            time: "2014/06-2018/09",
            certificate: "广州大学",
            organization: "挖掘机",
          },
        ],
        data4: [
          {
            time: "2014/06-2018/09",
            organization: "广州大学",
            className: "挖掘机",
            content: "",
          },
        ],
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
  padding-bottom: 10px;
}
.big_one {
  width: 1200px;
}
.el-form-item {
  margin-right: 120px;
}
.big_one .el-form-item {
  display: inline-block;
}
.information .el-input {
  width: 300px;
}
.information p {
  width: 250px;
}
.information ul {
  margin-left: 20px;
}
.information li {
  height: 50px;
  font-size: 14px;
  margin-bottom: 30px;
}
.information li p {
    height: 30px;
    line-height: 30px;
}
.information li span {
  margin-right: 20px;
}
</style>
