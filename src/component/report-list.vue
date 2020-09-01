<template>
    <div class="list">
        <navbar></navbar>
        <div class="content">
            <div class="con-left">
                <div class="left-main">
                    <router-link :to="{ path: '/' }" class="left-main-1">
                        <i class="el-icon-arrow-left"/>&nbsp;&nbsp;&nbsp;&nbsp;{{ title }}
                    </router-link>
                    <div class="left-main-2" @click="menuClik(item.id, item.name)" v-for="(item, index) in menuName" :key="index">{{ item.name }}</div>
                    <div class="left-main-3">
                        <div class="left-main-3-1">联系我们</div>
                        <div class="left-main-3-2">
                            <div class="qrcode">
                                <img src="../static/qrcode.png">
                            </div>
                            <div class="contact">
                                <span>电话: 010-82330001</span>
                                <span>E-mail: bhtxtjy@buaa.edu.cn</span>
                                <span>地址: 北京市海淀区学院路37号 北京航空航天大学</span>
                                <span>邮编: 100191</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="con-right">
                <div class="right-main">
                    <div class="main-1">{{ titleName }}</div>
                    <div class="main-2">
                        <div class="main-2-list">
                            <ul>
                                <li v-for="(item, index) in dataList" :key="index">
                                    <router-link :to="{ path: '/reportinfo', query: { id: item.id } }">
                                        <div class="lis">
                                            <div class="li-a">
                                                <img :src="item.url"/>
                                            </div>
                                            <div class="li-b">
                                                <div class="li-b-1">{{ item.title }}</div>
                                                <div class="li-b-2"><span>摘要:&nbsp;&nbsp;</span>{{ item.content }}</div>
                                                <div class="li-b-3">
                                                    <div class="li-b-3-1">{{ item.time }}</div>
                                                    <div class="li-b-3-2"><span>报告人: &nbsp;&nbsp;</span>{{ item.author }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                            <div class="list-page">
                                <el-pagination
                                    layout="prev, pager, next"
                                    :total="1000">
                                </el-pagination>
                            </div>
                        </div>
                    </div>
                    <div class="new-footer">
                        <div class="footer-1">
                            <span>分享到:&nbsp;&nbsp;</span>
                            <img src="../static/wx.png">
                            <img src="../static/pyq.png">
                            <img src="../static/qq.png">
                            <img src="../static/wb.png">
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
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '@/component/navbar'
export default {
    name: 'reportlist',
    props: [ 'listTitle', 'listMenu' ],
    components: {
        navbar
    },

    data() {
        return {
            title: this.listTitle,
            menuName: this.listMenu,
            titleName: '',
            dataList: [
                { 
                    id: 1,
                    title: '科技组织与公共政策今日赴今日头条调研',
                    url: require('../static/web-14.jpg'),
                    content: '是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。',
                    time: '2020-08-31',
                    author: '唐某某 教授  叶某某 副教授'
                },
                { 
                    id: 1,
                    title: '科技组织与公共政策今日赴今日头条调研',
                    url: require('../static/web-14.jpg'),
                    content: '是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。',
                    time: '2020-08-31',
                    author: '唐某某 教授  叶某某 副教授'
                },
                { 
                    id: 1,
                    title: '科技组织与公共政策今日赴今日头条调研',
                    url: require('../static/web-14.jpg'),
                    content: '是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。',
                    time: '2020-08-31',
                    author: '唐某某 教授  叶某某 副教授'
                },
                { 
                    id: 1,
                    title: '科技组织与公共政策今日赴今日头条调研',
                    url: require('../static/web-14.jpg'),
                    content: '是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。是非成败转头空，青山依旧在，惯看秋月春风。',
                    time: '2020-08-31',
                    author: '唐某某 教授  叶某某 副教授'
                }
            ]
        }
    },

    created() {
        this.initTitle()
    },

    methods: {
        initTitle() {
            if (this.menuName != null) {
                this.titleName = this.menuName[0].name
            }
        },

        menuClik(id, name) {
            this.titleName = name
        }

    }

}

</script>

<style scoped>
.list {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

.content {
    margin: 40px 0 0 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

.con-left {
    margin: 0;
    padding: 0;
    width: 35%;
    height: calc(100% - 140px);
    float: left;
    position: absolute;;
    background-color: #0C153C;
}

.con-right {
    margin: 0;
    padding: 0;
    width: 65%;
    float: right;
}

.left-main {
    margin: 0 0 0 43%;
    padding: 0;
    width: 57%;
    height: 100%;
}

.left-main-1 {
    display: block;
    margin: 0;
    padding: 15px 0 15px 10px;
    font-size: 20px;
    color: white;
    font-weight: bolder;
}

.left-main a {
    text-decoration: none;
}

.left-main-2 {
    margin: 0 15px 0 15px;
    padding: 15px 0 15px 15px;
    width: calc(100% - 45px);
    font-size: 17px;
    color: white;
    border-bottom: 1px solid #999;
}

.left-main-1:hover {
    background-color: #3A4362;
}

.left-main-2:hover {
    cursor: pointer;
    background-color: #3A4362;
}

.left-main-3 {
    margin: 30px 15px 15px 15px;
    padding: 0;
    width: calc(100% - 30px);
}

.left-main-3-1 {
    padding-bottom: 15px;
    font-size: 17px;
    font-weight: bolder;
    color: white;
}

.left-main-3-2 {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

.qrcode {
    margin: 0;
    padding: 0;
    width: 50%;
}

.qrcode img {
    width: 100%;
}

.contact {
    font-size: 13px;
    color: white;
}

.contact span {
    display: block;
    padding-top: 10px;
}

.right-main {
    margin: 0px 0px 0px 30px;
    padding: 0;
    width: calc(77% - 30px);
    height: 100%;
}

.main-1 {
    margin: 0;
    padding: 14px 15px 13px 0;
    width: 20%;
    font-size: 20px;
    font-weight: bolder;
    border-bottom: 2px solid black;
}

.main-2 {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    border-top: 1px solid black;
}

.main-2-college {
    margin: 30px 0 30px 0;
    padding: 0;
    width: 100%;
}

.main-2-organization {
    margin: 30px 0 30px 0;
    padding: 0;
    width: 100%;
}

.main-2-list {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 700px;
}

.main-2-list ul {
    margin: 30px 0 30px 0;
    padding: 0;
    width: 100%;
    height: 85%;
    list-style: none;
}

.main-2-list ul li {
    margin: 0;
    padding: 0 0 20px 0;
    width: 100%;
    height: 23%;
}

.main-2-list ul li a {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: black;
}

.lis {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

.li-a {
    margin: 0;
    padding: 0;
    width: 17%;
    height: 100%;
    float: left;
    overflow: hidden;
}

.li-a img {
    width: 100%;
}

.li-b {
    margin: 0;
    padding: 0;
    width: 83%;
    height: 100%;
    float: right;
}

.li-b-1 {
    margin: 0 0 10px 15px;
    padding: 0;
    width: calc(100% -15px);
    font-size: 17px;
    font-weight: bolder;
}

.li-b-2 {
    margin: 0 0 10px 15px;
    padding: 0;
    width: calc(100% -15px);
    font-size: 13px;
    color: #AAAAAA;
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; 
    line-height: 150%;
}

.li-b-2 span {
    color: #999;
}

.li-b-3 {
    margin: 0 0 0 15px;
    padding: 0;
    width: calc(100% -15px);
    font-size: 12px;
    color: #AAAAAA;
}

.li-b-3-1 {
    margin: 0;
    padding: 0;
    width: 20%;
    float: left;
}

.li-b-3-2 {
    margin: 0;
    padding: 0;
    width: 80%;
    float: right;
}

.list-page {
    margin: 0;
    padding: 0;
    width: 100%;
    justify-content:center;
    align-items:center;
    display:-webkit-flex;
}

.new-footer {
    margin: 30px 0 0 0;
    padding: 30px 0 0 0;
    width: 100%;
    height: 120px;
    background-color: #0C153C;
    color: white;
    font-size: 12px;
}

.footer-1 {
    padding-right: 30px;
    float: right;
}

.footer-1 img {
    width: 15px;
    padding-left: 15px;
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










