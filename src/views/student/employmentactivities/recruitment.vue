<template>
  <div class="recruitment bg">
    <div class="recruitment-title border-b flex-bt">
      <div>招聘会</div>
      <div class="recruitment-title-content">
        <el-input class="w-30" v-model="input" placeholder="快速查询"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索条件</el-button>
        <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
      </div>
    </div>
    <div class="recruitment-content">
      <el-tabs v-model="recruitmentName" type="card">
        <el-tab-pane label="所有招聘会" name="first">
          <div class="recruitmentlist border-b">
            <div class="w-one">
              <div class="margin-t">
                未报名
              </div>
              <div class="margin-f">
                已过期
              </div>
            </div>
            <div class="w-two">
              <div class="liheight">2018年海交会全球“百城同台”大学生双选会招聘会</div>
            </div>
            <div class="w-four">
              <div class="liheight">
                <i class="el-icon-location"></i>
                <span>广州大学</span>
              </div>
              <div class="liheight">
                <i class="el-icon-location"></i> 大学教室11.2馆
              </div>
              <div class="liheight">
                开始时间：
                <span>2018-12-21 10：00</span>
              </div>
              <div class="liheight">
                结束 时间：
                <span>2018-12-21 10：00</span>
              </div>
            </div>
            <div class="w-one center">
              <div class="liheight">1627</div>
              <div class="liheight">浏览</div>
            </div>
            <div class="w-one center">
              <div class="liheight">112</div>
              <div class="liheight">已报名</div>
              <div class="liheight">
                <span>限200人</span>
              </div>
            </div>
            <div class="w-one">
              <div class="line">
                <el-button type="success">
                  更新
                  <i class="el-icon-caret-bottom"></i>
                </el-button>
              </div>
            </div>
          </div>
          <div class="recruitmentlist border-b">
            <div class="w-one">
             <div class="margin-t">
                未报名
              </div>
              <div class="margin-f">
                已过期
              </div>
            </div>
            <div class="w-two">
              <div class="liheight">2018年海交会全球“百城同台”大学生双选会招聘会</div>
            </div>
            <div class="w-four">
              <div class="liheight">
                <i class="el-icon-location"></i>
                <span>广州大学</span>
              </div>
              <div class="liheight">
                <i class="el-icon-location"></i> 大学教室11.2馆
              </div>
              <div class="liheight">
                开始时间：
                <span>2018-12-21 10：00</span>
              </div>
              <div class="liheight">
                结束 时间：
                <span>2018-12-21 10：00</span>
              </div>
            </div>
            <div class="w-one center">
              <div class="liheight">1627</div>
              <div class="liheight">浏览</div>
            </div>
            <div class="w-one center">
              <div class="liheight">112</div>
              <div class="liheight">已报名</div>
              <div class="liheight">
                <span>限200人</span>
              </div>
            </div>
            <div class="w-one">
              <div class="line">
                
                <el-button type="success">
                  更新
                  <i class="el-icon-caret-bottom"></i>
                </el-button>
              </div>
            </div>
          </div>
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
            ></el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已报名" name="second">
          <div class="recruitmentlist border-b">
            <div class="w-one">
              <div class="margin-t">
                未报名
              </div>
              <div class="margin-f">
                已过期
              </div>
            </div>
            <div class="w-two">
              <div class="liheight">2018年海交会全球“百城同台”大学生双选会招聘会</div>
            </div>
            <div class="w-four">
              <div class="liheight">
                <i class="el-icon-location"></i>
                <span>广州大学</span>
              </div>
              <div class="liheight">
                <i class="el-icon-location"></i> 大学教室11.2馆
              </div>
              <div class="liheight">
                开始时间：
                <span>2018-12-21 10：00</span>
              </div>
              <div class="liheight">
                结束 时间：
                <span>2018-12-21 10：00</span>
              </div>
            </div>
            <div class="w-one center">
              <div class="liheight">1627</div>
              <div class="liheight">浏览</div>
            </div>
            <div class="w-one center">
              <div class="liheight">112</div>
              <div class="liheight">已报名</div>
              <div class="liheight">
                <span>限200人</span>
              </div>
            </div>
            <div class="w-one">
              <div class="line">
                
                <el-button type="success">
                  更新
                  <i class="el-icon-caret-bottom"></i>
                </el-button>
              </div>
            </div>
          </div>
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
            ></el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已参加" name="third">
          <div class="recruitmentlist border-b">
            <div class="w-one">
              <div class="margin-t">
                未报名
              </div>
              <div class="margin-f">
                已过期
              </div>
            </div>
            <div class="w-two">
              <div class="liheight">2018年海交会全球“百城同台”大学生双选会招聘会</div>
            </div>
            <div class="w-four">
              <div class="liheight">
                <i class="el-icon-location"></i>
                <span>广州大学</span>
              </div>
              <div class="liheight">
                <i class="el-icon-location"></i> 大学教室11.2馆
              </div>
              <div class="liheight">
                开始时间：
                <span>2018-12-21 10：00</span>
              </div>
              <div class="liheight">
                结束 时间：
                <span>2018-12-21 10：00</span>
              </div>
            </div>
            <div class="w-one center">
              <div class="liheight">1627</div>
              <div class="liheight">浏览</div>
            </div>
            <div class="w-one center">
              <div class="liheight">112</div>
              <div class="liheight">已报名</div>
              <div class="liheight">
                <span>限200人</span>
              </div>
            </div>
            <div class="w-one">
              <div class="line">
                
                <el-button type="success">
                  更新
                  <i class="el-icon-caret-bottom"></i>
                </el-button>
              </div>
            </div>
          </div>
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
            ></el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import '../../../common/css/student/style.css';
export default {
  data() {
    return {
      input: "",
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      recruitmentName: "first"
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style scoped>
.margin-t,.margin-f {
  width: 70px;
  height: 30px;
  overflow: hidden;
  color: #fff;
  text-align: center;
  line-height: 30px;
  margin: 10px 0;
}
.margin-t {
  margin-top: 20px;
  background-color: orange;
}
.margin-f {
  background-color: orangered;
}
.recruitment-title-content {
  display: flex;
  height: 40px;
  align-items: center;
}
.block {
    height: 100px;
    display: flex;align-items: center;
}
.flex-bt {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.margin-t {
  margin-top: 30%;
}
.liheight2 {
  line-height: 60px;
}
.liheight {
  line-height: 40px;
}
.liheight span {
  color: red;
}
.center {
  text-align: center;
  color: dodgerblue;
}
.line {
  height: 100px;
  display: flex;
  align-items: center;
}
.btn {
  padding: 5px 10px;
  color: #fff;
}
.btn-f {
  padding: 5px;
}
.recruitmentlist {
  font-size: 14px;
  padding: 20px 0;
  min-height: 100px;
  display: flex;
}
.w-8 {
  width: 8%;
}
.w-30 {
  width: 300px;
}
.w-one {
  width: 10%;
}
.w-two {
  width: 40%;
  display: flex;
  align-items: center;
}
.w-five {
  width: 15%;
}
.w-three {
  width: 30%;
}
.w-5 {
  width: 6%;
}
.w-four {
  width: 20%;
}
.el-tabs__nav-scroll {
  border-bottom: 1px solid #999;
}
.recruitment-content {
  padding: 20px;
}
.recruitment {
  margin: 20px;
  border: 1px solid #999;
}
.border-b {
  border-bottom: 1px solid #999;
}
.recruitment-title {
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
}
</style>
