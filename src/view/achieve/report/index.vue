<template>
    <div class="achieve">
        <achievelist :listTitle="listTitle" :listMenu="listMenu"></achievelist>
    </div>
</template>

<script>
import achievelist from '@/component/achieve-list'
export default {
    name: 'achievereport',
    components: {
        achievelist
    },

    data() {
        return {
            listTitle: '智库成果',
            listMenu: [
                { id: '1', name: '智库观点', path: '/achieve/viewpoint' },
                { id: '2', name: '智库报告', path: '/achieve/report' },
            ]
        }
    }

}

</script>

<style scoped>
.achieve {
    margin: 0;
    padding: 0;
    width: 100%;
}

</style>













