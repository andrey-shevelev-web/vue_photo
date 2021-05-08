<template>
  <v-dialog v-model="dialogVisible" @click:outside="hideDialog" max-width="600">
    <v-card>
      <v-card-title>{{ fullTitle }}</v-card-title>
      <v-card-text>
        <v-img :src="currentPhoto.url" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['currentPhoto', 'dialogVisible']),

    fullTitle() {
      return `Photo title: ${this.currentPhoto.title}`
    },
  },

  methods: mapMutations(['hideDialog']),
}
</script>
