<template>
    <div class="nav">
        <div class="menu">
            <ul>
                <li>
                    <router-link :to="{ path: '/' }" class="li-1">
                        <img src="../static/web-04.png"/>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/' }">首页</router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/news/new' }">新闻中心</router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/learn' }">学术活动</router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/technology' }">科技组织</router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/policy' }">公共政策</router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/report' }">专题报道</router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/achieve' }">智库成果</router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/scholar' }">机构简介</router-link>
                </li>
                <li>
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
                </li>
            </ul>
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
.nav {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100px;
    background-color: #0C153C;
}

.menu {
    margin: 0 15% 0 15%;
    padding: 0;
    width: 70%;
    height: 100%;
}

.menu ul {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    list-style: none;
    justify-content:center;
    align-items:center;
    display:-webkit-flex;
}

.menu ul li {
    margin: 0;
    padding: 0 8px 0 8px;
    float: left;
    height: 100%;
    line-height: 100%;
    justify-content:center;
    align-items:center;
    display:-webkit-flex;
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

.menu ul li a {
    text-decoration: none;
    color: white;
    font-weight: bolder;
}

.menu ul li:hover {
    color: #EB6C4D;
    background-color: rgb(39, 48, 90);
    cursor: pointer;
}

</style>

