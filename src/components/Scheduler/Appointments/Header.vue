<template>
  <div class="relative pb-5 border-b border-gray-200 sm:pb-0">
    <div class="md:flex md:items-center md:justify-between">
      <div class="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-0 b">
        <button @click="updateParentIsOpen(true)" type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add Appointment
        </button>
      </div>
    </div>
    <div class="mt-8 mb-16">
      <!-- <div class="sm:hidden">
        <label for="current-tab" class="sr-only">Select a tab</label>
        <select id="current-tab" name="current-tab" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="-mb-px flex space-x-8">
          <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm']" :aria-current="tab.current ? 'page' : undefined">
            {{ tab.name }}
          </a>
        </nav>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  data() {
    return {
        tabs: [
          { name: 'All', href: '#', current: true },
          { name: 'Pending', href: '#', current: false },
          { name: 'Accepted', href: '#', current: false },
          { name: 'Rejected', href: '#', current: false }
        ]
    }
  },
  methods: {
    updateParentIsOpen(newValue: boolean) {
      this.$emit('parentUpdateIsOpen', newValue)
    }
  }
})
</script>