<template>
    <div class="technology">
        <technologylist :listTitle="listTitle" :listMenu="listMenu"></technologylist>
    </div>
</template>

<script>
import technologylist from '@/component/technology-list'
export default {
    name: 'technology',
    components: {
        technologylist
    },

    data() {
        return {
            listTitle: '科技组织',
            listMenu: [ '科技组织' ]
        }
    }

}

</script>

<style scoped>
.technology {
    margin: 0;
    padding: 0;
    width: 100%;
}

</style>







