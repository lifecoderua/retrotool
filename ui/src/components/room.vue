<template>
  <div id="room">
    <h2>Welcome to Retro {{ $route.params.id }}</h2>

    <cluster v-for="cluster in orderedClusters"
      :cluster="cluster"
      :cards="allCards"
      :clustered-card-ids="clusteredCardIds(cluster.id)"
      :key="cluster.id"></cluster>
    <hr>
  </div>
</template>

<script>
  import Cluster from '@/components/cluster'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'room',
    components: { Cluster },
    mounted() {
      this.initClusters()
      this.initCards()
    },
    computed: {
      ...mapGetters('card', [
        'allCards',
        'clusteredCardIds'
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
