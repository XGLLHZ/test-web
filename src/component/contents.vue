<template>
    <div class="content">
        <div class="main">
            <div class="rec">
                <div class="rec-left">
                    <router-link :to="{ path: '/' }">
                        <img src="../static/web-05.jpg"/>
                    </router-link>
                </div>
                <div class="rec-right">
                    <div class="right-1" v-for="(item, index) in dataList" :key="index">
                        <router-link :to="{ path: '/newsinfo', query: { id: item.id } }">
                            <span class="right-1-1">{{ item.title }}</span>
                            <span class="right-1-2">{{ item.label }}</span>
                            <el-divider direction="vertical"></el-divider>
                            <span class="right-1-3">{{ item.time }}</span>
                        </router-link> 
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contents',

    data() {
        return {
            dataList: [
                { id: 1, title: '科协-北航科技组织与公共政策研究院举行工业大数据专场座谈会', label: '新闻', time: '2020-08-21' },
                { id: 2, title: '科协-北航科技组织与公共政策研究院举行工业大数据专场座谈会', label: '新闻', time: '2020-08-21' },
                { id: 3, title: '科协-北航科技组织与公共政策研究院举行工业大数据专场座谈会', label: '新闻', time: '2020-08-21' }
            ]
        }
    }

}

</script>

<style scoped>
.content {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 700px;
    background-color: #101C44;
}

.main {
    margin: 0 15% 0 15%;
    padding: 40px 0 0 0;
    width: 70%;
    height: 450px;
}

.rec {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

.rec-left {
    margin: 0;
    padding: 0;
    width: 65%;
    height: 100%;
    float: left;
    overflow: hidden;
}

.rec-right {
    margin: 0;
    padding: 0;
    width: 33%;
    height: 100%;
    float: right;
    color: white;
}

.right-1 {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 33.2%;
    background-color: #1C284E;
    border-bottom: 1px solid #999;
}

.right-2 {
    width: 100%;
    height: 1px;
    background-color: #999;
}

.rec-right a {
    text-decoration: none;
    color: white;
}

.rec-right a:hover {
    color: #409EFF;
}

.right-1-1 {
    display: block;
    padding: 5% 5% 2% 5%;
    width: 90%;
    height: 58%;
    font-size: 17px;
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; 
}

.right-1-2 {
    padding-left: 5%;
    font-size: 12px;
}

.right-1-3 {
    font-size: 12px;
}

</style>


