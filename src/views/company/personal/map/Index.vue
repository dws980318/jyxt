<template>
  <div class="information border">
      <div class="box-title border-b">
        <div>单位地图</div>
      </div>
    <div class="form">
      <el-form label-width="120px" class="demo-ruleForm">
        <el-form-item label="公司地址：" prop="identify">
          <baidu-map class="map" :center="information" :zoom="zoom" :min-zoom="minZoom" :max-zoom="maxZoom" :scroll-wheel-zoom="true" @ready="handler">
            <bm-scale :enableGeolocation="true" anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            <bm-marker :position="information" animation="BMAP_ANIMATION_BOUNCE" :offset="{width: -30, height:30}" @click="infoWindowOpen">
              <bm-info-window message="'123123123'" :position="information" :show="show" @close="infoWindowClose" @open="infoWindowOpen" :closeOnClick="false" :width="220" :height="60">
                <p>{{contents}}</p>
              </bm-info-window>
            </bm-marker>
          </baidu-map>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="success" @click="toChange()">编辑</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Info',
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
  created () {
    this.information = {
      lng: 113.328395, 
      lat: 23.131922
    }
  },
  computed: {
    contents () {
      return '经度' + this.information.lng + ';' + '纬度' + this.information.lat
    }
  },
  methods: {
    handler ({BMap, map}) {
    },
    infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
    },
    toChange () {
      this.$router.push('/personal/map/change')
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
    width: 800px;
    height: 550px;
    border: 1px solid #0d8e52;
    font-size: 12px;
  }
</style>
