<template>
    <div>
        <ul>
            <li><router-link to="/">Home</router-link> </li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/components">Components</router-link></li>
        </ul>
    </div>
</template>


<script>
    export default {
    name: 'Footer'
    }
</script>


<style scoped>
    div{
        background-color: rgb(179, 94, 94);
    }    

    ul{
        list-style: none;
    }

    li{
        font-weight: bold;
    }
</style>