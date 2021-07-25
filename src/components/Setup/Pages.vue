<template>
    <h1 class="text-2xl font-semibold text-gray-900">Connect your page</h1>
    <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
    <li v-for="file in files" :key="file.source" class="relative">
        <div class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <a href="/setup/messenger">
        <img :src="file.source" alt="" class="object-cover pointer-events-none group-hover:opacity-75"/></a>
        <button type="button" class="absolute inset-0 focus:outline-none">
            <span class="sr-only">View details for {{ file.title }}</span>
        </button>
        </div>
        <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{{ file.title }}</p>
        <p class="block text-xs font-small text-gray-500 pointer-events-none">{{ file.size }}</p>
    </li>
    </ul>
</template>

<script>
const files = [
  {
    title: 'Bixon Inc',
    size: 'Software Company',
    source:
      'https://cdn.dribbble.com/users/6225232/screenshots/14608146/media/f471db8e877cca7eaa5435e778b4ab56.jpg?compress=1&resize=400x300',
  },
  {
    title: 'Meble',
    size: 'Telecom',
    source:
      'https://cdn.dribbble.com/users/6225232/screenshots/14546150/media/26869865d1c84f921ddea28cac77cfc1.jpg?compress=1&resize=400x300',
  },
  {
    title: 'iTone',
    size: 'Telecom',
    source:
      'https://cdn.dribbble.com/users/371199/screenshots/11891575/media/6df51f6e524e3918c4ccec381d4f4523.jpg?compress=1&resize=400x300',
  },
  {
    title: 'EzCoin',
    size: 'Crypto Currency',
    source:
      'https://cdn.dribbble.com/users/3159297/screenshots/14637559/media/ec9ccee7c65600afb666f85b1d9a7508.png?compress=1&resize=400x300',
  }
]

export default {
  setup() {
    return {
      files,
    }
  },
}
</script>