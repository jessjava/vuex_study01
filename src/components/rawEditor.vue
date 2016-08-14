<template>
    <div id="raw-editor">
        <textarea
              :value="rawHtml"
              @input="renderHtml"
              class="form-control">
        </textarea>
    </div>
</template>

<script>
    //设计思想就是rawHtml内容已改变，就会触发renderHtml方法
    import {renderHtml} from '../vuex/actions';
    import {getRawHtml} from '../vuex/getters';
    export default {
        vuex:{//看到没，里面有个 vuex 对象，actions和getters两者相得益彰
            actions:{
                renderHtml //内容改变触发
            },
            getters:{
                rawHtml:getRawHtml//获得rawHtml
            }
        },
    }
</script>
<style>
    #raw-editor {
        float:left;
        width:45%;
        height:100%;
    }

    textarea{
        width: 100%;
        height:100%;
        border: 0;
        border-radius: 0;
    }
</style>