<template>
  <el-container>
    <el-aside class="aside" :class="$store.state.hideMenu?'aside_active':''">
      <div class="photo">
        <div class="photo_box">
          <img :src="photo" alt />
        </div>
        <p>管理员</p>
      </div>
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <el-header height="50px">
        <v-header></v-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <div class="copyright">
        <span style="float: left">{{date}}</span>
        <span>广州大学版权所有 COPYRIGHT©1999-2016, GUANGZHOU UNIVERSITY 粤ICP备 05008855号</span>
      </div>
    </el-container>
  </el-container>
</template>

<script>
import Photo from "@/common/images/user.png";
import Sidebar from "./template/Sidebar";
import Header from "./template/Header";

export default {
  name: "Layout",
  components: {
    Sidebar,
    "v-header": Header
  },
  data() {
    return {
      photo: Photo,
      date: this.timeFormate(new Date())
    };
  },
  mounted() {
    var _this = this; // 声明一个变量指向vue实例this,保证作用域一致
    this.timer = setInterval(() => {
      _this.date = this.timeFormate(new Date()); // 修改数据date
    }, 1000);
  },
  methods: {
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =
        new Date(timeStamp).getMonth() + 1 < 10
          ? "0" + (new Date(timeStamp).getMonth() + 1)
          : new Date(timeStamp).getMonth() + 1;
      let date =
        new Date(timeStamp).getDate() < 10
          ? "0" + new Date(timeStamp).getDate()
          : new Date(timeStamp).getDate();
      let hh =
        new Date(timeStamp).getHours() < 10
          ? "0" + new Date(timeStamp).getHours()
          : new Date(timeStamp).getHours();
      let mm =
        new Date(timeStamp).getMinutes() < 10
          ? "0" + new Date(timeStamp).getMinutes()
          : new Date(timeStamp).getMinutes();
      let ss =
        new Date(timeStamp).getSeconds() < 10
          ? "0" + new Date(timeStamp).getSeconds()
          : new Date(timeStamp).getSeconds();
      let nowTime =
        year + "-" + month + "-" + date + " " + hh + ":" + mm + ":" + ss;
      return nowTime;
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在vue实例销毁钱，清除我们的定时器
    }
  }
};
</script>

<style scoped>
.el-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.el-aside {
  background: #111111;
  transition: all 0.3s;
}
.aside {
  width: 250px !important;
}
.aside_active {
  width: 63.99px !important;
}
.el-header {
  position: relative;
  padding: 0;
  background: #ffffff;
}
.el-header:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #cccccc;
}
.el-main {
  padding: 0 20px;
}
.photo {
  width: 100%;
  height: auto;
  padding: 20px;
  text-align: center;
}
.photo .photo_box {
  width: 80px;
  height: 80px;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
}
.photo .photo_box img {
  width: 100%;
  height: 100%;
}
.photo p {
  font-size: 14px;
  color: #ffffff;
  line-height: 30px;
}
.aside_active .photo {
  width: 64px;
  height: 64px;
  text-align: center;
  padding: 0;
  display: flex;
  align-items: center;
}
.aside_active .photo .photo_box {
  width: 30px;
  height: 30px;
  margin: 17px;
  border-radius: 50%;
  overflow: hidden;
}
.aside_active .photo .photo_box img {
  width: 100%;
  height: 100%;
}
.aside_active .photo p {
  display: none;
  font-size: 14px;
  color: #ffffff;
  line-height: 30px;
}
.copyright {
  position: relative;
  z-index: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background: #fafafa;
  /*border-top: 1px solid #f0f0f0;*/
  font-size: 12px;
  color: #333;
  line-height: 30px;
  text-align: left;
}
.copyright span:first-of-type {
  width: 240px;
  font-size: 14px;
  text-indent: 20px;
  text-align: left;
  color: #000;
}
</style>
