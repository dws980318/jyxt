<template>
    <div>
        <div class="container">
            <div class="tit">
                <h4>我的预约</h4>
            </div>
            <div class="list">
                <ul>
                    <li v-for="item in lists" :key="item.value">
                        <div class="name">{{item.name}}</div>
                        <div class="info">
                            <div>院系：{{item.academy}}</div>
                            <div>预约时间：{{item.time}}</div>
                            <div>预约地点：{{item.site}}</div>
                        </div>
                        <div class="control">
                            <div><el-button>查看</el-button></div>
                            <div><el-button>修改</el-button></div>
                            <div><el-button>删除</el-button></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="pagination">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="40">
                </el-pagination>
            </div>
            <div class="footer">
                <div>
                    <span>当前时间：2018年12月20日 10：20：31</span>
                    <span>©  2015-2018 JOBSYS.CN</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 1,

        lists: [
            {
                value: "1",
                name: "陈瑱楠",
                academy: "金融管理学系",
                time: "2019-03-21",
                site: "北区六栋阶梯3教室"
            },
            {
                value: "2",
                name: "陈瑱楠",
                academy: "金融管理学系",
                time: "2019-03-21",
                site: "北区六栋阶梯3教室"
            },
            {
                value: "3",
                name: "陈瑱楠",
                academy: "金融管理学系",
                time: "2019-03-21",
                site: "北区六栋阶梯3教室"
            },
            {
                value: "4",
                name: "陈瑱楠",
                academy: "金融管理学系",
                time: "2019-03-21",
                site: "北区六栋阶梯3教室"
            },
            {
                value: "5",
                name: "陈瑱楠",
                academy: "金融管理学系",
                time: "2019-03-21",
                site: "北区六栋阶梯3教室"
            },
            {
                value: "6",
                name: "陈瑱楠",
                academy: "金融管理学系",
                time: "2019-03-21",
                site: "北区六栋阶梯3教室"
            },
        ]
      };
    }
}
</script>

<style scoped>
.container {
    position: relative;
    width: 100%;
    min-width: 1080px;
    height: 1200px;
    background-color: #e4e4e4;
    border: 1px solid #c9c9c9;
    margin-top: 20px;
    padding: 20px;
}
.tit{
    width: 100%;
    height: 50px;
    line-height: 50px;
    border: 1px solid #c9c9c9;
    border-radius: 5px 5px 0 0;
    background-color: #fff;
    padding: 0 20px;
}
.tit h4 {
    font-size: 16px;
    font-weight: normal;
}
.pagination {
    width: 100%;
    height: 50px;
    border: 1px solid #c9c9c9;
    background-color: #fff;
    padding: 10px 20px 0;
    border-radius: 0 0 5px 5px ;
}
.list {
    width: 100%;
    border: 1px solid #c9c9c9;
    background-color: #fff;
}
.list ul li {
    display: flex;
    justify-content: space-between;
    height: 150px;
    text-align: center;
    border-bottom: 1px solid #c9c9c9;
}
.list ul li div{
    width: 33.3%;
}
.list .name {
    font-size: 20px;
    line-height: 150px;
}

.list .info {
    margin-top: 15px;
    line-height: 150px;
}
.list .info div{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
}
.list .control div{
    width: 100%;
    height: 40px;
}
.list .control div .el-button {
    height: 28px;
    padding: 0 20px;
    margin-top: 15px;
    color: #fff;
    background-color: #1C84C6;
    cursor: pointer;
}

.footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
}
.footer div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
    border: 1px solid #c9c9c9;
    border-radius: 5px 5px 0 0;
    background-color: #fff;
}
.footer span {
    font-size: 14px;
    color: #333;
}
</style>
