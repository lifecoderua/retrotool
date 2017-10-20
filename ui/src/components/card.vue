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
  .card {
    float: left;
    width: 23%;
    margin-right: 2%;
    min-height: 6em;
    border: 3px solid #aaa;
  }
</style>
