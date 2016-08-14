<template>
    <div>
        <button @click='increment'>Increment</button>
    </div>
</template>

<script>
    import { incrementCounter } from '../vuex/actions'
    export default {
        vuex: {
            actions: {
                increment: incrementCounter
            }
        }
    }
</script>