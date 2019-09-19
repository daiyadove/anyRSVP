<template>
  <v-card>
    <div>
      {{ $store.state.rsvp.disp_text }}
    </div>
    <button @click="play">
      play
    </button>
    <button @click="pause">
      pause
    </button>
  </v-card>
</template>

<script>

export default {
  mounted () {
    this.$store.dispatch('rsvp/getRsvpData')
  },
  methods: {
    play () {
      this.$store.dispatch('rsvp/play')
    },
    pause () {
      this.$store.dispatch('rsvp/pause')
    }
  }
}
</script>
