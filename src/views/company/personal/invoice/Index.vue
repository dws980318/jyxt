<template>
  <div class="information">
    <div class="form">
      <el-form label-width="120px" class="demo-ruleForm">
        <el-form-item label="发票抬头：" prop="invoice">
          <p>{{information.invoice}}</p>
        </el-form-item>
        <el-form-item label="纳税人识别号：" prop="identify">
          <p>{{information.identify}}</p>
        </el-form-item>
        <el-form-item label="发票注册地址：" prop="address">
          <p>{{information.address}}</p>
        </el-form-item>
        <el-form-item label="开户银行：" prop="bank">
          <p>{{information.bank}}</p>
        </el-form-item>
        <el-form-item label="开户账号：" prop="account">
          <p>{{information.account}}</p>
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
        invoice: '广州XXXX公司',
        identify: '959789SDFS4D887564SD65F4654',
        bank: '广州XXXX银行',
        address: '广州天河区XXXXXXXXXX',
        account: '4654651321879845454631'
      }
    }
  },
  created () {
  },
  methods: {
    toChange () {
      this.$router.push('/personal/invoice/change')
    }
  }
}
</script>

<style scoped>
  .information{
    width: 100%;
    height: auto;
    padding: 20px 10px;
  }
  .avator{
    width: 100%;
    height: 80px;
  }
  .avator_main{
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .avator_main img{
    width: 100%;
    height: 100%;
  }
  .form{
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
</style>
