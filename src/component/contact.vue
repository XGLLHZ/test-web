<template>
    <div class="contact">
        <div class="content">
            <div class="a">联系我们</div>
            <div class="b">
                <ul>
                    <li>
                        <div class="b-a">
                            <img src="../static/web-06.jpg">
                        </div>
                    </li>
                    <li>
                        <div class="b-b">
                            <img src="../static/web-06.jpg">
                        </div>
                    </li>
                    <li>
                        <div class="b-c">
                            <span>电话: 12345678901</span>
                            <span>邮箱: beihang@163.com</span>
                            <span>地址: 北京 北京市 北京航空航天大学</span>
                            <span>邮编: 300123</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="c">
                <span>备案号</span>
                <el-divider direction="vertical"></el-divider>
                <span>公安网备</span>
                <el-divider direction="vertical"></el-divider>
                <span>等等等</span>
                <el-divider direction="vertical"></el-divider>
                <span>等等等</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contact'
}

</script>

<style scoped>
.contact {
    margin: 0;
    width: 100%;
    background-color: #0A163C;
}

.content {
    margin: 0 15% 0 15%;
    padding: 40px 0 60px 0;
    width: 70%;
    height: 250px;
    color: white;
}

.a {
    margin: 0px 0px 20px 0px;
    font-size: 25px;
    font-weight: bolder;
    text-align: center;
}

.b {
    margin: 20px 0px 20px 0px;
    text-align: center;
    height: 65%;
}

.b ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.b ul li {
    width: 33.33%;
    float: left;
}

.b-a {
    margin: 0;
    width: 100%;
    height: 70%;
}

.b-a img {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
}

.b-b {
    margin: 0;
    width: 100%;
    height: 70%;
    border-left: 2px solid #999;
    border-right: 2px solid #999;
}

.b-b img {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
}

.b-c {
    margin: 0;
    width: 100%;
    height: 70%;
    color: white;
    font-size: 14px;
}

.b-c span {
    display: block;
    padding-top: 15px;
    margin-left: 15%;
    text-align: left;
}

.c {
    margin-top: 3%;
    font-size: 12px;
    font-weight: bolder;
    color: white;
    text-align: center;
}

</style>


