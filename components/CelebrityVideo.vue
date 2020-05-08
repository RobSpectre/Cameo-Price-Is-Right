<template>
  <section>
    <div class="h-screen flex overflow-hidden">
      <!-- Static sidebar for desktop -->
      <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64">
          <div class="flex items-center h-16 flex-shrink-0 px-4 green">
            <img class="h-8 w-auto" src="/images/cameo_price_is_right.png" alt="Workflow" />
          </div>
          <div class="h-0 flex-1 flex flex-col overflow-y-auto">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <nav class="flex-1 px-2 py-4 bg-gray-800">
              <div v-for="player in game.players" :key="player.name"
                   class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150">
                <div class="font-semibold w-48">{{ player.name }}</div>
                <div class="inline-flex items-center px-3 py-0.5
                rounded-full text-sm font-medium leading-5
                green">{{ player.score }}</div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <main class="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none" tabindex="0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="py-4">
          <video class="mx-auto" controls>
            <source :src="video" type="video/mp4">
          </video>
        </div>
      </div>
      </main>
    </div>
    <h1>{{ celebrity }}</h1>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CelebrityVideo',
  props: [
    'celebrity',
    'video',
  ],
  computed: mapState(['game'])
}

</script>
