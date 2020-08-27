<template>
    <div class="index">
        <navbar></navbar>
        <contents></contents>
        <indexone></indexone>
        <indexthree></indexthree>
        <indextwo></indextwo>
        <report></report>
        <gain></gain>
        <contact></contact>
    </div>
</template>

<script>
import navbar from '@/component/navbar'
import contents from '@/component/contents'
import indexone from '@/component/indexone'
import indextwo from '@/component/indextwo'
import indexthree from '@/component/indexthree'
import report from '@/component/report'
import gain from '@/component/gain'
import contact from '@/component/contact'
export default {
    name: 'index',
    components: {
        navbar,
        contents,
        indexone,
        indextwo,
        indexthree,
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

