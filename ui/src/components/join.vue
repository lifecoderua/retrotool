<template>
<div>
  <h2>Join retrospective</h2>
  <div><label>My name:</label><input v-model="user.name" type="text"></input></div>
  <div><label>Email:</label><input v-model="user.email" type="email"></input></div>
  <div><label>Join to: (nevermind)</label><input type="text"></input></div>
  <button v-on:click="join">Let me In!</button>
</div>
</template>

<script>
export default {
  name: 'Join',
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
    }
  }
}
</script>

<style scoped>

</style>
