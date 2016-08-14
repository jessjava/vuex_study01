<template>

    <div>
        1.该页面为 markdown 转换器,具有实时效果;左侧为编译器,右侧实时预览。
        <div>
            2.<a v-link="'vf'">vuex Form表单演示</a>
        </div>
    </div>
    <raw-editor></raw-editor>
    <render-editor></render-editor>
</template>

<script>
    import rawEditor from '../components/rawEditor'
    import renderEditor from '../components/renderEditor'

    export default {
        components:{
            rawEditor,
            renderEditor
        }
    }
</script>