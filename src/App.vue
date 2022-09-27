<template>
  <div id="app">
    <ProblemList></ProblemList>
    <router-view/>
  </div>
</template>

<script>
  import ProblemList from '@/components/ProblemList.vue'
  export default {
    components: {
            ProblemList
        },
  }
</script>

<style>

</style>
