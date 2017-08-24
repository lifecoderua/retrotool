<template>
<div>
  <h2>Join retrospective</h2>
  <div><label>My name:</label><input v-model="user.name"></div>
  <div><label>Email:</label><input v-model="user.email" type="email"></div>
  <div><label>Join to: (nevermind)</label><input></div>
  <button v-on:click="join">Let me In!</button>
</div>
</template>

<script>
  export default {
    name: 'join',
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
      join() {
        console.log('Join for', this.user)
        this.$router.push({ name: 'room', params: { id: 0 } })
      }
    }
  }
</script>

<style scoped>

</style>
