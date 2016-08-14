<template>
    <div>
        该页面演示了 vuex 技术下,表单元素如何继续使用 v-model 进行双向绑定,详情见代码。
        <br>
        <a v-link="'/'">回首页</a>
    </div>
    <Display></Display>
    <Increment></Increment>
    <Reduce></Reduce>
</template>

<script>
    import Display from '../components/Display.vue'
    import Increment from '../components/Increment.vue'
    import Reduce from '../components/Reduce.vue'

    export default {
        components:{
            Display,
            Increment,
            Reduce
        }
    }
</script>