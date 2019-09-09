<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/recruiting/activity/count">报名情况统计</el-breadcrumb-item>
        <el-breadcrumb-item>查看</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="form">
        <div class="el-notification__title form_title">基本信息</div>
        <el-form :model="information" label-width="100px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item v-if="information.id" label="id：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="栏目：" prop="type">
            <p>{{information.type}}</p>
          </el-form-item>
          <el-form-item label="二级栏目：" prop="secondType">
            <p>{{information.secondType}}</p>
          </el-form-item>
          <el-form-item label="标题：" prop="title">
            <p>{{information.title}}</p>
          </el-form-item>
          <el-form-item label="缩略图：" prop="image">
            <img v-if="information.image" :src="information.image" class="avatar">
          </el-form-item>
          <el-form-item label="发布时间：" prop="time">
            <p>{{information.time}}</p>
          </el-form-item>
<!--          <el-form-item label="活动地址：" prop="place">-->
<!--            <p>{{information.place}}</p>-->
<!--          </el-form-item>-->
          <el-form-item label="排序：" prop="sort">
            <p>{{information.sort}}</p>
          </el-form-item>
          <el-form-item label="状态：" prop="open">
            <el-switch v-model="information.open" active-color="#13ce66" inactive-color="#999" :disabled="true"></el-switch>
          </el-form-item>
          <el-form-item v-if="information.id" label="阅读：" prop="title">
            <p>{{information.view}}</p>
          </el-form-item>
          <el-form-item label="内容：" prop="content">
            <tinymce-editor v-model="information.content" ref="editor"></tinymce-editor>
          </el-form-item>
        </el-form>
      </div>
      <div class="form">
        <div class="el-notification__title form_title">学生报名情况</div>
      </div>
      <div class="form">
        <el-button size="small" type="primary" @click="onSubmit">确定</el-button>
        <el-button size="small" @click="$router.back(-1)">取消</el-button>
      </div>
    </div>
  </el-col>
</template>

