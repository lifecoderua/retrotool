<template>
  <div id="room">
    <h2>Welcome to Retro {{ $route.params.id }}</h2>

    <cluster v-for="cluster in orderedClusters"
      :cluster="cluster"
      :cards="allCards"
      :clustered-card-ids="clusteredCardIds(cluster.id)"
      :key="cluster.id"></cluster>
    <hr>

    <modal name="hello-world" @before-open="initModal">
      hello, world!

      {{ modalData.card }}
    </modal>
  </div>
</template>

<script>
  import Cluster from '@/components/cluster'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'room',
    components: { Cluster },
    data() {
      return {
        modalData: {}
      }
    },
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
      initModal(evt) {
        this.modalData = evt.params
      }
    }
  }
</script>

<style scoped>

</style>
