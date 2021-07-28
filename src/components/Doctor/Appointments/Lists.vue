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
                  Schedule
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Comments
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="appointment in appointments" :key="appointment.appointment.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ appointment.appointment.patient_first_name }} {{ appointment.appointment.patient_last_name }}
                      </div>
                      <!-- <div class="text-sm text-gray-500">
                        {{ appointment.Appointment.comments }}
                      </div> -->
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ formatDate(appointment.appointment.scheduled_from) }}</div>
                  <div class="text-sm text-gray-500">{{ formatTime(appointment.appointment.scheduled_from) }} - {{formatTime(appointment.appointment.scheduled_to)}}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ limitComments(appointment.appointment.comments) }}
                </td>

                <td v-if="appointment.user" class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ appointment.user.first_name }} {{ appointment.user.last_name }}
                </td>
                <td v-else class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <i>Not Assigned</i>
                </td>


                <td class="px-6 py-4 whitespace-nowrap">
                  <span v-if="appointment.appointment_status.name == 'Pending'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    {{ appointment.appointment_status.name }}
                  </span>
                  <span v-if="appointment.appointment_status.name == 'Approved'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{ appointment.appointment_status.name }}
                  </span>
                  <span v-if="appointment.appointment_status.name == 'Declined'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    {{ appointment.appointment_status.name }}
                  </span>
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
import moment from 'moment'
import { defineComponent } from 'vue';

export default defineComponent ({
  props: {
    appointments: [Array, Object],
  },
  methods: {
    formatDate(value: string) {
      if (value) {
        const convertedDate =  new Date(value + '.000Z').toLocaleString('en-US', { timeZone: 'Asia/Manila' }) 
        return moment(String(convertedDate)).format('MMMM Do YYYY')
      }
    },
    formatTime(value: string) {
      if (value) {
        const convertedDate =  new Date(value + '.000Z').toLocaleString('en-US', { timeZone: 'Asia/Manila' }) 
        return moment(String(convertedDate)).format('h:mm a')
      }
    },
    limitComments(value: string) {
      return value.substring(0, 20) + '..'
    }
  }
})


</script>