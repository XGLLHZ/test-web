<template>
    <div class="learn">
        <scholarlist :listTitle="listTitle" :listMenu="listMenu"></scholarlist>
    </div>
</template>

<script>
import scholarlist from '@/component/scholar-list'
export default {
    name: 'scholarorganization',
    components: {
        scholarlist
    },

    data() {
        return {
            listTitle: '机构介绍',
            listMenu: [
                { id: '1', name: '书院简介', path: '/scholar/college' },
                { id: '2', name: '组织机构', path: '/scholar/organization' },
                { id: '3', name: '研究学者', path: '/scholar/scholar' }
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










