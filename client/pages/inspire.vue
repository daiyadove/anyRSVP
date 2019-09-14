<template>
  <v-layout>
    <v-flex class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
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

export default {
  data () {
    return {
      hoge: 'fuga',
      disp_text: 'hoge',
      is_pause: false,
      pause_count: 0,
      text_lists: [
        '聖騎士や',
        '英雄といった',
        '選ばれし天才が',
        'ベテランとなって尚、',
        '半分も攻略できない',
        '難関ダンジョン。',
        'その最下層に、',
        'テイマーである俺は、',
        '3体の従魔とともに',
        'やってきていた。',
        'ここは、',
        '迷宮主がすむ部屋の',
        '目の前。',
        '扉を開けたら、',
        '戦闘開始だ。',
        '部屋の扉を',
        '開けると、',
        'そこにいたのは',
        '長めの棒を振りまわす、',
        '1匹の',
        '猿型の魔物。',
        'このダンジョンの',
        'ダンジョンボス',
        '──孫悟空だ。',
        '「キイエエェェェェェッ！」',
        '部屋に入るなり、',
        '孫悟空は',
        '俺や従魔たち',
        'めがけて',
        '如意棒での',
        '突きを',
        '繰り出してくる。'
      ],
      speed: 300
    }
  },
  mounted () {
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
