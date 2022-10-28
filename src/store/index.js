import { createStore } from 'vuex'
const vuex = createStore({
  state() {
    return {
      audioElement: Object
    }
  },
  getters: {},
  mutations: {
    setAudioElement: function (state, element) {
      state.audioElement = element
    }
  },

  actions: {}
})
export default vuex
