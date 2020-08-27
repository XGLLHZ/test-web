<template>
    <div class="indextwo">
        <div class="content">
            <div class="main">
                <div class="main-left">
                    <div class="main-top">
                        <div class="top-left">新闻中心</div>
                        <div class="top-right">
                            <router-link :to="{ path: '/' }">更多>>></router-link>
                        </div>
                    </div>
                    <div class="main-bottom-1">
                        <ul>
                            <li v-for="(item, index) in newList" :key="index">
                                <router-link :to="{ path: '/', query: { id: item.id } }">
                                    <div class="new-left">{{ item.title }}</div>
                                    <div class="new-right">{{ item.time }}</div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="main-right">
                    <div class="main-top">
                        <div class="top-left">学术活动</div>
                        <div class="top-right">
                            <router-link :to="{ path: '/' }">更多>>></router-link>
                        </div>
                    </div>
                    <div class="main-bottom">
                        <ul>
                            <li v-for="(item, index) in dataList" :key="index">
                                <router-link :to="{ path: '/', query: { id: item.id } }">
                                    <div class="right-con">
                                        <div class="right-con-left">
                                            <div class="date-1">{{ item.day }}</div>
                                            <div class="date-2">{{ item.year }}</div>
                                        </div>
                                        <div class="right-con-right">
                                            <div class="title">{{ item.title }}</div>
                                            <div class="date">{{ item.time + item.title }}</div>
                                        </div>     
                                    </div>
                                </router-link>
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
    name: 'indexthree',

    data() {
        return {
            dataList: [
                { id: 1, title: '兰德公司前沿技术学会生物计算分会介绍及对西欧的影响德公司前沿技术学会生物计算分会介绍及对西欧的影响', time: '202-08-23', year: '2020-08', day: '23' },
                { id: 1, title: '兰德公司前沿技术学会生物计算分会介绍及对西欧的影响德公司前沿技术学会生物计算分会介绍及对西欧的影响', time: '202-08-23', year: '2020-08', day: '23' },
                { id: 1, title: '兰德公司前沿技术学会生物计算分会介绍及对西欧的影响德公司前沿技术学会生物计算分会介绍及对西欧的影响', time: '202-08-23', year: '2020-08', day: '23' }
            ],
            newList: [
                { id: 1, title: '智能用户画像及人数据处理研讨会即将举行', time: '2020-08-23' },
                { id: 1, title: '智能用户画像及人数据处理研讨会即将举行智能用户画像及人数据处理研讨会即将举行', time: '2020-08-23' },
                { id: 1, title: '智能用户画像及人数据处理研讨会即将举行', time: '2020-08-23' },
                { id: 1, title: '智能用户画像及人数据处理研讨会即将举行', time: '2020-08-23' }
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
    background-color: #F2F7FB;
}

.content {
    margin: 0 15% 0 15%;
    padding: 50px 0 60px 0;
    width: 70%;
    height: 350px;
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

.main-bottom {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

.main-bottom-1 {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
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
    height: 70%;
}

.main-bottom ul li {
    height: 33.33%;
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
    color: #20284C;
}

.right-con {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

.right-con-left {
    margin: 0;
    padding: 0;
    width: 15%;
    height: 100%;
    background-image: url('../static/web-17.jpg');
    background-size: 100% 100%;
    float: left;
}

.right-con-right {
    margin: 0;
    padding: 0;
    width: 83%;
    height: 100%;
    float: right;
}

.title {
    width: 100%;
    margin-bottom: 5%;
    font-size: 16px;
    font-weight: bolder;
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; 
}

.date {
    width: 100%;
    margin-top: 5%;
    font-size: 14px;
    color: #999;
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; 
}

.date-1 {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 50%;
    color: white;
    justify-content:center;
    align-items:center;
    display:-webkit-flex;
}

.date-2 {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 50%;
    color: #999;
    font-size: 14px;
    justify-content:center;
    align-items:center;
    display:-webkit-flex;
}

.main-bottom-1 ul {
    list-style: none;
    margin-top: 20px;
    width: 100%;
    height: 70%;
}

.main-bottom-1 ul li {
    width: 100%;
    height: 25%;
    padding: 15px 0 0 0;
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; 
    justify-content:left;
    align-items:center;
    display:-webkit-flex;
}

.main-bottom-1 ul li a {
    text-decoration: none;
    width: 100%;
    color: black;
    font-size: 16px;
}

.main-bottom-1 ul li a:hover {
    font-weight: bolder;
    color: #20284C;
}

.new-left {
    margin: 0;
    padding: 0;
    width: 75%;
    height: 100%;
    float: left;
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; 
}
.new-right {
    margin: 0;
    padding: 0;
    width: 25%;
    height: 100%;
    float: right;
    text-align: right;
}
 
</style>




