<template >
  <SideOver :is-open="isOpen" :doctors="doctors" @parentUpdateIsOpen="updateIsOpen($event)" @parentRepopulateAppointments="repopulateAppointments()"></SideOver>
  <SideOverEdit :is-edit-open="isEditOpen" :doctors="doctors" @parentUpdateIsEditOpen="updateIsEditOpen($event)" @parentRepopulateAppointments="repopulateAppointments()"></SideOverEdit>
  <main class="flex-1 relative overflow-y-auto focus:outline-none" >
    <div class="py-6">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">Appointments</h1>
        <Header @parentUpdateIsOpen="updateIsOpen($event)"></Header>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <!-- Replace with your content -->
        <div class="py-4">
          <Lists :appointments="appointments" @parentUpdateIsEditOpen="updateIsEditOpen($event)"></Lists>
        </div>
        <!-- /End replace -->
      </div>
    </div>
    
  </main>

</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import Header from '@/components/Scheduler/Appointments/Header.vue';
import Lists from '@/components/Scheduler/Appointments/Lists.vue';
import SideOver from '@/components/Scheduler/Appointments/SideOver.vue';
import SideOverEdit from '@/components/Scheduler/Appointments/SideOverEdit.vue';

export default defineComponent({
  name: 'Appointments',
  components: {
    Header,
    Lists,
    SideOver,
    SideOverEdit
  },
  data() {
    return {
      apiURL: process.env["VUE_APP_URL"],
      isOpen: false,
      isEditOpen: false,
      appointments: [],
      doctors: []
    }
  },
  mounted() {
    this.repopulateAppointments()
    this.populateDoctors()
  },
  methods: {
    updateIsOpen(newValue: boolean) {
      this.isOpen = newValue
    },
    updateIsEditOpen(newValue: boolean) {
      this.isEditOpen = newValue
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
          url: this.apiURL + '/doctors'
      })
      .then(response => {
        this.doctors = response.data
      })
      .catch(error => {
          console.log(error);
      });
    }
  }
});
</script>