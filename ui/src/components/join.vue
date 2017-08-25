<template>
<div>
  <h2>Join retrospective</h2>
  <h3 v-if="currentUser">Welcome <b>{{ currentUser }}</b></h3>
  <template v-else>
    <div><label>My name:</label><input v-model="user.name"></div>
    <div><label>Email:</label><input v-model="user.email" type="email"></div>
  </template>
  <div><label>Join to: (nevermind)</label><input></div>
  <button v-on:click="join">Let me In!</button>
</div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'join',
    data() {
      return {
        user: {
          name: 'Zqwess',
          email: ''
        }
      }
    },
    methods: {
      join() {
        // TODO: conditional auth based on currentUser available
        // TODO: more clean => use 2 templates/subcomponents for this
        this.auth(this.user).then((authorizedUser) => {
          console.log('Join for', authorizedUser)
          this.$router.push({ name: 'room', params: { id: 0 } })
        })
      },
      ...mapActions('user', [
        'auth'
      ])
    },
    computed: {
      ...mapGetters('user', [
        'currentUser'
      ])
    }
  }
</script>

<style scoped>

</style>
