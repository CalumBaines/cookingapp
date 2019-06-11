<template>
  <div class="">
    <!-- <div class="overflow-hidden rounded-br-lg mb-8 relative">
      <h1 class="h3 px-8 py-20 text-4xl absolute text-white font-bold">Welcome back!</h1>
      <img class="w-full" src="https://source.unsplash.com/user/kevinmccutcheon/800x600" alt="">
    </div> -->
    <div class="p-8">
      <p class="pb-10 text-sm text-gray-700">Please login to continue</p>
      <div class="pb-10">
        <label for="email" class="block text-gray-600 text-xs font-light">Email address</label>
        <input class="w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-none border-b border-gray-500"
          type="email" name="email" id="email" placeholder="email" v-model="email">
      </div>
      <div class="pb-10">
        <div class="flex">
          <label for="password" class="inline text-gray-600 text-xs font-light">Password</label>
          <a href="#na" class="inline text-gray-900 text-xs font-light ml-auto">Forgot password?</a>
        </div>
        <input class="w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-none border-b border-gray-500 text-grey-900" type="password" name="password" id="password" placeholder="password" v-model="password">
      </div>
      <button @click="login" class="shadow-lg w-full block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
      <p v-if="error">{{ error }}</p>
    </div>
    <div class="text-center">
      <p class="text-sm text-gray-600">New to the site?</p>
      <a href="#na" class="text-green-500 hover:text-green-700">Create account here</a>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    ...mapActions([
      'setToken',
      'setUser',
    ]),

    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.$router.push({
          name: 'recipes'
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
        this.error = error.response.data.error;
      }
    },
  },
};
</script>
