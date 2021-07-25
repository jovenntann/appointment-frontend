<template>
  <main class="flex-1 relative overflow-y-auto">
    <Header/>
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="py-4">
          <Stats/>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Stats from '@/components/Dashboard/Home/Stats.vue';
import Header from '@/components/Dashboard/Home/Header.vue';
export default defineComponent({
  name: 'Home',
  components: {
    Stats,
    Header
  },
});
</script>

