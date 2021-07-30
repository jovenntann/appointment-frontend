<template>
  <main class="flex-1 relative overflow-y-auto">
    <Header/>
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="py-4">
          <Stats/>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import Stats from '@/components/Scheduler/Home/Stats.vue';
import Header from '@/components/Scheduler/Home/Header.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Stats,
    Header
  },
  data() {
    return {
      apiURL: process.env["VUE_APP_URL"],
      stats: {}
    }
  },
  mounted() {
    this.getAppointmentStats()
  },
  methods: {
    getAppointmentStats() {
      const accessToken = JSON.parse(localStorage.getItem("AccessToken") || '{}');
      axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + accessToken.access_token,
        'Access-Control-Allow-Origin': true
      };
      axios({
          method: 'get',
          url: this.apiURL + '/appointment/stats'
      })
      .then(response => {
        console.log(response.data)
        this.stats = response.data
      })
      .catch(error => {
          console.log(error);
      });
    }
  }
});
</script>

