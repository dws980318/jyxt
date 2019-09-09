<template>
  <div class="header">
    <div class="hideMenu" @click="changeMenu()">
      <div class="icon_box" :class="$store.state.hideMenu?'rotate':''">
        <span class="iconfont icon-menu"></span>
      </div>
    </div>
    <div class="breadcrumb">
      <breadcrumb></breadcrumb>
    </div>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img :src="avatarImg" class="user-avatar" />
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <el-dropdown-item v-if="this.$store.state.person">
          <span @click="toPersonal">个人中心</span>
        </el-dropdown-item>
        <el-dropdown-item>
          <span style="display:block;" @click="logout">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import avatarImg from "../../../common/images/user.png";
import Breadcrumb from "./header/Breadcrumb";

export default {
  name: "Header",
  components: {
    Breadcrumb
  },
  data() {
    return {
      avatarImg: avatarImg
    };
  },
  methods: {
    changeMenu() {
      this.$store.commit("changehideMenu", !this.$store.state.hideMenu);
    },
    toPersonal() {
      window.open("/#/personal");
      let history = this.$store.state.history;
      let route = { path: "/personal", name: "个人中心" };
      for (let i in history) {
        if (history[i].path === route.path) {
          this.$router.replace(history[i].path);
          return false;
        }
      }
      this.$store.commit("addHistory", route);
      this.$router.replace("/personal");
    },
    logout() {
      // this.api.
      //   logout().then(res => {
      //     console.log(res);
      //     if (res.status === 200) {
      this.$store.commit("clearLogin", true);
      this.clearCookie();
      location.reload();
      //   }
      // });
      // this.$store.dispatch('LogOut').then(() => {
      //   location.reload() // 为了重新实例化vue-router对象 避免bug
      // })
    },
    setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/"; // path=/是根路径
    },
    clearCookie() {
      this.setCookie("userName", "", -1);
      this.setCookie("password", "", -1);
    }
  }
};
</script>

<style scoped>
.rotate {
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -moz-transform: rotate(180deg); /* Firefox */
  -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
  -o-transform: rotate(180deg);
}
.header {
  display: flex;
  width: 100%;
  height: 100%;
}
.header .hideMenu {
  cursor: pointer;
  position: relative;
  width: 55px;
  height: 50px;
  font-size: 24px;
  line-height: 50px;
  text-align: center;
  background: #ffffff;
}
.header .hideMenu:hover {
  background: #666666;
  color: #ffffff;
}
.header .hideMenu:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
  background: #cccccc;
}
.icon_box {
  width: 100%;
  height: 100%;
}
.header .breadcrumb {
  flex: 1;
  height: 100%;
  padding: 5px;
}
.header .avatar-container {
  width: 50px;
  height: 50px;
}
.header .avatar-container .avatar-wrapper {
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  line-height: initial;
  padding: 10px;
  margin: auto;
  text-align: center;
}
.header .avatar-container .avatar-wrapper .user-avatar {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
a {
  text-decoration: none;
}
.el-dropdown-menu__item {
  line-height: 28px;
}
</style>
