<template>
  <div class="cluster">
    <h3>{{ cluster.title }}</h3>
    <p>{{ cluster }}</p>
  </div>
</template>

<script>
  export default {
    props: ['cluster']
  }
</script>

<style scoped>

</style>
