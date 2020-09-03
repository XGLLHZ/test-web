<template>
    <div class="list">
        <navbar></navbar>
        <div class="content">
            <div class="con-left">
                <div class="left-main">
                    <router-link :to="{ path: '/' }" class="left-main-1">
                        <i class="el-icon-arrow-left"/>&nbsp;&nbsp;&nbsp;&nbsp;{{ title }}
                    </router-link>
                    <div class="left-main-2" @click="menuClik(item.id, item.name, item.path)" v-for="(item, index) in menuName" :key="index">{{ item.name }}</div>
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
                        <newList v-show="newListVisible"></newList>
                        <newListReport v-show="newListReportVisible"></newListReport>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '@/component/navbar'
import newList from '@/component/new-list'
import newListReport from '@/component/new-list-report'
export default {
    name: 'conlist',
    props: [ 'listTitle', 'listMenu' ],
    components: {
        navbar,
        newList,
        newListReport
    },

    data() {
        return {
            newListVisible: true,
            newListReportVisible: false,
            title: this.listTitle,
            menuName: this.listMenu,
            titleName: ''
        }
    },

    created() {
        this.initTitle()
    },

    methods: {
        initTitle() {
            this.titleName = this.$route.query.name
            if (this.$route.query.id === '1') {
                this.newListVisible = true
                this.newListReportVisible = false
            }
            if (this.$route.query.id === '2') {
                this.newListVisible = false
                this.newListReportVisible = true
            }
        },

        menuClik(id, name, path) {
            this.$router.push({ path: path, query: { id: id, name: name } })
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
    background-color: antiquewhite;
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

</style>


