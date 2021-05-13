<template>
  <div id="nav">
    <div class="relative bg-primary-50 border-b-2 border-gray-100 dark:bg-gray-600 dark:bg-gray-800 dark:border-gray-500 ">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10" >
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <router-link to="/" class="flex justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 text-gray-900 dark:text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span class="text-3xl ml-3 text-base font-medium text-gray-900 dark:text-gray-50 inline-block align-middle">
                Harsh Doshi
              </span>
            </router-link>
          </div>
          <div class="m-2 md:hidden">
            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 ring-indigo-500 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false"  v-on:click="menuOpen()" >
              <span class="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex space-x-10">
            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
            <router-link
              class="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-300 active:bg-indigo-600" active-link="active"
              v-for="(item, i) in navItems"
              :key="i"
              :to="item.link" >
              {{ item.name }}
            </router-link>
          </nav>
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-300 " >
              Contact Me
            </a>
            <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-white dark:text-indigo-600 dark:hover:bg-gray-100" >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <div :class="isMenuOpen ?'duration-200 ease-out' : 'duration-200 ease-in'"
        class="absolute top-0 w-screen transition transform origin-top md:hidden" v-if="isMenuOpen"  >
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50" >
          <div class="pt-4 pb-6 px-4">
            <div class="flex justify-between items-center border-b-2 pb-6 border-gray-100">
              <div class="flex justify-start lg:w-0 lg:flex-1">
                <router-link to="/" class="flex justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-3xl ml-3 text-base font-medium text-gray-900 inline-block align-middle">
                    Harsh Doshi
                  </span>
                </router-link>
              </div>
              <div class="mr-2 my-2 md:hidden">
                <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" v-on:click="menuOpen()" >
                  <span class="sr-only">Close menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <router-link class="-m-4 p-4 flex items-center rounded-md hover:bg-gray-50"
                  v-for="(item, i) in navItems"
                  :key="i"
                  :to="item.link" >
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                  <!-- Heroicon name: outline/chart-bar -->
                </router-link>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div>
              <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" >
                Sign up
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" class="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  props: {
    navItems: {
      type: Array,
      default: function () {
        return [{ name: 'Home', link: '/' }]
      }
    },
    sideLinks: {
      type: Array,
      default: function () {
        return [
          { name: 'Contact Me', link: 'mailto:me@iamharshdoshi.com', focus: false },
          { name: 'Download Resume', link: '/Harsh-Doshi-Resume.pdf', focus: true }
        ]
      }
    }
  },
  data () {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    menuOpen () {
      this.isMenuOpen = !this.isMenuOpen
      return this.isMenuOpen
    }
  }
}
</script>

<style scoped>
</style>
