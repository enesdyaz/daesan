<template>
    <div class="users">
     <ul v-for="{name, email, index} in users" :key="index">
         <li>{{name}} - {{email}}</li>
     </ul>
    </div>
</template>

<style lang="scss" scoped>
.users{
    font-size: 1rem;
    color: #3345;
}
</style>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            loading: false,
            users: null,
            error: null,
            ok: 'okook',
        }
    }, 

    created() {
        this.fetchData();
    },  // end_created()

    methods: {
        fetchData(){
            this.error = this.users = null;
            this.laoding = true;
            axios
            .get('/api/users')
            .then(response=>{
                console.log(response)
                this.loading = false
                this.users = response.data
            })
            .catch(error=>{
                this.loading = false;
                this.error = error.response.data.message || error.message
            })
        }
    } // end_methods




} // end
</script>