<template>
    <div class="indextwo">
        <div class="content">
            <div class="main">
                <div class="main-left">
                    <div class="main-top">
                        <div class="top-left">科技组织</div>
                        <div class="top-right">
                            <router-link :to="{ path: '/' }">更多>>></router-link>
                        </div>
                    </div>
                    <div class="main-bottom">
                        <ul>
                            <li v-for="(item, index) in dataList" :key="index">
                                <router-link :to="{ path: '/', query: { id: item.id } }">{{ item.title }}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="main-right">
                    <div class="main-top">
                        <div class="top-left">公共政策</div>
                        <div class="top-right">
                            <router-link :to="{ path: '/' }">更多>>></router-link>
                        </div>
                    </div>
                    <div class="main-bottom">
                        <ul>
                            <li v-for="(item, index) in dataList" :key="index">
                                <router-link :to="{ path: '/', query: { id: item.id } }">{{ item.title }}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'indextwo',

    data() {
        return {
            dataList: [
                { id: 1, title: '兰德公司前沿技术学会生物计算分会介绍及对西欧的影响' },
                { id: 2, title: '兰德公司前沿技术学会生物计算分会介绍及对西欧的影响' },
                { id: 3, title: '兰德公司前沿技术学会生物计算分会介绍及对西欧的影响德公司前沿技术学会生物计算分会介绍及对西欧的影响' },
                { id: 4, title: '兰德公司前沿技术学会生物计算分会介绍及对西欧的影响' },
                { id: 5, title: '兰德公司前沿技术学会生物计算分会介绍及对西欧的影响' },
                { id: 6, title: '兰德公司前沿技术学会生物计算分会介绍及对西欧的影响' }
            ]
        }
    }

}

</script>

<style scoped>
.indextwo {
    margin: 0;
    padding: 0;
    width: 100%;
}

.content {
    margin: 0 15% 0 15%;
    padding: 50px 0 60px 0;
    width: 70%;
    height: 250px;
}

.main {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

.main-left {
    margin: 0;
    padding: 0;
    width: 45%;
    height: 100%;
    float: left;
}

.main-right {
    margin: 0;
    padding: 0;
    width: 45%;
    height: 100%;
    float: right;
}

.main-top {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 30px;
    border-bottom: 2px solid black;
}

.top-left {
    font-size: 20px;
    font-weight: bolder;
    float: left;
    color: #1C2448;
}

.top-right {
    margin-top: 7px;
    font-size: 12px;
    float: right;
}

.top-right a {
    text-decoration: none;
    color: black;
}

.top-right a:hover {
    color: #409EFF;
}

.main-bottom ul {
    list-style: none;
    margin-top: 20px;
}

.main-bottom ul li {
    padding: 15px 0 0 0;
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; 
}

.main-bottom ul li a {
    text-decoration: none;
    color: black;
    font-size: 16px;
}

.main-bottom ul li a:hover {
    font-weight: bolder;
    color: #20284C;
}
 
</style>

