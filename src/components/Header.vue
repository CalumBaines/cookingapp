<template>
    <div class="bg-white shadow-lg w-full">
        <div class="container mx-auto flex py-5 items-center justify-center">
            <div class="py-2">
                <router-link to="/">
                    <img src="img/Logo.svg" alt="">
                </router-link>
            </div>
            <div class="ml-auto">
                <ul class="flex">
                    <li class="mr-6" v-if="!isUserLoggedIn">
                        <router-link class="text-blue-500 hover:text-blue-800" to="/register">Sign up</router-link>
                    </li>
                    <li class="mr-6" v-if="!isUserLoggedIn">
                        <router-link class="text-blue-500 hover:text-blue-800" to="/login">Login</router-link>
                    </li>
                    <li class="mr-6" v-if="isUserLoggedIn">
                        <router-link class="text-blue-500 hover:text-blue-800" to="/recipes">My recipes</router-link>
                    </li>
                    <li class="mr-6" v-if="isUserLoggedIn">
                        <button class="text-blue-500 hover:text-blue-800" @click="logout">Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        name: 'Header',

        computed: {
            ...mapGetters(["isUserLoggedIn"])
        },

        methods: {
            logout() {
                this.$store.dispatch('setToken', null);
                this.$store.dispatch('setUser', null);
                this.$router.push({
                    name: 'root'
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>