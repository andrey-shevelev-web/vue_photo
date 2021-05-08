<template>
  <v-container>
    <v-row class="d-flex">
      <v-text-field v-model="title" class="mr-5" placeholder="Photo title" />
      <v-file-input
        v-model="image"
        class="mr-5"
        placeholder="Click to select a photo file"
      />
      <v-btn @click="onAddPhoto">Add photo</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    title: '',
    image: null,
  }),

  methods: {
    ...mapMutations(['addPhoto']),

    onAddPhoto() {
      const reader = new FileReader()
      reader.onload = () => {
        let photo = {
          id: Date.now(),
          title: this.title,
          url: reader.result,
        }
        this.addPhoto(photo)
      }
      reader.readAsDataURL(this.image)
    },
  },
}
</script>
