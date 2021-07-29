<template >
  <SideOver 
    :is-open="isOpen" 
    :doctors="doctors"
    @parentUpdateStartDate="updateStartDate($event)"
    @parentUpdateEndDate="updateEndDate($event)"
    @parentUpdateIsOpen="updateIsOpen($event)" 
    @parentRepopulateAppointments="repopulateAppointments()"
  ></SideOver>
  <SideOverEdit 
  :is-edit-open="isEditOpen" 
  :doctors="doctors" 
  :appointmentId="appointmentId" 
  @parentUpdateStartDate="updateStartDate($event)"
  @parentUpdateEndDate="updateEndDate($event)"
  @parentUpdateIsEditOpen="updateIsEditOpen($event)" 
  @parentRepopulateAppointments="repopulateAppointments()"
  ></SideOverEdit>
  <main class="flex-1 relative overflow-y-auto focus:outline-none" >
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">Appointments</h1>
            <div class="flex space-x-6 mt-4">
              <div class="flex-1">
                <div class="w-full">
                  <label for="search" class="sr-only">Search</label>
                  <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input id="search" @input="filterAppointments()" v-model="searchText" name="search" class="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm" placeholder="Search by name" type="search" />
                  </div>
                </div>
              </div>
              <div class="flex-2">
                <div class="w-full">
                <el-date-picker
                  v-model="dateRange"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="Start date"
                  end-placeholder="End date"
                  @change="filterDateRange()">
                </el-date-picker>
                </div>
              </div>
            </div>
        <Header @parentUpdateIsOpen="updateIsOpen($event)"></Header>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <!-- Replace with your content -->
        <div class="py-4">
          <Lists :appointments="filteredAppointments" :appointmentId="appointmentId" @parentUpdateAppointmentId="updateAppointmentId($event)" @parentUpdateIsEditOpen="updateIsEditOpen($event)"></Lists>
        </div>
        <!-- /End replace -->
      </div>
    </div>
    
  </main>

</template>

<script lang="ts">
import moment from 'moment'
import axios from 'axios';
import { defineComponent } from 'vue';
import Header from '@/components/Scheduler/Appointments/Header.vue';
import Lists from '@/components/Scheduler/Appointments/Lists.vue';
import SideOver from '@/components/Scheduler/Appointments/SideOver.vue';
import SideOverEdit from '@/components/Scheduler/Appointments/SideOverEdit.vue';
import { SearchIcon } from 'heroicons-vue3/solid'

export default defineComponent({
  name: 'Appointments',
  components: {
    Header,
    Lists,
    SideOver,
    SideOverEdit,
    SearchIcon
  },
  data() {
    return {
      apiURL: process.env["VUE_APP_URL"],
      isOpen: false,
      isEditOpen: false,
      appointments: [],
      filteredAppointments: [],
      doctors: [],
      appointmentId: '',
      searchText: '',
      dateRange: '',
      startDate: '',
      endDate: ''
    }
  },
  mounted() {
    this.repopulateAppointments()
  },
  methods: {
    updateIsOpen(newValue: boolean) {
      this.isOpen = newValue
    },
    updateIsEditOpen(newValue: boolean) {
      this.isEditOpen = newValue
    },
    updateAppointmentId(newValue: any) {
      this.appointmentId = String(newValue)
      console.log(this.appointmentId)
    },
    repopulateAppointments() {
      const accessToken = JSON.parse(localStorage.getItem("AccessToken") || '{}');
      axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + accessToken.access_token,
        'Access-Control-Allow-Origin': true
      };
      axios({
          method: 'get',
          url: this.apiURL + '/appointments'
      })
      .then(response => {
        this.appointments = response.data
        this.filteredAppointments = response.data
      })
      .catch(error => {
          console.log(error);
      });
    },
    populateDoctors() {
      const accessToken = JSON.parse(localStorage.getItem("AccessToken") || '{}');
      axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + accessToken.access_token,
        'Access-Control-Allow-Origin': true
      };
      axios({
          method: 'get',
          url: this.apiURL + '/doctors/availability/?startDate=' + this.startDate + '&endDate=' + this.endDate
      })
      .then(response => {
        this.doctors = response.data
      })
      .catch(error => {
          console.log(error);
      });
    },
    filterAppointments() {
      if (this.searchText === "") {
        this.filteredAppointments = this.appointments
      } else {
        var matchedAppointments: any = []
        for (var i in this.appointments) {
          let first_name: string = this.appointments[i]['appointment']['patient_first_name']
          let last_name: string = this.appointments[i]['appointment']['patient_last_name']
          let full_name: string = first_name + ' ' + last_name
          if (first_name.toLowerCase().includes(this.searchText.toLowerCase()) || last_name.toLowerCase().includes(this.searchText.toLowerCase()) || full_name.toLowerCase().includes(this.searchText.toLowerCase())) {
            matchedAppointments.push(this.appointments[i])
          }
        }
        this.filteredAppointments = matchedAppointments
      }
    },
    filterDateRange() {

      var startDate = moment(String(this.dateRange[0])).format('YYYY-MM-DD')
      var endDate = moment(String(this.dateRange[1])).format('YYYY-MM-DD')
      
      const accessToken = JSON.parse(localStorage.getItem("AccessToken") || '{}');
      axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + accessToken.access_token,
        'Access-Control-Allow-Origin': true
      };
      axios({
          method: 'get',
          url: this.apiURL + '/appointments/filter/?startDate=' + startDate + '&' + 'endDate=' +  endDate
      })
      .then(response => {
        this.appointments = response.data
        this.filteredAppointments = response.data
        this.searchText = ""
      })
      .catch(error => {
          console.log(error);
      });

    },
    updateStartDate(value: string) {
      console.log("updateStartDate")
      this.startDate = value
    },
    updateEndDate(value: string) {
      console.log("updateEndDate")
      this.endDate = value
      this.populateDoctors()
    },
  }
});
</script>