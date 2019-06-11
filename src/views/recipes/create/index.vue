<template>
  <div class="about">
    <h1>This is a register page</h1>
    <input type="email" name="email" id="email" placeholder="email" v-model="email">
    <input type="text" name="name" id="name" placeholder="name" v-model="name">
    <input type="password" name="password" id="password" placeholder="password" v-model="password">
    <button @click="register">Register</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          name: this.name,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>
