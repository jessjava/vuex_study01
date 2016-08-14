<template>
    <div id="main">
        <router-view></router-view>
    </div>
</template>

<script>
import store from './vuex/store' //后面讲vuex 配置会提到
export default {
    store
}
</script>
<style>
 #main {
    width:100%;
    height:100%;
 }
</style>