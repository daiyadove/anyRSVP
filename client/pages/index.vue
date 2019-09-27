<template>
  <v-card
    max-width="100%"
    class="mx-auto"
  >
    <v-container
      class="pa-2"
      fluid
    >
      <v-row>
        <v-col>
          <Display />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <InputInformation />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Control />
        </v-col>
      </v-row>

    </v-container>
  </v-card>
</template>

<script>
/* eslint no-unused-expressions: "off" */
import Display from '~/components/Display.vue'
import Control from '~/components/Control.vue'
import InputInformation from '~/components/InputInformation.vue'

export default {
  components: {
    Display,
    Control,
    InputInformation
  }
}
</script>
