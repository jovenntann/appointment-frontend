<template>

  <div class="bg-white shadow">
    <div class="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
      <div class="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
        <div class="flex-1 min-w-0">
          <!-- Profile -->
          <div class="flex items-center">
            <img class="hidden h-16 w-16 rounded-full sm:block" :src="profile_pic" alt="" />
            <div>
              <div class="flex items-center">
                <img class="h-16 w-16 rounded-full sm:hidden" :src="profile_pic" alt="" />
                <h1 class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                  Good Day, {{first_name}} {{last_name}}
                </h1>
              </div>
              <dl class="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                <dt class="sr-only">Company</dt>
                <dd class="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                  <OfficeBuildingIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  St. Luke Hospital
                </dd>
                <dt class="sr-only">Account status</dt>
                <dd class="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                  <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                  Doctor
                </dd>
              </dl>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

import {CheckCircleIcon,OfficeBuildingIcon,} from 'heroicons-vue3/solid'
export default defineComponent({
  name: 'Header',
  data() {
    return {
      first_name: '',
      last_name: '',
      profile_pic: ''
    }
  },
  components: {
    CheckCircleIcon,
    OfficeBuildingIcon,
  },
  mounted () {
    const accessToken = JSON.parse(localStorage.getItem("AccessToken") || '{}');
    this.first_name = accessToken['first_name']
    this.last_name = accessToken['last_name']
    this.profile_pic = accessToken['profile_pic']
  }
});


</script>

