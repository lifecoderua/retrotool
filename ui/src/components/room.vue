<template>
  <div id="room">
    <h2>Welcome to Retro {{ $route.params.id }}</h2>
    <card></card>
    <card></card>
    <card></card>
  </div>
</template>

<script>
  import Card from '@/components/card'

  export default {
    name: 'room',
    components: { Card },
    props: {
      user: {
        default: () => {
          return {
            name: ' qwess',
            email: ''
          }
        }
      }
    },
    methods: {
      join () {
        console.log('Join for', this.user)
        this.$router.push({ name: 'room', id: 0 })
      }
    }
  }
</script>

<style scoped>

</style>
