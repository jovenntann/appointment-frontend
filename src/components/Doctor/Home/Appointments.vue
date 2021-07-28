<template>
  <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li v-for="appointment in appointments" :key="appointment.appointment.id" class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
      <div class="w-full flex items-center justify-between p-6 space-x-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="text-gray-900 text-sm font-medium truncate">{{ appointment.appointment.patient_first_name }} {{ appointment.appointment.patient_last_name }}</h3>
            <span class="flex-shrink-0 inline-block px-2 py-0.5 text-yellow-800 text-xs font-medium bg-yellow-100 rounded-full">{{ appointment.appointment_status.name }}</span>
          </div>
          <p class="mt-1 text-gray-500 text-sm truncate">Today 03:00 - 03:00 PM</p>
          <p class="mt-1 text-gray-500 text-sm truncate">{{ appointment.appointment.comments }}</p>
        </div>
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="w-0 flex-1 flex">
            <a href="#" @click="acceptAppointment(appointment.appointment.id)" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
              <CheckIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Accept</span>
            </a>
          </div>
          <div class="-ml-px w-0 flex-1 flex">
            <a :href="'#'" @click="rejectAppointment(appointment.appointment.id)" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
              <XIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Reject</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { CheckIcon, XIcon } from  'heroicons-vue3/solid'

export default defineComponent ({
  props: {
    appointments: [Array, Object],
  },
  data() {
    return {
      apiURL: process.env["VUE_APP_URL"],
    }
  },
  components: {
      CheckIcon,
      XIcon,
  },
  mounted() {
    console.log(this.appointments)
  },
  methods: {
    acceptAppointment(appointmentId: string) {
      const accessToken = JSON.parse(localStorage.getItem("AccessToken") || '{}');
      axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + accessToken.access_token,
        'Access-Control-Allow-Origin': true
      };
      axios({
          method: 'put',
          url: this.apiURL + '/appointment/' + appointmentId,
          data: {
            appointment_status_id: 3
          }
      })
      .then(response => {
        console.log(response.data)
        this.$emit('parentPopulateAppointmentsPending')
      })
      .catch(error => {
          console.log(error);
      });
    },
    rejectAppointment(appointmentId: string) {
      const accessToken = JSON.parse(localStorage.getItem("AccessToken") || '{}');
      axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + accessToken.access_token,
        'Access-Control-Allow-Origin': true
      };
      axios({
          method: 'put',
          url: this.apiURL + '/appointment/' + appointmentId,
          data: {
            appointment_status_id: 2
          }
      })
      .then(response => {
        console.log(response.data)
        this.$emit('parentPopulateAppointmentsPending')
      })
      .catch(error => {
          console.log(error);
      });
    }
  }
})
</script>