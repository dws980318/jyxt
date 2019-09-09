<template>
  <div class="employment">
    <div class="employment-heared">
      <i class="el-icon-warning"></i>
      <span>请认真核实就业信息</span>
    </div>
    <div class="employment-content">
      尚无记录
    </div>
    <!-- <div class="footer-all bg">
      <div>当前时间：2018年12月20日 10：20：31</div>
      <div>©  2015-2018 JOBSYS.CN</div>
    </div>-->
  </div>
</template>

<script>
import '../../../../common/css/student/style.css';
  export default {
    data() {
      return {}
    },
  };
</script>

<style>
  .employment {
    padding: 20px;
  }
  .employment-heared {
    width: 100%;
    height: 50px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    color: #fff;
    margin-bottom: 20px;
    background-color: rgb(8, 189, 189);
  }

  .employment-content {
    text-align: center;
    min-height: 300px;
    border: 1px solid #999;
    background-color: #fff;
  }
</style>
