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
            listTitle: '新闻通告',
            listMenu: [ '新闻中心', '通知公告' ]
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

