<template>
  <v-layout>
    <v-flex class="text-center">
      <Display />
      <blockquote class="blockquote">
        &#8220;Second, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
            <div id="disp_rsvp" width="340" height="70">
              {{ disp_text }}
            </div>
            <button @click="play">
              play
            </button>
            <button @click="pause">
              pause
            </button>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
/* eslint no-unused-expressions: "off" */
import Display from '~/components/Display.vue'

export default {
  components: {
    Display
  }
}
</script>
