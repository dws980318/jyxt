<template>
  <div id="map">
      <div class="company-heared">
        <div>
          <i class="el-icon-warning"></i>设置地图标记可以让应聘者更快捷地找到您单位。请拖动红色标记到您单位所在位置，或点左下边“定位”到您当前位置。
        </div>
      </div>
    <div class="personal_panel bg">
      <div class="person_container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../../common/css/student/style.css";
export default {
  name: "Panal",
  data() {
    return {
      activeIndex: 0,
      structure: [
        {
          name: "电子地图",
          path: "/personal/map"
        },
        {
          name: "修改",
          path: "/personal/map/change"
        }
      ]
    };
  },
  watch: {
    $route: "getPath"
  },
  methods: {
    getPath() {
      for (let i in this.structure) {
        if (this.structure[i].path === this.$route.path) {
          this.activeIndex = i;
        }
      }
    }
  }
};
</script>

<style scoped>
.company-heared {
  width: 100%;
  height: 60px;
  padding: 0 30px;
  line-height: 60px;
  color: #fff;
  margin-bottom: 20px;
  background-color: rgb(8, 189, 189);
}
#map {
  margin: 20px;
}
.breadcrumb {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #999999;
}
.person_container {
  /*width: 600px;*/
  width: 100%;
  height: auto;
}
</style>
