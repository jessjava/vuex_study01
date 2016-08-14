<template>
    <div id="render-editor">
        {{{renderHtml}}}
    </div>
</template>
<script>
    import {getRenderHtml} from '../vuex/getters'
    export default {
        vuex:{ //看到没，里面有个 vuex 对象
            getters:{
                renderHtml:getRenderHtml
            }
        }
    }
</script>
<style>
    #render-editor {
        float:right;
        width:50%;
        height:100%;
        overflow: scroll;
    }
</style>