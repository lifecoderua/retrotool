<template>
  <div class="card card-add" @click="add">
    <p>+</p>
  </div>
</template>

<script>
  export default {
    props: ['clusterId'],
    methods: {
      add() {
        this.$modal.show('card-modal', {card: {clusterId: this.clusterId}, mode: 'add'})
      }
    }
  }
</script>

<style scoped>
  .card {
    min-height: 6rem;
    border: 3px solid #aaa;
    cursor: pointer;
  }

  .card-add {
    border: 3px dashed #b7b7b7;
    font-size: 4em;
    color: #b7b7b7;
  }
</style>
