import axios from 'axios'

export default {
  state: {
    photos: [],
    dialogIsVisible: false,
    currentPhoto: {},
  },

  getters: {
    allPhotos: state => state.photos,
    dialogVisible: state => state.dialogIsVisible,
    currentPhoto: state => state.currentPhoto,
  },

  actions: {
    async fetchPhotos({ commit }) {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/photos?_limit=7'
      )
      commit('setPhotos', response.data)
    },
  },

  mutations: {
    setPhotos(state, payload) {
      state.photos = payload
    },

    setCurrentPhoto(state, payload) {
      state.currentPhoto = payload
    },

    showDialog(state) {
      state.dialogIsVisible = true
    },

    hideDialog(state) {
      state.dialogIsVisible = false
    },

    addPhoto(state, payload) {
      state.photos.unshift(payload)
    },
  },
}
