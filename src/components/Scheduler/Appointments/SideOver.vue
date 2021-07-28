<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="div" static class="fixed inset-0 overflow-hidden" :open="isOpen">
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
          <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
            <div class="w-screen max-w-xl">
              <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                <div class="px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <DialogTitle class="text-lg font-medium text-gray-900">
                      Panel title
                    </DialogTitle>
                    <div class="ml-3 h-7 flex items-center">
                      <button class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="updateParentIsOpen(false)">
                        <span class="sr-only">Close panel</span>
                        <XIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mt-6 relative flex-1 px-4 sm:px-6">
                  <!-- Replace with your content -->
                  <div class="absolute inset-0 px-4 sm:px-6">

                      <div class="space-y-8 divide-y divide-gray-200">
                        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
 
                          <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                            <div>
                              <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Appointment Information
                              </h3>
                              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                                Please all fill-up all the information
                              </p>
                            </div>
                            <div class="space-y-6 sm:space-y-5">
                              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="first-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                  First name
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                  <input type="text" v-model="firstName" name="first-name" id="first-name" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                </div>
                              </div>

                              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                  Last name
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                  <input type="text" v-model="lastName" name="last-name" id="last-name" autocomplete="family-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                </div>
                              </div>

                              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                  Pick a Date
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                  <div class="block">
                                    <el-date-picker
                                      v-model="selectedDate"
                                      type="date"
                                      placeholder="Pick a day"
                                      :disabled-date="disabledDate"
                                      :shortcuts="shortcuts"
                                    >
                                    </el-date-picker>
                                  </div>
                                </div>
                              </div>

                              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="from" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                  From
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                  <el-time-select
                                    placeholder="Start time"
                                    v-model="startTime"
                                    start='09:00'
                                    step='00:30'
                                    end='17:00'
                                  >
                                  </el-time-select>
                                </div>
                              </div>

                              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="from" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                  To
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                  <el-time-select
                                    placeholder="End time"
                                    v-model="endTime"
                                    start='09:30'
                                    step='00:30'
                                    end='17:00'
                                    :minTime="startTime">
                                  </el-time-select>
                                </div>
                              </div>

                              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="zip" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                  Assign Doctor
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                    <Listbox as="div" v-model="selected">
                                      <div class="mt-1 relative">
                                        <ListboxButton class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                          <span class="flex items-center">
                                            <img :src="selected.profile_pic" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
                                            <span class="ml-3 block truncate">{{ selected.first_name }} {{ selected.last_name }}</span>
                                          </span>
                                          <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                          </span>
                                        </ListboxButton>

                                        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                                          <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                            <ListboxOption as="template" v-for="doctor in doctors" :key="doctor.id" :value="doctor" v-slot="{ active, selected }">
                                              <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                                                <div class="flex items-center">
                                                  <img :src="doctor.profile_pic" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
                                                  <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                                                    {{ doctor.first_name }} {{ doctor.last_name }}
                                                  </span>
                                                </div>
                                                <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                                </span>
                                              </li>
                                            </ListboxOption>
                                          </ListboxOptions>
                                        </transition>
                                      </div>
                                    </Listbox>                            
                                </div>
                              </div>

                              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="from" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                  Comments
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                  <div class="mt-1">
                                    <textarea v-model="comments" id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md" />
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>

                        </div>

                        <div class="pt-5">
                          <div class="flex justify-end">
                            <button @click="updateParentIsOpen(false)" type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Cancel
                            </button>
                            <button @click="submitAppointment()" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Save
                            </button>
                          </div>
                        </div>
                      </div>


                    
                  </div>
                  <!-- /End replace -->
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { XIcon } from 'heroicons-vue3/outline'
import { CheckIcon, SelectorIcon } from 'heroicons-vue3/solid'

export default defineComponent({
  props: {
    isOpen: Boolean,
    doctors: [Array, Object]
  },
  data() {
    return {
      apiURL: process.env["VUE_APP_URL"],
      selected: {
          id: 0,
          first_name: 'Select',
          last_name: '',
          profile_pic: 'https://icons-for-free.com/iconfiles/png/512/customer+person+profile+user+icon-1320184293316929121.png',
      },
      // Date Picker
        disabledDate(time: any) {
          const currentDate = new Date()
          const adjustedCurrentDate = currentDate.setDate(currentDate.getDate() - 1);
          if (time.getDay() == 0) {
            return true
          } else if (time < adjustedCurrentDate) {
            return true
          }
        },
        shortcuts: [{
          text: 'Today',
          value: new Date(),
        }, {
          text: 'Yesterday',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          },
        }, {
          text: 'A week ago',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          },
        }],
        selectedDate: '',
        // Time Select
        startTime: '',
        endTime: '',
        firstName: '',
        lastName: '',
        comments: ''
    }
  },
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
    // Doctor Dropdown
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
  },
  methods: {
    updateParentIsOpen(newValue: boolean) {
      this.$emit('parentUpdateIsOpen', newValue)
    },
    submitAppointment() {

      const selectedDateParsed = new Date(this.selectedDate)

      const splitStartTime = this.startTime.split(':')
      const startHours = splitStartTime[0]
      const startMinutes = splitStartTime[1]
      selectedDateParsed.setHours(parseInt(startHours),parseInt(startMinutes))
      const startDateTime = selectedDateParsed.toISOString().slice(0, 19).replace('T', ' ');

      const splitendTime = this.endTime.split(':')
      const endHours = splitendTime[0]
      const endMinutes = splitendTime[1]
      selectedDateParsed.setHours(parseInt(endHours),parseInt(endMinutes))
      const endDateTime = selectedDateParsed.toISOString().slice(0, 19).replace('T', ' ');

      console.log(startDateTime)
      console.log(endDateTime)

      const accessToken = JSON.parse(localStorage.getItem("AccessToken") || '{}');
      axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + accessToken.access_token,
        'Access-Control-Allow-Origin': true
      };
      axios({
          method: 'post',
          url: this.apiURL + '/appointments',
          data: {
            patient_first_name: this.firstName,
            patient_last_name: this.lastName,
            scheduled_from: startDateTime,
            scheduled_to: endDateTime,
            user_id: this.selected.id,
            comments: this.comments,
            appointment_status_id: 1
          }
      })
      .then(response => {
        console.log(response.data)
        this.$emit('parentRepopulateAppointments')
        this.updateParentIsOpen(false)
        this.selectedDate =  '',
        this.startTime = '',
        this.endTime = '',
        this.firstName = '',
        this.lastName = '',
        this.comments = ''
        this.selected = {
            id: 0,
            first_name: 'Select',
            last_name: '',
            profile_pic: 'https://icons-for-free.com/iconfiles/png/512/customer+person+profile+user+icon-1320184293316929121.png',
        }
      })
      .catch(error => {
          console.log(error);
      });
    }
  },
})
</script>





