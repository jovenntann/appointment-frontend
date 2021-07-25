<template>
    <h1 class="text-2xl font-semibold text-gray-900">Messenger</h1>
    <form class="space-y-8 divide-y divide-gray-200 mr-24">
      <div>
        <div class="mb-6">
          <label for="greetings" class="block text-sm font-medium text-gray-700">
            Greetings
          </label>
          <p class="mt-1 text-sm text-gray-500">
            This is the message appeared when the customer open your page messenger for the first time
          </p>
            <div class="mt-1">
              <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md" />
            </div>
        </div>    
      
        <div class="mb-6">
          <label for="welcome-message" class="block text-sm font-medium text-gray-700">
            Welcome Message
          </label>
          <p class="mt-1 text-sm text-gray-500">
            This message appeared when the user click on get started. Update with your custom message.
          </p>
            <div class="mt-1">
              <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md" />
            </div>
        </div>    

        <div class="sm:col-span-6">
          <label for="cover-photo" class="block text-sm font-medium text-gray-700">
            Cover photo
          </label>
          <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div class="space-y-1 text-center">
              <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div class="flex text-sm text-gray-600">
                <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs text-gray-500">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer -->
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