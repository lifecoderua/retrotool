<template>
  <div id="room">
    <h2>Welcome to Retro {{ $route.params.id }}</h2>
    <card></card>
    <card></card>
    <card></card>
    {{ allCards }}
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
    props: {
      user: {
        default: () => {
          return {
            name: 'qwess',
            email: ''
          }
        }
      }
    },
    methods: {
      join() {
        console.log('Join for', this.user)
        this.$router.push({ name: 'room', id: 0 })
      },
      ...mapActions('card', [
        'init',
      ])
    }
  }
</script>

<style scoped>

</style>
