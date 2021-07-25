<template>

      <main class="flex-1 relative overflow-y-auto focus:outline-none">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Doctors</h1>
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
import Lists from '@/components/Scheduler/Doctors/Lists.vue';

export default defineComponent({
  name: 'Doctors',
  components: {
    Lists,
  },
});
</script>