<template>
    <div>
      
    <h3 class="text-lg leading-6 font-medium text-gray-900">
        Appointments
    </h3>

    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="item in stats" :key="item.id" class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
        <dt>
            <div class="absolute bg-indigo-500 rounded-md p-3">
            <component :is="item.icon" class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p class="ml-16 text-sm font-medium text-gray-500 truncate">{{ item.name }}</p>
        </dt>
        <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p class="text-2xl font-semibold text-gray-900">
            {{ item.stat }}
            </p>
            <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm">
                <a href="#" class="font-medium text-indrigo-600 hover:text-indigo-500">
                View all<span class="sr-only"> {{ item.name }} stats</span></a
                >
            </div>
            </div>
        </dd>
        </div>
    </dl>
    </div>
</template>


<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { ArrowSmDownIcon, ArrowSmUpIcon } from 'heroicons-vue3/solid';
import { CursorClickIcon, MailOpenIcon, UsersIcon } from 'heroicons-vue3/outline';

export default defineComponent ({
  components: {
    ArrowSmDownIcon,
    ArrowSmUpIcon,
  },
  setup() {
    const state = reactive({
      stats: [
        { id: 1, name: 'Approved', stat: '20', icon: UsersIcon, change: '', changeType: '' },
        { id: 2, name: 'Pending', stat: '5', icon: MailOpenIcon, change: '', changeType: '' },
        { id: 3, name: 'Rejected', stat: '10', icon: CursorClickIcon, change: '', changeType: '' },
      ]
    })
    return {...toRefs(state)}
  },

})
</script>