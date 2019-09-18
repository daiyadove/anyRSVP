export const state = () => {
  return {
    counter: 0,
    disp_text: '',
    text_lists: [
      '聖騎士や',
      '英雄といった',
      '選ばれし天才が',
      'ベテランと',
      'なって',
      '尚、',
      '半分も',
      '攻略できない難関ダンジョン。',
      'その最下層に、',
      'テイマーである俺は、',
      '3体の',
      '従魔とともに',
      'やって',
      'きて',
      'いた。'
    ],
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
  }
}
