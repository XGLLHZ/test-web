<template>
    <div class="index">
        <report></report>
        <gain></gain>
        <contact></contact>
    </div>
</template>

<script>
import report from '@/component/report'
import gain from '@/component/gain'
import contact from '@/component/contact'
export default {
    name: 'index',
    components: {
        report,
        gain,
        contact
    }
}
</script>

<style scoped>
.index {
    margin: 0;
}

</style>

