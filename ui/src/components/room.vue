<template>
  <div id="room">
    <h2>Welcome to Retro {{ $route.params.id }}</h2>

    <cluster v-for="cluster in orderedClusters" :cluster="cluster" :key="cluster.id"></cluster>
    <card v-for="card in allCards" :card="card" :key="card.id"></card>
    {{ orderedClusters }}
    <hr>
  </div>
</template>

<script>
  import Card from '@/components/card'
  import Cluster from '@/components/cluster'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'room',
    components: { Card, Cluster },
    mounted() {
      this.initClusters()
      this.initCards()
    },
    computed: {
      ...mapGetters('card', [
        'allCards'
      ]),
      ...mapGetters('cluster', [
        'orderedClusters'
      ]),
    },
    methods: {
      ...mapActions('card', [
        'initCards',
      ]),
      ...mapActions('cluster', [
        'initClusters',
      ]),
    }
  }
</script>

<style scoped>

</style>
