<template>
    <div class="learn">
        <scholarlist :listTitle="listTitle" :listMenu="listMenu"></scholarlist>
    </div>
</template>

<script>
import scholarlist from '@/component/scholar-list'
export default {
    name: 'scholar',
    components: {
        scholarlist
    },

    data() {
        return {
            listTitle: '机构介绍',
            listMenu: [
                { id: 1, name: '书院简介' },
                { id: 2, name: '组织机构' },
                { id: 3, name: '研究学者' }
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






