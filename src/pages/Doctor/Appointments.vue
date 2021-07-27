<template>
  <main class="flex-1 relative overflow-y-auto focus:outline-none">
    <div class="py-6">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">Appointments</h1>
        <Header @parentUpdateIsOpen="updateIsOpen($event)"></Header>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <!-- Replace with your content -->
        <div class="py-4">
          <Lists :appointments="appointments"></Lists>
        </div>
        <!-- /End replace -->
      </div>
    </div>
    
  </main>

</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import Header from '@/components/Doctor/Appointments/Header.vue';
import Lists from '@/components/Doctor/Appointments/Lists.vue';

export default defineComponent({
  name: 'Appointments',
  components: {
    Header,
    Lists,
  },
  data() {
    return {
      apiURL: process.env["VUE_APP_URL"],
      isOpen: false,
      appointments: []
    }
  },
  mounted() {
    this.repopulateAppointments()
  },
  methods: {
    repopulateAppointments() {
      const accessToken = JSON.parse(localStorage.getItem("AccessToken") || '{}');
      axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + accessToken.access_token,
        'Access-Control-Allow-Origin': true
      };
      axios({
          method: 'get',
          url: this.apiURL + '/my-appointments'
      })
      .then(response => {
        this.appointments = response.data
      })
      .catch(error => {
          console.log(error);
      });
    },
  }
});
</script>