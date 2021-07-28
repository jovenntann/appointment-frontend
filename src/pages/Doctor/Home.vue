<template>
  <main class="flex-1 relative overflow-y-auto">
    <Header/>
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">Recent Appointment</h1>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="py-4">
          <Appointments :appointments="appointments" @parentPopulateAppointmentsPending="populateAppointmentsPending()"> </Appointments>
        </div>
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

