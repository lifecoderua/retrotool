<template>
  <div id="room">
    <h2>Welcome to Retro {{ $route.params.id }}</h2>
    <card v-for="card in allCards" :card="card" :key="card.id"></card>
  </div>
</template>

<script>
  import Card from '@/components/card'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'room',
    components: { Card },
    mounted() {
      this.init()
    },
    computed: {
      ...mapGetters('card', [
        'allCards'
      ])
    },
    methods: {
      ...mapActions('card', [
        'init',
      ])
    }
  }
</script>

<style scoped>

</style>
