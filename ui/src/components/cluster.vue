<template>
  <div class="cluster">
    <h3>{{ cluster.title }}</h3>
    <p>{{ cluster }}</p>

    <div>
      <draggable v-model="cardIds" :options="{group:'cards', sort:'false', filter:'.card-add'}" class="cluster-cards" @add="onCardMoved" :data-cluster-id="cluster.id">
        <card-add :cluster-id="cluster.id"></card-add>
        <card v-for="cardId in clusteredCardIds" :card="cards[cardId]" :key="cardId" :data-card-id="cardId"></card>
      </draggable>
    </div>
    {{ clusteredCardIds }}
  </div>
</template>

<script>
  import Card from '@/components/card'
  import CardAdd from '@/components/card-add'
  import draggable from 'vuedraggable'
  import { mapActions } from 'vuex'

  export default {
    name: 'cluster',
    props: ['cluster', 'cards', 'clusteredCardIds'],
    components: { Card, CardAdd, draggable },
    computed: {
      cardIds: {
        get() {
          return this.clusteredCardIds
        },
        set(value) {}
      }
    },
    methods: {
      ...mapActions('card', [
        'moveCard',
      ]),
      onCardMoved(evt) {
        console.log({
          clusterId: evt.to.dataset.clusterId,
          cardId: evt.item.dataset.cardId
        })
        this.moveCard({
          targetClusterId: evt.to.dataset.clusterId,
          cardId: evt.item.dataset.cardId
        })
      }
    }
  }
</script>

<style scoped>
  .cluster-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 1em;
    grid-row-gap: 2em;
    min-height: 10em;
  }

  .cluster draggable {
    min-height: 10em;
  }
</style>
