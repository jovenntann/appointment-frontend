<template>
    <div>
      
    <h3 class="text-lg leading-6 font-medium text-gray-900">
        Appointments
    </h3>

    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
        <dt>
            <div class="absolute bg-green-500 rounded-md p-3">
            <CheckCircleIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p class="ml-16 text-sm font-medium text-gray-500 truncate">Approved</p>
        </dt>
        <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p class="text-2xl font-semibold text-gray-900">
            {{ stats.approved_count }}
            </p>
            <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm">
                <a href="#" class="font-medium text-indrigo-600 hover:text-green-500">
                View all<span class="sr-only"> stats</span></a
                >
            </div>
            </div>
        </dd>
        </div>
        <div class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
        <dt>
            <div class="absolute bg-yellow-500 rounded-md p-3">
            <ClockIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p class="ml-16 text-sm font-medium text-gray-500 truncate">Pending</p>
        </dt>
        <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p class="text-2xl font-semibold text-gray-900">
            {{ stats.pending_count }}
            </p>
            <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm">
                <a href="#" class="font-medium text-indrigo-600 hover:text-yellow-500">
                View all<span class="sr-only"> stats</span></a
                >
            </div>
            </div>
        </dd>
        </div>
        <div class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
        <dt>
            <div class="absolute bg-red-500 rounded-md p-3">
            <XCircleIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p class="ml-16 text-sm font-medium text-gray-500 truncate">Rejected</p>
        </dt>
        <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p class="text-2xl font-semibold text-gray-900">
            {{ stats.declined_count }}
            </p>
            <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm">
                <a href="#" class="font-medium text-indrigo-600 hover:text-red-500">
                View all<span class="sr-only"> stats</span></a
                >
            </div>
            </div>
        </dd>
        </div>
    </dl>
    </div>
</template>


<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { CheckCircleIcon,ClockIcon, XCircleIcon } from 'heroicons-vue3/outline';

export default defineComponent ({
  components: {
    CheckCircleIcon,
    ClockIcon,
    XCircleIcon
  },
  data() {
    return {
      apiURL: process.env["VUE_APP_URL"],
      stats: {},
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

})
</script>