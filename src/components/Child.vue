<template>
    <p>I am a child component</p>
    <button @Click = 'handleEmit'>Click me to change parent of parents component styling</button>
</template>

<script>
export default {
    Data() {
        
    },

    methods: {
        handleEmit(){
            this.$emit('emitFromChildToComponents')
        }
    }
}
</script>

<style lang="postcss">
    p{
        color:white;
    }
</style>