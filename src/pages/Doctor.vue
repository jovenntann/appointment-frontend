<template>

  <div class="h-screen flex overflow-hidden bg-gray-100">
    
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" static class="fixed inset-0 flex z-40 md:hidden" @close="sidebarOpen = false" :open="sidebarOpen">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <img class="h-8 w-auto" src="../assets/logo.png" alt="Workflow" />
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2 space-y-1">
                <a v-for="item in navigation" :key="item.name"  @click="navigate(item.href)" href="#" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']">
                  <component :is="item.icon" :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-4 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
                  {{ item.name }}
                </a>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col h-0 flex-1">
          <div class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
            <img class="h-8 w-auto" src="../assets/logo.png" alt="Workflow" />
          </div>
          <div class="flex-1 flex flex-col overflow-y-auto">
            <nav class="flex-1 px-2 py-4 bg-gray-800 space-y-1">
              <a v-for="item in navigation" :key="item.name" @click="navigate(item.href)" href="#" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
                <component :is="item.icon" :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
                {{ item.name }}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 flex">

          </div>
          <div class="ml-4 flex items-center md:ml-6">
              
            <button v-if="profile.status_id==1" @click="updateStatus(profile.id,2)" type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Available 
            </button>
            <button v-if="profile.status_id==2" @click="updateStatus(profile.id,1)" type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Unavailable 
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" :src="profilePic" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem>
                    <a @click="logout()" href="#" class="'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <router-view/>
      
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  BellIcon,
  CalendarIcon,
  HomeIcon,
  MenuAlt2Icon,
  XIcon,
} from 'heroicons-vue3/outline'
import { SearchIcon } from 'heroicons-vue3/solid'

export default defineComponent ({
  data () {
    return {
      apiURL: process.env["VUE_APP_URL"],
      navigation: [
        { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
        { name: 'Appointments', href: '/appointments', icon: CalendarIcon, current: false },
      ],
      sidebarOpen: false,
      url: '',
      profilePic: '',
      profile: {}
    }
  },
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    MenuAlt2Icon,
    SearchIcon,
    XIcon,
  },
  mounted() {
    const accessToken = JSON.parse(localStorage.getItem("AccessToken") || '{}');
    this.profilePic = accessToken['profile_pic']
    this.getProfile()
  },
  methods: {
    navigate(url: string) {
      this.$router.push(url)

      if (url === "/") {
        this.navigation = [
          { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
          { name: 'Appointments', href: '/appointments', icon: CalendarIcon, current: false }
        ]
      }
      else if (url === "/appointments") {
        this.navigation = [
          { name: 'Dashboard', href: '/', icon: HomeIcon, current: false },
          { name: 'Appointments', href: '/appointments', icon: CalendarIcon, current: true },
        ]
      }
    },
    logout() {
      localStorage.removeItem('AccessToken')
      this.$router.push('/login/')
    },
    getProfile() {
      const accessToken = JSON.parse(localStorage.getItem("AccessToken") || '{}');
      axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + accessToken.access_token,
        'Access-Control-Allow-Origin': true
      };
      axios({
          method: 'get',
          url: this.apiURL + '/me/'
      })
      .then(response => {
        console.log(response.data)
        this.profile = response.data
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
        this.getProfile()
      })
      .catch(error => {
          console.log(error);
      });
    }
  }
})
</script>