<script>
import TinymceEditor from '@/components/tinymce-editor'
export default {
  name: 'Details',
  components: {
    TinymceEditor
  },
  data () {
    return {
      port: '',
      information: {
        type: '就业活动',
        secondType: '供需就业讲堂见面会',
        open: true,
        content: ''
      }
    }
  },
  watch: {
  },
  created () {
    this.port = this.$route.params.port
    if (this.$route.params.id) {
      this.loadObject(this.$route.params.id)
    }
  },
  methods: {
    loadObject (portId) {
      this.information = {
        id: portId,
        type: '就业活动',
        secondType: '就业讲堂',
        title: '这是见面会标题',
        time: '2019-04-15 02:00',
        place: '广州大学城CCCCCCCCC',
        image: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
        sort: 3,
        view: 998,
        open: false,
        content: '<p>&nbsp;</p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">大学小白的你，</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">还处于大学的迷茫期吗？</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">大四求职者的你，</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">还在艰辛的探索求职路吗？</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">……</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">10</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">月</span><span style="color:rgb(62,62,62);">11</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">日晚的</span><span style="color:rgb(62,62,62);">“</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">专业</span><span style="color:rgb(62,62,62);">-</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">行业</span><span style="color:rgb(62,62,62);">-</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">就业</span><span style="color:rgb(62,62,62);">”</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">课程为你揭开困惑的面纱。敲黑板画重点的时候到啦，小编在此双手奉上满满的干货！</span></p><p style="text-align:center;"><span style="color:rgb(62,62,62);">01</span></p><p style="text-align:center;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">沟通技巧轻易</span><span style="color:rgb(62,62,62);">get</span></p><p><span style="color:rgb(62,62,62);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img title="1543288438223844.png" alt="1.1.png" src="http://jobsys.oss-cn-shenzhen.aliyuncs.com/data/uploads/ueditor/image/20181127/1543288438223844.png"></span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">张悦导师，资深政府工作者。</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">通过真实形象的例子为你一一点破采取恰当沟通方式的重要性。</span></p><p style="text-align:left;">&nbsp;</p><p style="text-align:center;"><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">心理测试</span></strong></p><p><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img title="1543288512174066.png" alt="1.2.png" src="http://jobsys.oss-cn-shenzhen.aliyuncs.com/data/uploads/ueditor/image/20181127/1543288512174066.png"></span></strong></p><p><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;"><br></span></strong></p><p style="text-align:center;"><span style="color:rgb(20,19,20);font-family:\'宋体\';font-size:16px;">小试牛刀，通过套题测试，</span></p><p style="text-align:center;"><span style="color:rgb(20,19,20);font-family:\'宋体\';font-size:16px;">给自己的沟通现状做一个基础评估。</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">结果表明：仅有数人能总有较好或优秀的沟通技能，大部分人需要提高。</span></p><p style="text-align:left;">&nbsp;</p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">所谓</span><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:21px;">有效的沟通</span></strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">，是指在恰当的时候及适宜的场合用得体的方式表达思想和情感，并能被别人正确理解和执行。</span></p><p>&nbsp;</p><p style="text-align:center;"><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">互动游戏</span></strong></p><p style="text-align:center;"><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;"><img title="1543288641895447.png" alt="1.3.png" src="http://jobsys.oss-cn-shenzhen.aliyuncs.com/data/uploads/ueditor/image/20181127/1543288641895447.png"></span></strong></p><p><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;"><br></span></strong></p><p style="text-align:center;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">模拟不同场景一字不差的说出以上三句话，</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">体会因人而异的说话语气。</span></p><p style="text-align:center;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">上级对下级说话，语气应严谨权威；</span></p><p style="text-align:center;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">下级对上级说话，语气应谨慎谦虚；</span></p><p style="text-align:center;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">朋友与朋友说话，语气应随意亲切。</span></p><p style="text-align:center;"><span style="color:rgb(138,42,78);font-family:\'宋体\';font-size:16px;">小反思：你平时说话语气用对的吗？</span></p><p><span style="color:rgb(138,42,78);font-family:\'宋体\';font-size:16px;"><br></span></p><p style="text-align:center;"><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">沟通情商</span></strong></p><p style="text-align:center;"><span style="color:rgb(138,42,78);font-family:\'宋体\';font-size:16px;"><img title="1543288740632008.png" alt="1.4.png" src="http://jobsys.oss-cn-shenzhen.aliyuncs.com/data/uploads/ueditor/image/20181127/1543288740632008.png"></span></p><p><span style="color:rgb(138,42,78);font-family:\'宋体\';font-size:16px;"><br></span></p><p style="text-align:center;"><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;"><br></span></strong></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">一个人的</span><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:18px;">成功</span></strong><span style="color:rgb(62,62,62);">,</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">只有</span><span style="color:rgb(62,62,62);">20%</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">归诸智商的高低</span><span style="color:rgb(62,62,62);">,</span></p><p style="text-align:left;"><strong><span style="color:rgb(62,62,62);">80%</span></strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">则取决于</span><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:18px;">情商</span></strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">。</span></p><p style="text-align:left;"><span style="color:rgb(29,8,150);font-family:\'宋体\';font-size:18px;">情商的</span><span style="color:rgb(29,8,150);">5</span><span style="color:rgb(29,8,150);font-family:\'宋体\';font-size:18px;">个标准：</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">1</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">、具有自知之明</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">2</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">、能够情绪控制</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">3</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">、善于自我激励</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">4</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">、经常换位思考</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">5</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">、长于人际沟通</span></p><p style="text-align:center;"><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;"><br></span></strong></p><p><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;"><br></span></strong></p><p style="text-align:center;"><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">职场沟通</span></strong></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">&nbsp;</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">与上级沟通</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">相处小技巧：要用具体事实有效赞美，或者间接赞美，要善于迂回进言，把握沟通尺度；要主动替上级担责分忧。</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">入手小建议：与上级沟通，需要仔细聆听上级讲话，探讨目标可行性，拟定详细计划，做好过程沟通，及时总结汇报。</span></p><p><span style="color:rgb(138,42,78);font-family:\'宋体\';font-size:16px;"><br></span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">与同事沟通</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">1</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">、明确职责，做好分工。</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">2</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">、以支持性沟通替代防御性沟通。</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">3</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">、要懂得退让和妥协。</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">4</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">、要注重协调和合作。</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">5</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">、以双赢为目标做好组织协定。</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">&nbsp;</span></p><p style="text-align:center;">&nbsp;</p><p style="text-align:center;"><span style="color:rgb(62,62,62);">02</span></p><p style="text-align:center;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">认识自己，发展自己</span></p><p style="text-align:center;"><span style="color:rgb(138,42,78);font-family:\'宋体\';font-size:16px;"><img title="1543288800462627.png" alt="1.5.png" src="http://jobsys.oss-cn-shenzhen.aliyuncs.com/data/uploads/ueditor/image/20181127/1543288800462627.png"></span></p><p><span style="color:rgb(138,42,78);font-family:\'宋体\';font-size:16px;"><br></span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">陈粤生导师，资深人力资源管理。</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">具有</span><span style="color:rgb(62,62,62);">20</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">年以上跨国公司与民企工作经验，</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">为你职业生涯发展打强辅助。</span></p><p style="text-align:left;">&nbsp;</p><p><strong><span style="color:rgb(62,62,62);"><br></span></strong> </p><p style="text-align:center;"><strong><span style="color:rgb(62,62,62);">&nbsp;</span></strong></p><p style="text-align:center;"><strong><span style="color:rgb(62,62,62);">STAR-</span></strong><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">学习原则</span></strong></p><p style="text-align:center;"><span style="color:rgb(138,42,78);font-family:\'宋体\';font-size:16px;"><img title="1543288840176467.png" alt="1.6.png" src="http://jobsys.oss-cn-shenzhen.aliyuncs.com/data/uploads/ueditor/image/20181127/1543288840176467.png"></span></p><p><span style="color:rgb(138,42,78);font-family:\'宋体\';font-size:16px;"><br></span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">&nbsp;</span></p><p style="text-align:left;"><span style="color:rgb(20,19,20);font-family:\'宋体\';font-size:16px;">此</span><span style="color:rgb(20,19,20);">STAR</span><span style="color:rgb(20,19,20);font-family:\'宋体\';font-size:16px;">不同于彼</span><span style="color:rgb(20,19,20);">STAR</span><span style="color:rgb(20,19,20);font-family:\'宋体\';font-size:16px;">：</span></p><p style="text-align:left;"><span style="color:rgb(138,42,78);">S-Share&nbsp; &nbsp; &nbsp; &nbsp; </span><span style="color:rgb(138,42,78);font-family:\'宋体\';font-size:16px;">分享</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">T-Think&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">思考</span></p><p style="text-align:left;"><span style="color:rgb(29,8,150);">A-Action&nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color:rgb(29,8,150);font-family:\'宋体\';font-size:16px;">行动</span></p><p style="text-align:left;"><span style="color:rgb(85,9,141);">R-Review&nbsp; &nbsp; &nbsp; </span><span style="color:rgb(85,9,141);font-family:\'宋体\';font-size:16px;">回顾</span></p><p style="text-align:left;"><strong><span style="color:rgb(62,62,62);">&nbsp;</span></strong></p><p><span style="color:rgb(138,42,78);font-family:\'宋体\';font-size:16px;"><br></span></p><p style="text-align:center;"><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">小组分享</span></strong></p><p style="text-align:center;"><span style="color:rgb(138,42,78);font-family:\'宋体\';font-size:16px;"><img title="1543288887570289.png" alt="1.7.png" src="http://jobsys.oss-cn-shenzhen.aliyuncs.com/data/uploads/ueditor/image/20181127/1543288887570289.png"></span></p><p><span style="color:rgb(138,42,78);font-family:\'宋体\';font-size:16px;"><br></span></p><p style="text-align:left;"><span style="color:rgb(20,19,20);">#8</span><span style="color:rgb(20,19,20);font-family:\'宋体\';font-size:16px;">分钟的小型无领导小组分享会</span><span style="color:rgb(20,19,20);">#</span></p><p style="text-align:left;"><span style="color:rgb(20,19,20);">1</span><span style="color:rgb(20,19,20);font-family:\'宋体\';font-size:16px;">、职业是什么？</span></p><p style="text-align:left;"><span style="color:rgb(20,19,20);">2</span><span style="color:rgb(20,19,20);font-family:\'宋体\';font-size:16px;">、你梦想的职业是什么？</span></p><p style="text-align:left;"><span style="color:rgb(20,19,20);">3</span><span style="color:rgb(20,19,20);font-family:\'宋体\';font-size:16px;">、你将如何实现它？</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">&nbsp; &nbsp; &nbsp;</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">老师简明扼要的总结了工作与职业两者的区别。家庭、公司、伙伴、你自己等方面的压力都在影响你的求职之路。阐述了冰山模型，建议同学们在职业选择中，认真的自我评估，对职业进行调查研究。以终为结，独立思考。适当给自己独处的时间，书面写下来，寻求外部帮助。</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">&nbsp;</span></p><p style="text-align:center;"><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">渠道推荐</span></strong></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">&nbsp;</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">各种行业及工作信息</span></p><p style="text-align:left;"><a href="http://www.zhaopin.com/"><span style="color:rgb(51,122,183);">www.zhaopin.com</span></a><span style="color:rgb(62,62,62);">&nbsp;</span><span style="color:rgb(20,19,20);font-family:\'宋体\';font-size:16px;">智联招聘</span></p><p style="text-align:left;"><a href="http://www.51job.com/"><span style="color:rgb(51,122,183);">www.51job.com</span></a><span style="color:rgb(62,62,62);">&nbsp;&nbsp;</span><span style="color:rgb(20,19,20);font-family:\'宋体\';font-size:16px;">前程无忧</span></p><p style="text-align:left;"><a href="http://www.yingjiesheng.com/"><span style="color:rgb(51,122,183);">www.yingjiesheng.com</span></a><span style="color:rgb(62,62,62);">&nbsp;&nbsp;</span><span style="color:rgb(20,19,20);font-family:\'宋体\';font-size:16px;">应届生求职网</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">自我评估</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">霍兰德职业兴趣测评；</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">MBTI</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">职业性格分析；</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">个人能力素质评估模型；</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">九型人格测试；</span></p><p style="text-align:left;"><span style="color:rgb(62,62,62);">“</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">才储</span><span style="color:rgb(62,62,62);">”</span><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">测评：</span></p><p style="text-align:left;"><a href="http://www.apesk.com/index.html"><span style="color:rgb(51,122,183);">http://www.apesk.com/index.html</span></a></p><p style="text-align:left;"><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">专业测评：专业的咨询人员</span></p><p style="text-align:left;">&nbsp;</p><p style="text-align:center;"><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;">大合照</span></strong></p><p><span style="color:rgb(138,42,78);font-family:\'宋体\';font-size:16px;"></span></p><p style="text-align:center;"><strong><span style="color:rgb(62,62,62);font-family:\'宋体\';font-size:16px;"><img title="1543288947937577.png" alt="1.png" src="http://jobsys.oss-cn-shenzhen.aliyuncs.com/data/uploads/ueditor/image/20181127/1543288947937577.png"></span></strong></p><p>&nbsp;</p>\n'
      }
    },
    handleAvatarSuccess (res, file) {
      this.information.image = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    onSubmit () {
      console.log(this.information.content)
      // this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .breadcrumb{
    position: relative;
    width: 100%;
    height: 45px;
    padding-top: 20px;
  }
  .breadcrumb:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #42b983;
  }
  .form_title{
    padding: 10px 0;
  }
  .information {
    width: 100%;
    height: auto;
    padding-top: 20px;
  }
  .form {
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
  .el-form{
    padding: 0px;
  }
  .el-upload {
    border: 1px dashed #000;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 270px;
    height: 180px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 270px;
    height: 180px;
    display: block;
  }
</style>
