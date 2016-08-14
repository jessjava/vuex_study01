<template>
    <div>
        <h3>Count is {{ counterValue }}</h3>
    </div>
    <div>
        <input v-model="number">
    </div>
</template>
<script>
    import { getCount,getNum } from '../vuex/getters'
    import { updateReduceNum } from '../vuex/actions'
    export default{
        vuex: {
            actions : {
                update : updateReduceNum
            },
            getters : {
                // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
                counterValue : getCount,
                numValue : getNum
            }
        },
        computed: {
            number: {
                get () {
                    return this.numValue;
                },
                set (val) {
                    this.update(val);
                }
            }
        }

    }
</script>
