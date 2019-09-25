<template>
  <v-card dark>
    <v-card-actions>
      <span v-if="$store.state.rsvp.is_pause === true">
        <span v-if="$store.state.rsvp.pause_count === -1">
          <v-btn @click="play">
            Continue
          </v-btn>
        </span>
        <span v-else>
          <v-btn @click="play">
            play
          </v-btn>
        </span>
      </span>
      <span v-else>
          <v-btn @click="pause">
          pause
          </v-btn>
      </span>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
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
