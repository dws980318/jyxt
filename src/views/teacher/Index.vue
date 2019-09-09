<template>
    <div>
        <div class="container">
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
  
}
</script>

<style scoped>
.container {
    position: relative;
    width: 100%;
    min-width: 1080px;
    height: 1000px;
    background-color: #e4e4e4;
    border: 1px solid #c9c9c9;
    margin-top: 20px;
    padding: 20px;
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

