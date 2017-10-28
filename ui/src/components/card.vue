<template>
  <div class="card" @click="edit">
    <h3>{{ card.title }}</h3>
    <p>{{ card }}</p>
  </div>
</template>

<script>
  export default {
    props: ['card'],
    methods: {
      edit() {
        this.$modal.show('card-modal', {card: this.card, mode: 'edit'})
      }
    }
  }
</script>

<style scoped>
  .card {
    min-height: 6em;
    border: 3px solid #aaa;
    cursor: pointer;
  }
</style>
