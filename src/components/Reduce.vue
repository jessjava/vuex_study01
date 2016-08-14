<template>
    <div>
        <button @click='reduce'>Reduce</button>
    </div>
</template>
<script>
    import { reduceCounter } from '../vuex/actions'
    import { getNum } from '../vuex/getters'
    export default {
        vuex: {
            actions: {
                reduce : reduceCounter
            },
            getters: {
                num: getNum
            }
        }
    }
</script>
