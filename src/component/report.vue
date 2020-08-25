<template>
    <div class="report">
        <div class="content">
            <div class="a">专题报告</div>
            <div class="b">点击图片查看详情，更多内容请进入专题报告页面</div>
            <div class="c">
                <ul>
                    <li v-for="(item, index) in dataList" :key="index">
                        <router-link :to="{ path: '/', query: { id: item.id } }" style="text-decoration: none; color: black">
                            <div class="lia">
                                <div class="lia-a">
                                    <img :src="item.url"/>
                                </div>
                                <div class="lia-b">
                                    <span class="lia-b-a">{{ item.title }}</span>
                                    <span class="lia-b-b">{{ item.time }}</span>
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ path: '/', query: { id: 2 } }">
                            <div class="lia">
                                <img src="../static/web-10.jpg"/>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'report',

    data() {
        return {
            dataList: [
                { id: 1, title: '专题报告一等斯蒂芬斯蒂芬斯蒂芬斯蒂厄齐尔无群二', url: require('../static/web-06.jpg'), time: '2020-08-21' },
                { id: 2, title: '专题报告一等斯蒂芬斯蒂芬斯蒂芬斯蒂厄齐尔无群二', url: require('../static/web-07.jpg'), time: '2020-08-21' },
                { id: 3, title: '专题报告一等斯蒂芬斯蒂芬斯蒂芬斯蒂厄齐尔无群二', url: require('../static/web-08.jpg'), time: '2020-08-21' }
            ]
        }
    }
}

</script>

<style scoped>
.report {
    margin: 0;
    width: 100%;
    background-color: #f3f7fa;
}

.content {
    margin: 0 20% 0 20%;
    padding: 73px 0 117px 0;
    width: 60%;
    height: 300px;
}

.a {
    margin: 0px 0px 20px 0px;
    font-size: 25px;
    font-weight: bolder;
    text-align: center;
}

.b {
    margin: 0px 0px 40px 0px;
    text-align: center;
}

.c {
    margin: 0;
    height: 100%;
}

.c ul {
    margin: 0;
    padding: 0;
    height: 100%;
    list-style: none;
}

.c ul li {
    width: 25%;
    height: 100%;
    float: left;
}

.lia  {
    width: 76%;
    margin-left: 12%;
    height: 75%;
    background-color: white;
    box-shadow: 0 6px 8px rgba(0, 0, 0, .12), 0 0 10px rgba(0, 0, 0, .04)
}

.lia img {
    width: 100%;
}

.lia-b {
    margin: 10px;
}

.lia-b-a {
    display: block;
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; 
}

.lia-b-b {
    display: block;
    margin-top: 10px;
    font-size: 15px;
    color: #777;
}

</style>
