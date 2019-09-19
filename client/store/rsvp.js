import axios from 'axios'

export const state = () => {
  return {
    counter: 0,
    disp_text: '',
    text_lists: [],
    speed: 300,
    is_pause: false,
    pause_count: -1
  }
}

export const mutations = {
  increment (state) {
    state.counter++
  },
  setDispText (state, text) {
    state.disp_text = text
  },
  setTextList (state, rsvpData) {
    state.text_lists = rsvpData
  },
  setPauseCount (state, count) {
    state.pause_count = count
  },
  setPause (state, status) {
    state.is_pause = status
  }
}

export const actions = {
  increment ({ commit }) {
    commit('increment')
  },
  rsvp ({ commit, state, dispatch }) {
    (async () => {
      for (let i = state.pause_count > 0 ? state.pause_count - 1 : 0; i < state.text_lists.length; i++) {
        if (state.is_pause) {
          commit('setPauseCount', i)
          return
        }
        await dispatch('sleep')
        commit('setDispText', state.text_lists[i])
      }
      commit('setPauseCount', -1)
    })()
  },
  sleep ({ state }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, state.speed)
    })
  },
  play ({ state, dispatch, commit }) {
    if (state.is_pause || state.pause_count === -1) {
      commit('setPauseCount', 0)
      commit('setPause', false)
      dispatch('rsvp')
    }
  },
  pause ({ state, commit }) {
    if (state.is_pause === false) {
      commit('setPause', true)
    }
  },
  getRsvpData ({ commit }) {
    axios.post('https://us-central1-rsvp-252712.cloudfunctions.net/function-3', {
    // axios.post('https://us-central1-rsvp-252712.cloudfunctions.net/function-4', {
      message: '聖騎士や英雄といった選ばれし天才がベテランとなって尚、半分も攻略できない難関ダンジョン。'
    }, {
      'Content-Type': 'application/json'
    }).then(
      (res) => {
        console.log(res.data)
        commit('setTextList', res.data)
      }
    )
  }
}
