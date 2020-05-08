<template>
  <div class="reveal" id="app">
    <div class="slides">
      <section class="intro" data-background-video="images/intro.mp4"
                             data-background-color="#000"
                             data-background-video-muted
                             data-background-video-loop>
        <div class="title">
          <img style="margin-top: 7em;" src="images/cameo_price_is_right.png" />
        </div>
      </section>
      <section class="intro" data-background-video="images/intro.mp4"
                             data-background-color="#000"
                             data-background-video-muted
                             data-background-video-loop>
        <h1>The Price Is Right</h1>
      </section>
      <section data-background-image="images/cameo_front_page.png">
        <h1>Cameo</h1>
      </section>
      <section data-background-video="images/goblikon_christmas.mp4"
               data-background-color="#000">
        <h1>Example</h1>
      </section>
      <section data-background-video="images/john_goblikon.mp4"
               data-background-color="#000">
        <h1>COVID-19</h1>
      </section>
      <section>
        <h3 class="fragment">Two Teams</h3>
        <h3 class="fragment">Alternate scoring</h3>
        <h3 class="fragment">Contestant</h3>
        <h3 class="fragment">Team Provides Clues</h3>
        <h3 class="fragment">Limited Time</h3>
        <h1>Gameplay</h1>
      </section>
      <add-player-card></add-player-card>
      <round celebrity="John Goblikon"
             hint1="Green"
             hint2="Goblin"
             hint3="Metal Band"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-OkgsUF1N--b.mp4"
             image="https://i.ytimg.com/vi/PIWZVY3i8uc/maxresdefault.jpg"
             price="50"></round>
    </div>
  </div>
</template>

<script>
import store from './store'
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

import AddPlayerCard from '../components/AddPlayerCard.vue'
import Round from '../components/Round.vue'

export default {
  name: 'CameoPriceIsRight',
  store,
  components: {
    AddPlayerCard,
    Round
  },
  mounted() {
    initReveal()
  },
  computed: mapState(['game'])
}
</script>
