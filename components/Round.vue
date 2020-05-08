<template>
  <section>
    <celebrity-intro :celebrity="celebrity"
                     :hint1="hint1"
                     :hint2="hint2"
                     :hint3="hint3"
                     :image="image"></celebrity-intro>
    <celebrity-video :celebrity="celebrity"
                     :video="video"></celebrity-video>
    <celebrity-guess :celebrity="celebrity"
                     :image="image"
                     :price="price"></celebrity-guess>
  </section>
</template>

<script>
import { mapState } from 'vuex'

import CelebrityIntro from '../components/CelebrityIntro.vue'
import CelebrityVideo from '../components/CelebrityVideo.vue'
import CelebrityGuess from '../components/CelebrityGuess.vue'

export default {
  name: 'Round',
  components: {
    CelebrityIntro,
    CelebrityVideo,
    CelebrityGuess
  },
  props: [
    'celebrity',
    'hint1',
    'hint2',
    'hint3',
    'video',
    'image',
    'price'
  ],
  computed: mapState(['game'])
}
</script>
