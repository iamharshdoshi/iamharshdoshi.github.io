<template>
  <div class="w-full w-screen h-screen bg-gradient-to-tr from-red-400 via-pink-400 to-blue-400 dark:bg-gradient-to-tr dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <div class="m-auto  container w-full h-full p-2">
      <router-view/>
    </div>
  </div>
</template>

<script>
// import Nav from '@/components/nav'
import effectBalls from '@/js/effects.ball.js'
import '@/css/effects.ball.css'
import RESUME from '@/resume.json'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      resume: {}
    }
  },
  mounted () {
    this.resume = RESUME
    window.resume = RESUME
    effectBalls.init()
  },
  methods: {

  }
}
</script>
