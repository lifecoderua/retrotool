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
  import { mapActions } from 'vuex'

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
        this.auth(this.user).then((authorizedUser) => {
          console.log('Join for', authorizedUser)
          this.$router.push({ name: 'room', params: { id: 0 } })
        })
      },
      ...mapActions('user', [
        'auth'
      ])
    }
  }
</script>

<style scoped>

</style>
