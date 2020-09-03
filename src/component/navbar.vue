<template>
    <div class="nav">
        <div class="flex_container">
            <div class="logo">
                <router-link :to="{ path: '/' }" class="li-1">
                        <img src="../static/web-04.png"/>
                </router-link>
            </div>
            <div class="flex_item"><div class="first"><router-link :to="{ path: '/' }">首页</router-link></div></div>
            <div class="flex_item">
                <div class="first"><router-link :to="{ path: '/news/new', query: { id: '1', name: '新闻中心' } }">新闻公告</router-link></div>
                <div class="submenu">
                    <li><router-link :to="{ path: '/news/new', query: { id: '1', name: '新闻中心' } }">新闻中心</router-link></li>
                    <li><router-link :to="{ path: '/news/report', query: { id: '2', name: '通知公告' } }">通知公告</router-link></li>
                </div>
            </div>
            <div class="flex_item">
                <div class="first"><router-link :to="{ path: '/learn/dynamic', query: { id: '1', name: '学术动态' } }">学术活动</router-link></div>
                <div class="submenu">
                    <li><router-link :to="{ path: '/learn/dynamic', query: { id: '1', name: '学术动态' } }">学术动态</router-link></li>
                    <li><router-link :to="{ path: '/learn/meeting', query: { id: '2', name: '学术会议' } }">学术会议</router-link></li>
                </div>
            </div>
            <div class="flex_item"><div class="first"><router-link :to="{ path: '/technology' }">科技组织</router-link></div></div>
            <div class="flex_item"><div class="first"><router-link :to="{ path: '/policy' }">公共政策</router-link></div></div>
            <div class="flex_item"><div class="first"><router-link :to="{ path: '/report' }">专题报告</router-link></div></div>
            <div class="flex_item">
                <div class="first"><router-link :to="{ path: '/achieve/viewpoint', query: { id: '1', name: '智库观点' } }">智库成果</router-link></div>
                <div class="submenu">
                    <li><router-link :to="{ path: '/achieve/viewpoint', query: { id: '1', name: '智库观点' } }">智库观点</router-link></li>
                    <li><router-link :to="{ path: '/achieve/report', query: { id: '2', name: '智库报告' } }">智库报告</router-link></li>
                </div>
            </div>
            <div class="flex_item">
                <div class="first"><router-link :to="{ path: '/scholar/college', query: { id: '1', name: '本院简介' } }">机构简介</router-link></div>
                <div class="submenu">
                    <li><router-link :to="{ path: '/scholar/college', query: { id: '1', name: '本院简介' } }">本院简介</router-link></li>
                    <li><router-link :to="{ path: '/scholar/organization', query: { id: '2', name: '组织机构' } }">组织机构</router-link></li>
                    <li><router-link :to="{ path: '/scholar/scholar', query: { id: '3', name: '研究学者' } }">研究学者</router-link></li>
                </div>
            </div>
            <div class="li-2">
                <el-popover 
                    placement="top-end"
                    width="300"
                    trigger="hover">
                    <el-input v-model="searchContent" placeholder="请输入您要查找的内容..." clearable>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                    <i slot="reference" class="el-icon-search"/>
                </el-popover>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    
    data() {
        return {
            searchContent: ''
        }
    }
    
}
</script>

<style scoped>
.nav{
    width: 100%;
    margin: 0;
    height: 100px;
    background-color: #0C153C;
    box-shadow: 0px 2px 7px 0px rgb(39, 48, 90);
}

.flex_container {
    display: flex;
    display: -webkit-flex;
    margin: 0;
    width: 100%;
    height: 100%;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}

.li-1 {
    padding-left: 0;
    padding-right: 8px;
}

.li-2 {
    padding-left: 8px;
    padding-right: 0;
    color: white;
}

.flex_item {
    width: auto;
    height: 100%;
    line-height: 100px;
    text-align: center;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

.flex_item a{
    text-decoration: none;
    color: white;
}

.flex_item:hover{
    background-color: rgb(39, 48, 90);
}
        
.first{
    padding:0 11px;
    font-weight: bold;
}

.flex_item:hover .submenu{
    display: block;
}

.flex_item .submenu {
    display: none;
    list-style: none;
    height: auto;
    line-height: 40px;
    width: 100%;
    font-size: 14px;
    background-color: rgb(39, 48, 90);
}

.submenu :hover {
    display: block;
    background-color: #0C153C;
}
</style>