<template>
  <div>
    <div class="groups">
      <div v-for="(team, team_index) in teamsWithPlayers"  class="bg-white shadow overflow-hidden sm:rounded-md mt-5">
        <div class="bg-green px-2 py-2 border-b border-gray-200 sm:px-6">
          <div class="-ml-2 -mt-1 flex items-center justify-between flex-wrap sm:flex-no-wrap">
            <div class="ml-2 mt-1">
              <span class="reset-this text-lg leading-6 font-semibold text-white">
                {{ team.name }}: {{ team.score}}
              </span>
            </div>
            <div class="ml-4 mt-4 flex-shrink-0 flex">
              <span class="inline-flex rounded-md shadow-sm">
                <button type="button"
                        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800"
                        v-on:click="removeTeam(team.name)">
                  <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/>
                  </svg>
                  <span>
                    Remove 
                  </span>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div class="group">
          <container group-name="1" 
                     :get-child-payload="player_index => getChildPayload(team_index, player_index)"
                     drag-class="opacity-ghost"
                     @drop="onDrop(team.name, $event)">
          <draggable v-for="player in team.players">
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
                      green score">
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

import { Container, Draggable } from 'vue-smooth-dnd'

export default {
  name: 'DisplayPlayersWithTeams',
  components: {
    Container,
    Draggable
  },
  computed: {
    ...mapState(['game']),
    ...mapGetters(['teamsWithPlayers',
                   'getPlayersFromTeam'])
  },
  methods: {
    onDrop(team, dropResult) {
      if (dropResult) {
        if (dropResult.addedIndex) {
          this.movePlayer(team, dropResult)
        } 
      }

      return dropResult
    },
    movePlayer(team_name, event) {
      if (event) {
        if (event.addedIndex) {
          this.removePlayer(event.payload.name)
          this.addPlayer({name: event.payload.name,
                          index: event.addedIndex})
          this.changeAttributeOfPlayer({'player_name': event.payload.name,
                                        'attribute': 'team',
                                        'value': team_name})
        }
      }
    },
    getChildPayload(team_index, player_index) {
      return this.teamsWithPlayers[team_index].players[player_index]
    },
    ...mapMutations(['removePlayer',
                     'removeTeam',
                     'addPlayer',
                     'changeAttributeOfPlayer'])
  }
}
</script>
