<template>
  <v-container>
    <PhotoForm v-if="allPhotos.length < 12" />
    <h3 v-else class="mb-4">You cannot add more than 12 photos</h3>
    <v-row>
      <Photo v-for="photo in allPhotos" :key="photo.id" :photo="photo" />
    </v-row>
    <PhotoDialog />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Photo from '@/components/photo/Photo'
import PhotoForm from '@/components/photo/PhotoForm'
import PhotoDialog from '@/components/photo/PhotoDialog'

export default {
  components: {
    Photo,
    PhotoForm,
    PhotoDialog,
  },

  computed: mapGetters(['allPhotos']),

  methods: {
    ...mapActions(['fetchPhotos']),
  },

  mounted() {
    this.fetchPhotos()
  },
}
</script>
