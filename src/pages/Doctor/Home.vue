<template>
  <main class="flex-1 relative overflow-y-auto">
    <Header/>
    <div class="py-6" v-if="appointments.length">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">Recent Appointment</h1>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="py-4">
          <Appointments :appointments="appointments" @parentPopulateAppointmentsPending="populateAppointmentsPending()"> </Appointments>
        </div>
      </div>
    </div>
    <div class="py-6" v-else>
      <div class="text-center">
        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
        <h3 class="mt-2 text-sm font-medium text-gray-900">Empty</h3>
        <p class="mt-1 text-sm text-gray-500">
          You have no new appointments
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">

import axios from 'axios';
import { defineComponent } from 'vue';
import Header from '@/components/Doctor/Home/Header.vue';
import Appointments from '@/components/Doctor/Home/Appointments.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Appointments
  },
  data() {
    return {
      apiURL: process.env["VUE_APP_URL"],
      appointments: []
    }
  },
  mounted() {
    this.populateAppointmentsPending()
  },
  methods: {
    populateAppointmentsPending() {
      const accessToken = JSON.parse(localStorage.getItem("AccessToken") || '{}');
      axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + accessToken.access_token,
        'Access-Control-Allow-Origin': true
      };
      axios({
          method: 'get',
          url: this.apiURL + '/my-appointments/pending'
      })
      .then(response => {
        this.appointments = response.data
      })
      .catch(error => {
          console.log(error);
      });
    }
  }
});
</script>

