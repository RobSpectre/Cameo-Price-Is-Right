<template>
  <section>
    <div class="h-screen flex overflow-hidden">
      <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64">
          <div class="flex items-center h-16 flex-shrink-0 px-4 green">
            <img class="h-8 w-auto" src="/images/cameo_price_is_right.png" alt="Workflow" />
          </div>
          <div class="h-0 flex-1 flex flex-col overflow-y-auto">
            <nav class="flex-1 px-2 py-4 bg-gray-800">
              <div v-for="player in game.players"
                   :key="player.name"
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
        <div class="py-4 grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-1 col-span-2 border-4 border-dashed
          border-gray-200 rounded-lg w- cluse">
            <h4 class="fragment">{{ hint1 }}</h4>
            <h4 class="fragment">{{ hint2 }}</h4>
            <h4 class="fragment">{{ hint3 }}</h4>
          </div>
          <div class="row-span-2 col-span-2">
            <img class="fragment m-0" style="margin: auto;" :src="image" />
          </div>
        </div>
      </div>
      </main>
    </div>
    <h1 class="fragment">{{ celebrity }}</h1>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CelebrityIntro',
  props: [
    'celebrity',
    'hint1',
    'hint2',
    'hint3',
    'image'
  ],
  computed: mapState(['game'])
}

</script>
