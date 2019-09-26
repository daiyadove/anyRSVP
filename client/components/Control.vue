<template>
  <v-card dark>
    <v-card-actions>
      {{ $store.state.rsvp.speed }}
      <v-slider
        v-model="speed"
        label="速度"
        min="100"
        max="700"
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
        console.log('get')
        return this.$store.state.rsvp.speed
      },
      set (value) {
        console.log('set', value)
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
