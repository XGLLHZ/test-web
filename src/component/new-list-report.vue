<template>
    <div class="new-list">
        <div class="main-2-list">
            <ul>
                <li v-for="(item, index) in dataList" :key="index">
                    <div class="lis">
                        <router-link :to="{ path: '/newsreportinfo', query: { id: item.id } }">
                            <div class="li-a">{{ item.title }}</div>
                        </router-link>
                        <div class="li-b">
                            <img src="../static/wx.png">
                            <img src="../static/pyq.png">
                            <img src="../static/qq.png">
                            <img src="../static/wb.png">
                            <span>{{ item.time }}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="list-page">
            <el-pagination
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
        <div class="new-footer">
            <div class="footer-3">
                <span>版权所有</span>
                <el-divider direction="vertical"></el-divider>
                <span>2014 北京航空航天大学</span>
                <el-divider direction="vertical"></el-divider>
                <span>京ICP备05004617-3</span>
                <el-divider direction="vertical"></el-divider>
                <span>文保网安备案号1101080018</span>
            </div>
            <div class="footer-3">
                <el-divider direction="vertical"></el-divider>
                <span>地址: 北京市海淀区学院路37号</span>
                <el-divider direction="vertical"></el-divider>
                <span>邮编: 100191</span>
                <el-divider direction="vertical"></el-divider>
                <span>电话: 82317114</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'new-list-report',

    data() {
        return {
            dataList: [
                { id: 1, title: '科技组织与公共政策研究院2020赴今日头条调研科技组织与公共政策研究院2020赴今日头条调研',time: '2020-08-31'},
                { id: 1, title: '科技组织与公共政策研究院2020赴今日头条调研',time: '2020-08-31'},
                { id: 1, title: '科技组织与公共政策研究院2020赴今日头条调研',time: '2020-08-31'},
                { id: 1, title: '科技组织与公共政策研究院2020赴今日头条调研',time: '2020-08-31'},
                { id: 1, title: '科技组织与公共政策研究院2020赴今日头条调研',time: '2020-08-31'},
                { id: 1, title: '科技组织与公共政策研究院2020赴今日头条调研',time: '2020-08-31'},
                { id: 1, title: '科技组织与公共政策研究院2020赴今日头条调研',time: '2020-08-31'},
                { id: 1, title: '科技组织与公共政策研究院2020赴今日头条调研',time: '2020-08-31'},
                { id: 1, title: '科技组织与公共政策研究院2020赴今日头条调研',time: '2020-08-31'},
                { id: 1, title: '科技组织与公共政策研究院2020赴今日头条调研',time: '2020-08-31'}
            ]
        }
    }

}

</script>

<style scoped>

.new-list {
    margin: 20px 0px 0px 0px;
    padding: 0;
    width: 100%;
    height: 100%;
}

.main-2-list {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 500px;
}

.main-2-list ul {
    margin: 30px 0 30px 0;
    padding: 0;
    width: 100%;
    height: 100%;
    list-style: none;
}

.main-2-list ul li {
    margin: 0;
    padding: 0 0 20px 0;
    width: 100%;
    height: 5%;
}

.main-2-list ul li:hover {
    background-color: #dfdff8;
}

.main-2-list ul li a {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: black;
}

.main-2-list ul li a:hover {
    color: #0C153C;
    font-weight: bolder;
}

.lis {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

.li-a {
    margin: 0;
    padding: 10px 0 0 0;
    width: 70%;
    height: 100%;
    float: left;
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; 
    line-height: 150%;
}

.li-b {
    margin: 0;
    padding: 10px 0 0 0;
    width: 30%;
    height: 100%;
    line-height: 150%;
    float: right;
}

.li-b img {
    padding-right: 10px;
}

.li-b img:hover {
    cursor: pointer;
}

.list-page {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 50px;
    justify-content:center;
    align-items:center;
    display:-webkit-flex;
}

.new-footer {
    margin: 30px 0 0 0;
    padding: 30px 0 0 0;
    width: 100%;
    height: 100px;
    background-color: #0C153C;
    color: white;
    font-size: 12px;
}

.footer-3 {
    margin: 0;
    padding: 10px 0 10px 0;
    width: 100%;
    justify-content:center;
    align-items:center;
    display:-webkit-flex;
}

</style>




