<template>
    <div class="learn">
        <learnlist :listTitle="listTitle" :listMenu="listMenu"></learnlist>
    </div>
</template>

<script>
import learnlist from '@/component/learn-list'
export default {
    name: 'learn',
    components: {
        learnlist
    },

    data() {
        return {
            listTitle: '学术活动',
            listMenu: [
                { id: '1', name: '学术动态', path: '/learn/dynamic' },
                { id: '2', name: '学术会议', path: '/learn/meeting' }
            ]
        }
    }

}

</script>

<style scoped>
.learn {
    margin: 0;
    padding: 0;
    width: 100%;
}

</style>









