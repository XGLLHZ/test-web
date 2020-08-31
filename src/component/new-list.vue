<template>
    <div class="new-list">
        <div class="list-card">
            <el-carousel height="300px">
                <el-carousel-item v-for="(item, index) in dataList" :key="index">
                    <div class="cards" :style="{ 'background-image': 'url('+ item.url +')' }">
                        <div class="cards-1">{{ item.title }}</div>
                        <div class="cards-2">发布时间:  {{ item.time }}</div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="list-search">
            <el-input placeholder="请输入您想要查找的新闻内容......" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <div class="list-hot">
            <div class="hot-left">今日热词&nbsp;&nbsp;:&nbsp;&nbsp;</div>
            <div class="hot-right">
                <ul>
                    <li v-for="(item, index) in hotWord" :key="">
                        <router-link :to="{ path: '/', query: { id: item.id } }">{{ item.name }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="list-new">
            <ul>
                <li v-for="(item, index) in dataList" :key="index">
                    <router-link :to="{ path: '/newsinfo', query: { id: item.id } }">
                        <span class="li-a">{{ item.title }}</span>
                        <span class="li-b">{{ item.time }}</span>
                    </router-link>
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
            <div class="footer-1">
                <span>当前点击量:&nbsp;&nbsp;1000&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&ensp;&ensp;</span>
                <span>更新时间:&nbsp;&nbsp;2020-08-29</span>
            </div>
            <div class="footer-2">
                <ul>
                    <li v-for="(item, index) in monthList" :key="index">
                        <router-link :to="{ path: '/', query: { id: item.id } }">{{ item.value }}</router-link>
                    </li>
                </ul>
            </div>
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
    name: 'new-list',

    data() {
        return {
            monthList: [
                { id: '1', value: '一月' },
                { id: '2', value: '二月' },
                { id: '3', value: '三月' },
                { id: '4', value: '四月' },
                { id: '5', value: '五月' },
                { id: '6', value: '六月' },
                { id: '7', value: '七月' },
                { id: '8', value: '八月' },
                { id: '9', value: '九月' },
                { id: '10', value: '十月' },
                { id: '11', value: '十一月' },
                { id: '12', value: '十二月' }
            ],
            dataList: [
                { id: 1, title: '科技组织与公共政策院2020赴今日头条调研', url: require('../static/new.png'), time: '2020-08-29' },
                { id: 1, title: '科技组织与公共政策院2020赴今日头条调研', url: require('../static/new.png'), time: '2020-08-29' },
                { id: 1, title: '科技组织与公共政策院2020赴今日头条调研科技组织与公共政策院2020赴今日头条调研', url: require('../static/new.png'), time: '2020-08-29' },
                { id: 1, title: '科技组织与公共政策院2020赴今日头条调研', url: require('../static/new.png'), time: '2020-08-29' },
                { id: 1, title: '科技组织与公共政策院2020赴今日头条调研', url: require('../static/new.png'), time: '2020-08-29' },
                { id: 1, title: '科技组织与公共政策院2020赴今日头条调研', url: require('../static/new.png'), time: '2020-08-29' },
                { id: 1, title: '科技组织与公共政策院2020赴今日头条调研', url: require('../static/new.png'), time: '2020-08-29' },
                { id: 1, title: '科技组织与公共政策院2020赴今日头条调研', url: require('../static/new.png'), time: '2020-08-29' },
                { id: 1, title: '科技组织与公共政策院2020赴今日头条调研', url: require('../static/new.png'), time: '2020-08-29' },
                { id: 1, title: '科技组织与公共政策院2020赴今日头条调研', url: require('../static/new.png'), time: '2020-08-29' }
            ],
            hotWord: [
                { id: 1, name: '科技组织' },
                { id: 1, name: '今日头条' },
                { id: 1, name: '调研' },
                { id: 1, name: '科技' },
                { id: 1, name: '条款' },
                { id: 1, name: '政策' },
                { id: 1, name: '调研' },
                { id: 1, name: '今日头条' },
                { id: 1, name: '科技' },
                { id: 1, name: '条款' },
                { id: 1, name: '政策' },
                { id: 1, name: '今日头条' },
                { id: 1, name: '科技' },
                { id: 1, name: '条款' },
                { id: 1, name: '政策' }
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

.list-card {
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: white;
}

.cards {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.cards-1 {
    margin: 30% 0 0 0;
    padding: 0;
    width: 100%;
    height: 12%;
    color: white;
    font-size: 15px;
    background-color: black;
    opacity: 0.5;
    justify-content:center;
    align-items:center;
    display:-webkit-flex;
}
.cards-2 {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 12%;
    color: white;
    font-size: 12px;
    background-color: black;
    opacity: 0.5;
    justify-content:center;
    align-items:center;
    display:-webkit-flex;
}

.list-search {
    margin: 20px 0 15px 0;
    padding: 0;
    width: 100%;
}

.list-search input {
    border: 1px solid black;
}

.list-hot {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 60px;
}

.hot-left {
    margin: 0;
    padding: 0;
    width: 10%;
    float: left;
    font-size: 12px;
}

.hot-right {
    margin: 0;
    padding: 0;
    width: 90%;
    float: right;
}

.hot-right ul {
    width: 100%;
    list-style: none;
}

.hot-right ul li {
    float: left;
    padding: 0px 10px 10px 0px;
}

.hot-right ul li a {
    text-decoration: none;
    color: #0C153C;
    font-size: 15px;
    font-weight: bolder;
}

.list-new {
    margin: 0;
    padding: 20px 0 0 0;
    width: 100%;
    height: 400px;
}

.list-new ul {
    width: 100%;
    list-style: none;
}

.list-new ul li {
    width: 100%;
}

.list-new ul li a {
    width: 100%;
    text-decoration: none;
    color: black;
}

.list-new ul li a:hover {
    text-decoration: none;
    color: #0C153C;
    font-weight: bolder;
}

.li-a {
    display: block;
    float: left;
    width: 75%;
    line-height: 230%;
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; 
}

.li-b {
    display: block;
    float: right;
    width: 20%;
    line-height: 230%;
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
    padding: 0;
    width: 100%;
    height: 250px;
    background-color: #0C153C;
    color: white;
    font-size: 12px;
}

.footer-1 {
    margin: 0;
    padding: 20px;
    width: 100%;
    justify-content:center;
    align-items:center;
    display:-webkit-flex;
}

.footer-2 {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100px;
}

.footer-2 ul {
    width: 100%;
    height: 100%;
    list-style: none;
}

.footer-2 ul li {
    padding: 10px 14px 10px 14px;
    float: left;
}

.footer-2 ul li a {
    text-decoration: none;
    font-size: 15px;
    font-weight: bolder;
    color: white;
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


