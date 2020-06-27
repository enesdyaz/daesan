<template>
<v-app>
    <div>
        <h1>Vue Router Demo App</h1>

        <p>
            <router-link :to="{ name: 'home' }">Home</router-link> |
            <router-link :to="{ name: 'hello' }">Hello World</router-link>|
            <router-link :to="{ name: 'UsersIndex' }">Users</router-link>|
            <a href="/home">home</a>
        </p>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</v-app>
</template>
<script>
    import ExampleComponent from '../components/ExampleComponent'
    export default {
        components: {
            ExampleComponent
        }
    }
</script>