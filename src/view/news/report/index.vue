<template>
    <div class="news">
        <list :listTitle="listTitle" :listMenu="listMenu"></list>
    </div>
</template>

<script>
import list from '@/component/list'
export default {
    name: 'news',
    components: {
        list
    },

    data() {
        return {
            listTitle: '新闻公告',
            listMenu: [
                { id: 1, name: '新闻中心', path: '/news/new' },
                { id: 2, name: '通知公告', path: '/news/report' }
            ]
        }
    }

}

</script>

<style scoped>
.news {
    margin: 0;
    padding: 0;
    width: 100%;
}

</style>

