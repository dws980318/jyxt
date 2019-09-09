<template>
  <div class="breadcrumb_main">
    <div class="scroll_left" @click="scrollLeft()">
      <i class="el-icon-caret-left"></i>
    </div>
    <div class="pathTab">
      <div class="scroll_main" ref="headerScroll">
        <transition name="scroll">
          <div class="path_list">
            <span class="path_item" :class="$route.path === '/index'? 'active' : ''">
              <span @click="toPath('/index')">首页</span>
            </span>
            <span
              class="path_item"
              v-for="(item, index) in $store.state.history"
              :key="index"
              :class="ifActive(item.path)"
            >
              <span @click="toPath(item.path)">{{item.name}}</span>
              <i class="el-icon-close" @click="delTab(index)"></i>
            </span>
          </div>
        </transition>
      </div>
    </div>
    <div class="scroll_right" @click="scrollRight()">
      <i class="el-icon-caret-right"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Breadcrumb",
  watch: {
    $route: "getPath"
  },
  methods: {
    getPath() {},
    ifActive(path) {
      if (this.$route.matched[1].path === path) {
        return "active";
      } else if (
        this.$route.matched[2] &&
        this.$route.matched[2].path === path
      ) {
        return "active";
      } else {
        return "";
      }
    },
    scrollLeft() {
      let left = this.$refs.headerScroll.scrollLeft;
      this.$refs.headerScroll.scrollLeft = left - 200;
    },
    scrollRight() {
      let left = this.$refs.headerScroll.scrollLeft;
      this.$refs.headerScroll.scrollLeft = left + 200;
    },
    toPath(path) {
      this.$router.replace(path);
    },
    delTab(index) {
      console.log(this.$route);
      if (this.$route.matched.length < 4) {
        if (
          this.$route.matched[2].path !== this.$store.state.history[index].path
        ) {
        } else {
          if (
            this.$route.matched[2].path ===
              this.$store.state.history[index].path &&
            index > 0
          ) {
            let back = this.$store.state.history[index - 1].path;
            this.$router.replace(back);
          } else {
            this.$router.replace("/index");
          }
        }
      } else {
        if (
          this.$route.matched[1].path !== this.$store.state.history[index].path
        ) {
        } else {
          if (
            this.$route.matched[1].path ===
              this.$store.state.history[index].path &&
            index > 0
          ) {
            let back = this.$store.state.history[index - 1].path;

            this.$router.replace(back);
          } else {
            this.$router.replace("/index");
          }
        }
      }
      this.$store.commit("delHistory", index);
    }
  }
};
</script>
<style scoped>
.scroll-enter-active,
.scroll-leave-active {
  transition: all 5s;
}
.scroll-enter, .fade-leave-to /* .scroll-leave-active below version 2.1.8 */ {
  opacity: 1;
}
.breadcrumb_main {
  display: flex;
  width: 100%;
  height: 100%;
}
.breadcrumb_main .pathTab {
  flex: 1;
  width: 0;
  height: 100%;
  overflow: hidden;
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
}
.pathTab .scroll_main {
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  transition: all 5s;
}
.pathTab .scroll_main::-webkit-scrollbar {
  display: none;
}
.pathTab .scroll_main .path_list {
  white-space: nowrap;
  width: auto;
  height: 100%;
}
.path_item {
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  border: 1px solid #0d8e52;
  background: #ffffff;
  margin: 5px;
  border-radius: 4px;
  color: #0d8e52;
}
.path_item.active {
  background: #0d8e52;
  color: #ffffff;
}
.path_item span {
  cursor: pointer;
  font-size: 12px;
}
.path_item i {
  cursor: pointer;
  color: #0d8e52;
  padding: 2px;
  border-radius: 50%;
}
.path_item i:hover {
  background: #0d8e52;
  color: #ffffff;
}
.path_item.active i {
  color: #ffffff;
}
.path_item.active i:hover {
  background: #ffffff;
  color: #0d8e52;
}
.breadcrumb_main .scroll_left,
.breadcrumb_main .scroll_right {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 100%;
}
</style>
