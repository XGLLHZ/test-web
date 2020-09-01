<template>
    <div class="report">
        <reportlist :listTitle="listTitle" :listMenu="listMenu"></reportlist>
    </div>
</template>

<script>
import reportlist from '@/component/report-list'
export default {
    name: 'report',
    components: {
        reportlist
    },

    data() {
        return {
            listTitle: '专题报道',
            listMenu: [
                { id: 1, name: '专题报道' }
            ]
        }
    }

}

</script>

<style scoped>
.report {
    margin: 0;
    padding: 0;
    width: 100%;
}

</style>










