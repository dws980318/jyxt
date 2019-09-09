<template>
  <div class="information">
    <div class="form">
      <el-form :model="information" label-width="120px" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="公司地址：" prop="identify">
          <baidu-map class="map" :center="information" :zoom="zoom" :min-zoom="minZoom" :max-zoom="maxZoom" :scroll-wheel-zoom="true" @ready="handler" @click="point">
            <bm-scale :enableGeolocation="true" anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            <bm-marker :position="information" animation="BMAP_ANIMATION_BOUNCE" :offset="{width: -30, height:30}" @click="infoWindowOpen">
              <bm-info-window message="'123123123'" :position="information" :show="show" @close="infoWindowClose" @open="infoWindowOpen" :closeOnClick="false" :width="220" :height="60">
                <p>{{contents}}</p>
              </bm-info-window>
            </bm-marker>
          </baidu-map>
        </el-form-item>
        <el-form-item label="经度：" prop="identify">
          <el-input type="text" v-model="information.lng" placeholder="请输入经度"></el-input>
        </el-form-item>
        <el-form-item label="纬度：" prop="identify">
          <el-input type="text" v-model="information.lat" placeholder="请输入纬度"></el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" size="small" @click="onSubmit">确认修改</el-button>
          <el-button size="small" @click="$router.back(-1)">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Change',
  data () {
    return {
      information: {
        lng: 0,
        lat: 0
      },
      zoom: 15,
      minZoom: 6,
      maxZoom: 18,
      show: true
    }
  },
  computed: {
    contents () {
      return '经度' + this.information.lng + ';' + '纬度' + this.information.lat
    }
  },
  created () {
    this.information = {
      lng: 113.328395, 
      lat: 23.131922
    }
  },
  methods: {
    handler ({BMap, map}) {
    },
    point (data) {
      this.information = data.point
    },
    infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
    },
    onSubmit () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .information{
    width: 100%;
  }
  .form{
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
  .map {
    width: 100%;
    height: 500px;
    border: 1px solid #0d8e52;
    font-size: 12px;
  }
</style>
