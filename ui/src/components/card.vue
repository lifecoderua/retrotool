<template>
  <div class="card">
    <h3 @click="edit">{{ card.title }}</h3>
    <p>{{ card }}</p>
  </div>
</template>

<script>
  export default {
    props: ['card'],
    methods: {
      edit() {
        this.$modal.show('hello-world', {card: this.card})
      }
    }
  }
</script>

<style scoped>
  .card {
    min-height: 6em;
    border: 3px solid #aaa;
  }
</style>
