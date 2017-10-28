<template>
  <modal name="card-modal" @before-open="initModal">
    Mode: {{ modalData.mode }} <br>

    Card: {{ modalData.card }}
  </modal>
</template>

<script>
  export default {
    name: 'card-modal',
    data() {
      return {
        modalData: {}
      }
    },
    methods: {
      initModal(evt) {
        this.modalData = evt.params
      }
    },
  }
</script>
