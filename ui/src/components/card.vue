<template>
  <div class="card">
    <h3>{{ card.title }}</h3>
    <p>{{ card }}</p>
  </div>
</template>

<script>
  export default {
    props: ['card']
  }
</script>

<style scoped>

</style>
