<template>
  <v-card dark>
    <v-textarea
      outlined
      name="input-7-4"
      label="速読したい文章を入力してください"
      value=""
      v-model="input_text"
    />
    <v-card-actions>
      <v-btn
        block
        color="primary"
        dark
        @click="getRsvpData"
      >
        速読する
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  computed: {
    input_text: {
      get () {
        return this.$store.state.rsvp.input_text
      },
      set (value) {
        this.$store.commit('rsvp/updateInputText', value)
      }
    }
  },
  methods: {
    getRsvpData () {
      this.$store.dispatch('rsvp/getRsvpData')
    }
  }
}
</script>
