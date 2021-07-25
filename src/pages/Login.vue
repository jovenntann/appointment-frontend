<template>
  <div class="min-h-screen bg-white flex">
    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img class="h-12 w-auto" src="https://www.graphicsprings.com/filestorage/stencils/9755a3f629ec17a4464d6c2bdfcc4562.png?width=500&height=500" alt="Workflow" />
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900" @click="submitLogin()"> 
            Sign in to your account 
          </h2>
        </div>

        <div class="mt-8">
  
          <div class="mt-6">
            <div class="space-y-6">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div class="mt-1">
                  <input id="email" @click="hideLoginError" v-model="email" name="email" type="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div class="space-y-1">
                <label for="password" class="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div class="mt-1">
                  <input id="password" @click="hideLoginError" v-model="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div class="flex items-center justify-between" v-if="loginError">
                <div class="flex items-center">
                  <label class="block text-sm text-red-400">
                    Invalid Email and/or password
                  </label>
                </div>
              </div>

              <div>
                <button @click="submitLogin()" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign in
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img class="absolute inset-0 h-full w-full object-cover" src="../assets/login/login_homescreen.jpg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({  
  data() {
    return {
        email: "",
        password: "",
        loginURL: process.env["VUE_APP_URL"] + "/token",
        loginError: false
    }
  },
  methods: {
    submitLogin() {
      
      var bodyFormData = new FormData();

      bodyFormData.append('username', this.email);
      bodyFormData.append('password', this.password);

      axios({
          method: 'post',
          url: this.loginURL,
          data: bodyFormData
      })
      .then(response => {
          localStorage.setItem('AccessToken', JSON.stringify(response.data));
          this.$router.push('/admin/')
      })
      .catch(error => {
          console.log(error);
          this.loginError = true
      });

    },

    hideLoginError() {
      this.loginError = false
    }
  }
})
</script>


