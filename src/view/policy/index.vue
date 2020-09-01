<template>
    <div class="policy">
        <policylist :listTitle="listTitle" :listMenu="listMenu"></policylist>
    </div>
</template>

<script>
import policylist from '@/component/policy-list'
export default {
    name: 'policy',
    components: {
        policylist
    },

    data() {
        return {
            listTitle: '公共政策',
            listMenu: [ '公共政策' ]
        }
    }

}

</script>

<style scoped>
.policy {
    margin: 0;
    padding: 0;
    width: 100%;
}

</style>










