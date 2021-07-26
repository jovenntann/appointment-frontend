<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="div" static class="fixed inset-0 overflow-hidden" @close="updateParentIsOpen(false)" :open="isOpen">
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
          <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
            <div class="w-screen max-w-2xl">
              <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                <div class="px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <DialogTitle class="text-lg font-medium text-gray-900">
                      Panel title
                    </DialogTitle>
                    <div class="ml-3 h-7 flex items-center">
                      <button class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="closeOpen()">
                        <span class="sr-only">Close panel</span>
                        <XIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mt-6 relative flex-1 px-4 sm:px-6">
                  <!-- Replace with your content -->
                  <div class="absolute inset-0 px-4 sm:px-6">
                    <!-- <div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true" /> -->


                      <form class="space-y-8 divide-y divide-gray-200">
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
                                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                </div>
                              </div>

                              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                  Last name
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                </div>
                              </div>

                              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                  Pick a Date
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                  <input id="email" name="email" type="email" autocomplete="email" class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" />
                                </div>
                              </div>

                              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="from" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                  From
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                  <select id="from" name="from" autocomplete="from" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                                    <option>09:00 AM</option>
                                    <option>09:30 AM</option>
                                    <option>10:00 AM</option>
                                  </select>
                                </div>
                              </div>

                              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="from" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                  To
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                  <select id="from" name="from" autocomplete="from" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                                    <option>09:00 AM</option>
                                    <option>09:30 AM</option>
                                    <option>10:00 AM</option>
                                  </select>
                                </div>
                              </div>

                              <!-- <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="street-address" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                  Street address
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                  <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" />
                                </div>
                              </div> -->

                              <!-- <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="city" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                  City
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                  <input type="text" name="city" id="city" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                </div>
                              </div>

                              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="state" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                  State / Province
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                  <input type="text" name="state" id="state" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                </div>
                              </div> -->

                              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="zip" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                  Assign Doctor
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                    <Listbox as="div" v-model="selected">
                                      <div class="mt-1 relative">
                                        <ListboxButton class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                          <span class="flex items-center">
                                            <img :src="selected.avatar" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
                                            <span class="ml-3 block truncate">{{ selected.name }}</span>
                                          </span>
                                          <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                          </span>
                                        </ListboxButton>

                                        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                                          <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                            <ListboxOption as="template" v-for="person in people" :key="person.id" :value="person" v-slot="{ active, selected }">
                                              <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                                                <div class="flex items-center">
                                                  <img :src="person.avatar" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
                                                  <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                                                    {{ person.name }}
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

  


            
                            </div>
                          </div>

                        </div>

                        <div class="pt-5">
                          <div class="flex justify-end">
                            <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Cancel
                            </button>
                            <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Save
                            </button>
                          </div>
                        </div>
                      </form>


                    
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

<script>
import { defineComponent } from 'vue';
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { XIcon } from '@heroicons/vue/outline'
import { CheckIcon, SelectorIcon } from 'heroicons-vue3/solid'

export default defineComponent({
  props: {
    isOpen: Boolean,
  },
  data() {
    return {
      people: [
        {
          id: 1,
          name: 'Wade Cooper',
          avatar:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 2,
          name: 'Arlene Mccoy',
          avatar:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 3,
          name: 'Devon Webb',
          avatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
        },
        {
          id: 4,
          name: 'Tom Cook',
          avatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 5,
          name: 'Tanya Fox',
          avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 6,
          name: 'Hellen Schmidt',
          avatar:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 7,
          name: 'Caroline Schultz',
          avatar:
            'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 8,
          name: 'Mason Heaney',
          avatar:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 9,
          name: 'Claudie Smitham',
          avatar:
            'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 10,
          name: 'Emil Schaefer',
          avatar:
            'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
      selected: {
          id: 1,
          name: 'Wade Cooper',
          avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      }
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
    updateParentIsOpen(newValue) {
      this.$emit('parentUpdateIsOpen', newValue)
    }
  }
})
</script>





