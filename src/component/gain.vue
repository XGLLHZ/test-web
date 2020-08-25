<template>
    <div class="gain">
        <div class="content">
            <div class="a">智库成果</div>
            <div class="b">科技与艺术交织，传承与创新共荣，激情与灵感**</div>
            <div class="c">
                <ul>
                    <li>
                        <router-link :to="{ path: '/', query: { id: 1 } }">
                            <img src="../static/web-11.jpg"/>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ path: '/', query: { id: 2 } }">
                            <img src="../static/web-12.jpg"/>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ path: '/', query: { id: 3 } }">
                            <img src="../static/web-13.jpg"/>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ path: '/', query: { id: 4 } }">
                            <img src="../static/web-14.jpg"/>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'gain'
}

</script>

<style scoped>
.gain {
    margin: 0;
    width: 100%;
    background-image: url('../static/web-15.jpg');
}

.content {
    margin: 0 20% 0 20%;
    padding: 73px 0 117px 0;
    width: 60%;
    height: 300px;
    color: white;
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
    list-style: none;
}

.c ul li {
    width: 25%;
    float: left;
}

.c ul li img {
    width: 76%;
    margin-left: 12%;
    box-shadow: 0 6px 8px rgba(0, 0, 0, .12), 0 0 10px rgba(0, 0, 0, .04)
}

</style>
