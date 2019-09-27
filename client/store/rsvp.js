import axios from 'axios'

export const state = () => {
  return {
    counter: 0,
    disp_text: '',
    text_lists: [],
    input_text: '',
    speed: 300,
    is_pause: true,
    pause_count: 0
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
  },
  prev (state) {
    state.pause_count--
  },
  updateInputText (state, message) {
    state.input_text = message
  },
  setSpeed (state, value) {
    state.speed = value
  }
}

export const actions = {
  increment ({ commit }) {
    commit('increment')
  },
  rsvp ({ commit, state, dispatch }) {
    (async () => {
      for (let i = state.pause_count > 0 ? state.pause_count : 0; i < state.text_lists.length; i++) {
        if (state.is_pause) {
          commit('setPauseCount', i - 1)
          return
        }
        await dispatch('sleep')
        commit('setDispText', state.text_lists[i])
      }
      commit('setPauseCount', -1)
      commit('setPause', true)
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
    if (state.is_pause) {
      commit('setPause', false)
      dispatch('rsvp')
    }
  },
  pause ({ state, commit }) {
    if (state.is_pause === false) {
      commit('setPause', true)
    }
  },
  prev ({ commit, dispatch, state }) {
    dispatch('pause')
    commit('prev')
    commit('setDispText', state.text_lists[state.pause_count])
  },
  getRsvpData ({ commit, dispatch, state }) {
    axios.post('https://us-central1-rsvp-252712.cloudfunctions.net/function-3', {
    // axios.post('https://us-central1-rsvp-252712.cloudfunctions.net/function-4', {
      message: state.input_text
    }, {
      'Content-Type': 'application/json'
    }).then(
      (res) => {
        commit('setTextList', res.data)
        commit('setPauseCount', 0)
        dispatch('play')
      }
    )
  }
}
