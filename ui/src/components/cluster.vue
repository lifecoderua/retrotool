<template>
  <div class="cluster">
    <h3>{{ cluster.title }}</h3>
    <p>{{ cluster }}</p>

    <card v-for="cardId in clusteredCardIds" :card="cards[cardId]" :key="cardId"></card>
    {{ clusteredCardIds }}
  </div>
</template>

<script>
  import Card from '@/components/card'

  export default {
    name: 'cluster',
    props: ['cluster', 'cards', 'clusteredCardIds'],
    components: { Card },
  }
</script>

<style scoped>
  .cluster {
    clear: both;
  }
</style>
