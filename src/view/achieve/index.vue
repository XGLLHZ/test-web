<template>
    <div class="achieve">
        <achievelist :listTitle="listTitle" :listMenu="listMenu"></achievelist>
    </div>
</template>

<script>
import achievelist from '@/component/achieve-list'
export default {
    name: 'scholar',
    components: {
        achievelist
    },

    data() {
        return {
            listTitle: '智库成果',
            listMenu: [
                { id: 1, name: '智库观点' },
                { id: 2, name: '智库报告' }
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








