<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="doctor in doctors" :key="doctor.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" :src="doctor.profile_pic" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ doctor.first_name }} {{ doctor.last_name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ doctor.email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">Colon and Rectal Surgeons</div>
                  <div class="text-sm text-gray-500">St. Luke Hospital</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <button v-if="doctor.status_id == 1" @click="updateStatus(doctor.id,'2')" type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Available
                  </button>
                  <button v-if="doctor.status_id == 2" @click="updateStatus(doctor.id,'1')" type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Unavailable
                  </button>
                </td>
   
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';


export default defineComponent ({
  data() {
    return {
      doctors: [],
      apiURL: process.env["VUE_APP_URL"],
    }
  },
  mounted() {
    this.getDoctors()
  },
  methods: {
    getDoctors() {
      const accessToken = JSON.parse(localStorage.getItem("AccessToken") || '{}');
      axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + accessToken.access_token,
        'Access-Control-Allow-Origin': true
      };
      axios({
          method: 'get',
          url: this.apiURL + '/doctors/?status=all'
      })
      .then(response => {
        this.doctors = response.data
      })
      .catch(error => {
          console.log(error);
      });
    },
    updateStatus(doctorId: string,statusId: string) {
      const accessToken = JSON.parse(localStorage.getItem("AccessToken") || '{}');
      axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + accessToken.access_token,
        'Access-Control-Allow-Origin': true
      };
      axios({
          method: 'put',
          url: this.apiURL + '/user/status/?user_id=' + doctorId + '&status_id=' + statusId
      })
      .then(response => {
        console.log(response.data)
        this.getDoctors()
      })
      .catch(error => {
          console.log(error);
      });
    }
  }
})
</script>