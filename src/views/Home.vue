<template>
  <div class="w-full" id="Home">
    <div class="w-2/3 m-auto p-2">
      <div class="bg-white dark:bg-gray-500 rounded p-4">
        <div class="block w-full">
          <h1 class="text-4xl font-bold">{{ $t('title',[resume.basics.name]) }}</h1>
        </div>
        <div class="block w-full">
          <span class="text-base"> {{ resume.basics.label }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      resume: {}
    }
  },
  mounted () {
    this.resume = window.resume
  }
}
</script>
