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
import axios from 'axios'
import Display from '~/components/Display.vue'

export default {
  components: {
    Display
  },
  data () {
    return {
      hoge: 'fuga',
      disp_text: 'hoge',
      is_pause: false,
      pause_count: 0,
      text_lists: [],
      speed: 300
    }
  },
  mounted () {
    axios.post('https://us-central1-rsvp-252712.cloudfunctions.net/function-3', {
    // axios.post('https://us-central1-rsvp-252712.cloudfunctions.net/function-4', {
      message: '聖騎士や英雄といった選ばれし天才がベテランとなって尚、半分も攻略できない難関ダンジョン。'
    }, {
      'Content-Type': 'application/json'
    }).then(
      (res) => {
        console.log(res.data)
        this.text_lists = res.data
      }
    )
    this.rsvp()
  },
  methods: {
    rsvp () {
      (async () => {
        // for (const i of this.text_lists) {
        //   await this.sleep(this.speed)
        //   this.disp_text = i
        // }
        for (let i = this.pause_count > 0 ? this.pause_count - 1 : 0; i < this.text_lists.length; i++) {
          if (this.is_pause) {
            this.pause_count = i
            return
          }
          await this.sleep(this.speed)
          this.disp_text = this.text_lists[i]
        }
        this.pause_count = 0
      })()
    },
    sleep (time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, time)
      })
    },
    play () {
      if (this.is_pause || this.pause_count === 0) {
        this.is_pause = false
        this.rsvp()
      }
    },
    pause () {
      if (this.is_pause === false) {
        this.is_pause = true
      }
    }
  }
}
</script>
