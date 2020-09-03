<template>
    <div class="info">
        <navbar></navbar>
        <div class="separator">
            <div class="separator-1">
                <span class="span-1">学术活动</span>
                <span class="span-2">当前位置: &nbsp;&nbsp;</span>
            </div>
            <div class="separator-2">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/learn/dynamic', query: { id: '1', name: '学术动态' } }">学术活动</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/learn/meeting', query: { id: '2', name: '学术会议' } }">学术会议</el-breadcrumb-item>
                    <el-breadcrumb-item>正文</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="heng"></div>
        <div class="info-main">
            <div class="main-title">科技组织与公共政策今日赴今日头条调研</div>
            <div class="main-time">2020-08-23</div>
            <div class="main-con">北京航空航天大学（Beihang University）简称北航，是中华人民共和国工业和信息化部直属的全国重点大学，位列世界一流大学建设高校、211工程、985工程重点建设高校，入选珠峰计划、2011计划、111计划、卓越工程师教育培养计划、中国政府奖学金来华留学生接收院校、国家建设高水平大学公派研究生项目、国家级新工科研究与实践项目、国家级大学生创新创业训练计划、国家大学生创新性实验计划、全国深化创新创业教育改革示范高校、强基计划试点高校，为国际宇航联合会、中欧精英大学联盟、中国西班牙大学联盟、中俄工科大学联盟、中国高校行星科学联盟、中国人工智能教育联席会成员。 北京航空航天大学创建于1952年，时名北京航空学院，由当时的清华大学、北洋大学、厦门大学、四川大学等八所院校的航空系合并组建，1988年4月改名为北京航空航天大学。 [1] 截至2018年10月，学校学院路、沙河校区总占地共3000多亩；学校下有30个二级学院；有20个博士后科研流动站，23个博士学位授权一级学科点，40个硕士学位授权一级学科点，60个本科专业；有8个一级学科国家重点学科；有教职工3928人，全日制在校生30000余人</div>
        </div>
    </div>
</template>

<script>
import navbar from '@/component/navbar'
export default {
    name: 'learninfo',
    components: {
        navbar
    }
}

</script>

<style scoped>
.info {
    margin: 0;
    padding: 0;
    width: 100%;
}

.separator {
    margin: 40px 15% 0 15%;
    padding: 0;
    width: 70%;
    height: 30px;
}

.separator-1 {
    margin: 0;
    padding: 0;
    width: 75%;
    height: 100%;
    float: left;
}

.span-1 {
    float: left;
    font-size: 20px;
    font-weight: bolder;
}

.span-2 {
    padding-top: 3px;
    display: block;
    float: right;
}

.separator-2 {
    margin: 0;
    padding: 0;
    width: 25%;
    height: 100%;
    float: right;
    justify-content:center;
    align-items:center;
    display:-webkit-flex;
}

.heng {
    margin: 0 0 0 15%;
    padding: 0;
    width: 10%;
    border-top: 2px solid black;
}

.info-main {
    margin: 0px 15% 40px 15%;
    padding: 0;
    width: 70%;
    border-top: 1px solid black;
}

.main-title {
    margin: 20px 0 15px 0;
    padding: 0;
    width: 100%;
    font-size: 17px;
    font-weight: bolder;
    justify-content:center;
    align-items:center;
    display:-webkit-flex;
}

.main-time {
    margin: 0 0 20px 0;
    padding: 0;
    width: 100%;
    font-size: 13px;
    color: #999;
    justify-content:center;
    align-items:center;
    display:-webkit-flex;
}

</style>









