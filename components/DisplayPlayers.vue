<template>
  <div>
    <div class="bg-white shadow overflow-hidden sm:rounded-md mt-5">
      <div class="bg-green px-2 py-2 border-b border-gray-200 sm:px-6">
        <div class="-ml-2 -mt-1 flex items-center justify-between flex-wrap sm:flex-no-wrap">
          <div class="ml-2 mt-1">
            <span class="reset-this text-lg leading-6 font-semibold text-white">
              Players
            </span>
          </div>
        </div>
      </div>
      <div>
      <container drag-class="opacity-ghost"
                 :get-child-payload="player_index => getChildPayload(player_index)"
                 @drop="onDrop($event)">
      <draggable v-for="player in this.game.players">
      <div class="draggable-item bg-white">
        <span class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
          <div class="px-2 py-2 flex items-center sm:px-6">
            <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <div class="text-sm leading-5 font-medium truncate">
                  {{ player.name }}	
                </div>
              </div>
              <div class="mt-1 flex-shrink-0 sm:mt-0">
                <div class="flex overflow-hidden">
                  <div class="inline-flex items-center px-1 py-0.5
                  rounded-full text-sm text-white font-semibold leading-5
                  green">
                    {{ player.score }}
                  </div>

                </div>
              </div>
            </div>
            <div class="ml-5 flex-shrink-0">
              <span v-on:click="removePlayer(player.name)">
                <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/>
                </svg>
              </span>
            </div>
          </div>
        </span>
      </div>
      </draggable>
      </container>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

import { Container, Draggable } from 'vue-smooth-dnd'

export default {
  name: 'DisplayPlayers',
  components: {
    Container,
    Draggable
  },
  computed: {
    ...mapState(['game']),
  },
  methods: {
    onDrop(dropResult) {
      if (dropResult) {
        if (dropResult.addedIndex) {
          this.movePlayer(dropResult)
        } 
      }

      return dropResult
    },
    movePlayer(event) {
      if (event) {
        if (event.addedIndex) {
          console.log(event)
          this.removePlayer(event.payload.name)
          this.addPlayer({name: event.payload.name,
                          index: event.addedIndex})
        }
      }
    },
    getChildPayload(player_index) {
      var player = this.game.players[player_index]
      return player
    },
    ...mapMutations(['addPlayer', 'removePlayer', 'changeAttributeOfPlayer']),
  }
}
</script>
