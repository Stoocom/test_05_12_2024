import { SelectOption } from 'naive-ui'
import { createStore } from 'vuex'

export const store = createStore({
  state: {
    profile: {
      username: ''
    },
    currentCity: undefined
  },
  getters: {
    getCurrentCity (state) {
      return state.currentCity
    },
    getUsername (state) {
      return state.profile.username
    }
  },
  mutations: {
    SET_USERNAME (state, payload) {
      state.profile.username = payload
    },
    SET_CITY (state, payload: SelectOption) {
      state.currentCity = payload
    }
  }
})