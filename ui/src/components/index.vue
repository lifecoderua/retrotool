<template>
  <div>
    <h2>{{ msg }}</h2>
    <p>
      I mean, we are glad to see you. Pease <b><router-link :to="{ name: 'join' }">JOIN</router-link></b>
    </p>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: () => {
    return {
      msg: 'wut'
    }
  }
}
</script>

<style scoped>

</style>
