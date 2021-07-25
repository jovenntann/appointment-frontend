<template>

  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">

    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
      <nav class="space-y-1">
        <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50', 'group rounded-md px-3 py-2 flex items-center text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
          <component :is="item.icon" :class="[item.current ? 'text-indigo-500 group-hover:text-indigo-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']" aria-hidden="true" />
          <span class="truncate">
            {{ item.name }}
          </span>
        </a>
      </nav>
    </aside>

    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
        <router-view/>
    </div>
    
  </div>
  
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs } from 'vue'
import { FlagIcon, ChatIcon, ShoppingBagIcon, ViewGridAddIcon } from 'heroicons-vue3/outline'


export default defineComponent({
  components: {},

  setup() {
    const state = reactive({
      navigation: [
        { name: 'Connect Page', href: '#', icon: FlagIcon, current: true },
        { name: 'Messenger', href: '#', icon: ChatIcon, current: false },
        { name: 'Store', href: '#', icon: ShoppingBagIcon, current: false },
        { name: 'Integrations', href: '#', icon: ViewGridAddIcon, current: false },
      ]
    })
    return {...toRefs(state)}
  },

  mounted() {
    console.log(this.$route)
    if (this.$route.name === "Setup-Messenger") {
      this.navigation = [
        { name: 'Connect Page', href: '#', icon: FlagIcon, current: false },
        { name: 'Messenger', href: '#', icon: ChatIcon, current: true },
        { name: 'Store', href: '#', icon: ShoppingBagIcon, current: false },
        { name: 'Integrations', href: '#', icon: ViewGridAddIcon, current: false },
      ]
    }
  }
})
</script>