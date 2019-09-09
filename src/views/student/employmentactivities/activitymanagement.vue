<template>
  <div class="active bg">
    <div class="active-title border-b flex-bt">
      <div>活动</div>
      <div class="active-title-content">
        <el-input class="w-30" v-model="input" placeholder="快速查询"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索条件</el-button>
        <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
      </div>
    </div>
    <div class="active-content">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="所有活动" name="first">
          <div class="activelist border-b" v-for="(item,index) in activelist" :key="index">
            <div class="w-8">
              <div class="margin-t">未报名</div>
              <div class="margin-f">已过期</div>
            </div>
            <div class="w-three">
              <div class="liheight">{{item.title}}</div>
              <div class="liheight">创建管理：{{item.createTime}}</div>
              <div class="liheight">分类：就业讲坛{{item.createBy}}</div>
            </div>
            <div class="w-four">
              <div class="liheight">
                <i class="el-icon-location"></i>
                <span>广州大学</span>
              </div>
              <div class="liheight">
                <i class="el-icon-location"></i> {{item.activityAddress}}
              </div>
              <div class="liheight">
                开始时间：
                <span>{{item.startTime}}</span>
              </div>
              <div class="liheight">
                结束 时间：
                <span>{{item.endTime}}</span>
              </div>
            </div>
            <div class="w-four">
              <div class="liheight">开始报名： 2018-12-21 10：00</div>
              <div class="liheight">结束 报名 2018-12-21 10：00</div>
              <div class="liheight">
                还有：
                <span>13小时</span>
              </div>
              <div class="liheight">我的报名：</div>
            </div>
            <div class="w-5 center">
              <div class="liheight">{{item.stuConfine}}</div>
              <div class="liheight">浏览</div>
            </div>
            <div class="w-5 center">
              <div class="liheight">112</div>
              <div class="liheight">已报名</div>
              <div class="liheight">
                <span>限200人</span>
              </div>
            </div>
            <div class="w-one">
              <div class="line">
                <span class="add">
                  <i class="el-icon-plus"></i>
                </span>
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
              :current-page="pagenum"
              :page-size="pages"
              layout="total, prev, pager, next, jumper"
              :total="total"
            ></el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已报名" name="second">
          <div class="activelist border-b" v-for="(item,index) in activelist" :key="index">
            <div class="w-8">
              <div class="margin-t">未报名</div>
              <div class="margin-f">已过期</div>
            </div>
            <div class="w-three">
              <div class="liheight">{{item.title}}</div>
              <div class="liheight">创建管理：{{item.createTime}}</div>
              <div class="liheight">分类：就业讲坛{{item.createBy}}</div>
            </div>
            <div class="w-four">
              <div class="liheight">
                <i class="el-icon-location"></i>
                <span>广州大学</span>
              </div>
              <div class="liheight">
                <i class="el-icon-location"></i> {{item.activityAddress}}
              </div>
              <div class="liheight">
                开始时间：
                <span>{{item.startTime}}</span>
              </div>
              <div class="liheight">
                结束 时间：
                <span>{{item.endTime}}</span>
              </div>
            </div>
            <div class="w-four">
              <div class="liheight">开始报名： 2018-12-21 10：00</div>
              <div class="liheight">结束 报名 2018-12-21 10：00</div>
              <div class="liheight">
                还有：
                <span>13小时</span>
              </div>
              <div class="liheight">我的报名：</div>
            </div>
            <div class="w-5 center">
              <div class="liheight">{{item.stuConfine}}</div>
              <div class="liheight">浏览</div>
            </div>
            <div class="w-5 center">
              <div class="liheight">112</div>
              <div class="liheight">已报名</div>
              <div class="liheight">
                <span>限200人</span>
              </div>
            </div>
            <div class="w-one">
              <div class="line">
                <span class="add">
                  <i class="el-icon-plus"></i>
                </span>
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
              :current-page="pagenum"
              :page-size="pages"
              layout="total, prev, pager, next, jumper"
              :total="total"
            ></el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已参加" name="third">
          <div class="activelist border-b" v-for="(item,index) in activelist" :key="index">
            <div class="w-8">
              <div class="margin-t">未报名</div>
              <div class="margin-f">已过期</div>
            </div>
            <div class="w-three">
              <div class="liheight">{{item.title}}</div>
              <div class="liheight">创建管理：{{item.createTime}}</div>
              <div class="liheight">分类：就业讲坛{{item.createBy}}</div>
            </div>
            <div class="w-four">
              <div class="liheight">
                <i class="el-icon-location"></i>
                <span>广州大学</span>
              </div>
              <div class="liheight">
                <i class="el-icon-location"></i> {{item.activityAddress}}
              </div>
              <div class="liheight">
                开始时间：
                <span>{{item.startTime}}</span>
              </div>
              <div class="liheight">
                结束 时间：
                <span>{{item.endTime}}</span>
              </div>
            </div>
            <div class="w-four">
              <div class="liheight">开始报名： 2018-12-21 10：00</div>
              <div class="liheight">结束 报名 2018-12-21 10：00</div>
              <div class="liheight">
                还有：
                <span>13小时</span>
              </div>
              <div class="liheight">我的报名：</div>
            </div>
            <div class="w-5 center">
              <div class="liheight">{{item.stuConfine}}</div>
              <div class="liheight">浏览</div>
            </div>
            <div class="w-5 center">
              <div class="liheight">112</div>
              <div class="liheight">已报名</div>
              <div class="liheight">
                <span>限200人</span>
              </div>
            </div>
            <div class="w-one">
              <div class="line">
                <span class="add">
                  <i class="el-icon-plus"></i>
                </span>
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
              :current-page="pagenum"
              :page-size="pages"
              layout="total, prev, pager, next, jumper"
              :total="total"
            ></el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import "../../../common/css/student/style.css";
export default {
  data() {
    return {
      activelist:[],
      total: 0,
      pages: 15,
      pagenum: 0,
      input: "",
      activeName: "first"
    };
  },
  created() {
    this.active();
  },
  methods: {
    active() {
      this.api
        .active()
        .then(res => {
          console.log(res);
          this.activelist = res.data.list;
          this.total = res.data.total;
          this.pages = res.data.pageSize;
          this.pagenum = res.data.pageNum;
          console.log(this.activelist);
        })
        .catch(err => {
          console.log(err);
        });
    },
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
.add {
  display: inline-block;
  padding: 5px;
  background-color: deepskyblue;
  margin-right: 5px;
  color: #fff;
}
.active-title-content {
  display: flex;
  height: 40px;
  align-items: center;
}
.block {
  height: 100px;
  display: flex;
  align-items: center;
}
.flex-bt {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.margin-t,
.margin-f {
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
.activelist {
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
  width: 35%;
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
.active-content {
  padding: 20px;
}
.active {
  margin: 20px;
  border: 1px solid #999;
}
.border-b {
  border-bottom: 1px solid #999;
}
.active-title {
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  overflow: hidden;
}
</style>
