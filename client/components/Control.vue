<template>
  <v-card dark>
    <v-card-actions>
      <v-slider
        v-model="speed"
        label="速度"
        min="100"
        max="700"
        thumb-size="27"
        thumb-label="always"
        append-icon="mdi-run"
        prepend-icon="mdi-bike"
        step="10"
        tick-size="4"
      ></v-slider>
      <v-btn
        @click="prev"
      >
        Prev
      </v-btn>
    </v-card-actions>
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
  computed: {
    speed: {
      get () {
        return this.$store.state.rsvp.speed
      },
      set (value) {
        this.$store.commit('rsvp/setSpeed', value)
      }
    }
  },
  methods: {
    play () {
      this.$store.dispatch('rsvp/play')
    },
    pause () {
      this.$store.dispatch('rsvp/pause')
    },
    prev () {
      this.$store.dispatch('rsvp/prev')
    }
  }
}
</script>
