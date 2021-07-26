<template>
  <SideOver :is-open="isOpen" @parentUpdateIsOpen="updateIsOpen($event)"></SideOver>
  <main class="flex-1 relative overflow-y-auto focus:outline-none">
    <div class="py-6">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">Appointments</h1>
        <Header @parentUpdateIsOpen="updateIsOpen($event)"></Header>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <!-- Replace with your content -->
        <div class="py-4">
          <Lists/>
        </div>
        <!-- /End replace -->
      </div>
    </div>
    
  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Scheduler/Appointments/Header.vue';
import Lists from '@/components/Scheduler/Appointments/Lists.vue';
import SideOver from '@/components/Scheduler/Appointments/SideOver.vue';

export default defineComponent({
  name: 'Appointments',
  components: {
    Header,
    Lists,
    SideOver
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    updateIsOpen(newValue: boolean) {
      this.isOpen = newValue
    }
  }
});
</script>