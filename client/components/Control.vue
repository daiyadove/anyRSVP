<template>
  <v-card dark>
    <v-card-actions v-if="$store.state.rsvp.is_pause === true">
      <v-btn
        @click="play"
        block
        v-if="$store.state.rsvp.pause_count === -1"
      >
        Continue
      </v-btn>
      <v-btn
        @click="play"
        block
        v-else
      >
        Play
      </v-btn>
    </v-card-actions>
    <v-card-actions v-else>
      <v-btn
        @click="pause"
        block
      >
        Pause
      </v-btn>
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
