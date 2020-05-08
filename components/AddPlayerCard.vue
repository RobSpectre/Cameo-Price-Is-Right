<template>
	<section>
		<div>
			<label for="player_name" class="block text-sm font-medium leading-5 text-gray-700"></label>
			<div class="my-2 flex rounded-md shadow-sm mx-20">
				<div class="relative flex-grow focus-within:z-10">
					<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9ZM3 18C3 14.134 6.13401 11 10 11C13.866 11 17 14.134 17 18H3Z" />
            </svg>
					</div>
					<input class="form-input block w-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5" 
						placeholder="Shrimply Pibbles" 
						v-model="player_name"
	 					v-on:keydown.enter="addPlayer(player_name)">
				</div>
				<button class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:borderr
				-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
						>
						<svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
							<path d="M8 9C9.65685 9 11 7.65685 11 6C11 4.34315 9.65685 3 8 3C6.34315 3 5 4.34315 5 6C5 7.65685 6.34315 9 8 9Z"/>
							<path d="M8 11C11.3137 11 14 13.6863 14 17H2C2 13.6863 4.68629 11 8 11Z" />
							<path d="M16 7C16 6.44772 15.5523 6 15 6C14.4477 6 14 6.44772 14 7V8H13C12.4477 8 12 8.44771 12 9C12 9.55228 12.4477 10 13 10H14V11C14 11.5523 14.4477 12 15 12C15.5523 12 16 11.5523 16 11V10H17C17.5523 10 18 9.55228 18 9C18 8.44772 17.5523 8 17 8H16V7Z" />
						</svg>
					<span class="ml-2" v-on:click="addPlayer(player_name)">Add</span>
				</button>
				<button class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:borderr
				-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
						>
            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6C13 7.65685 11.6569 9 10 9C8.34315 9 7 7.65685 7 6C7 4.34315 8.34315 3 10 3C11.6569 3 13 4.34315 13 6Z"/>
              <path d="M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z"/>
              <path d="M14 15C14 12.7909 12.2091 11 10 11C7.79086 11 6 12.7909 6 15V18H14V15Z" />
              <path d="M6 8C6 9.10457 5.10457 10 4 10C2.89543 10 2 9.10457 2 8C2 6.89543 2.89543 6 4 6C5.10457 6 6 6.89543 6 8Z"/>
              <path d="M16 18V15C16 13.9459 15.7282 12.9552 15.2507 12.0943C15.4902 12.0327 15.7413 12 16 12C17.6569 12 19 13.3431 19 15V18H16Z"/>
              <path d="M4.74926 12.0943C4.27185 12.9552 4 13.9459 4 15V18H1V15C1 13.3431 2.34315 12 4 12C4.25871 12 4.50977 12.0327 4.74926 12.0943Z"/>
            </svg>
					<span class="ml-2" v-on:click="addTeam(player_name)">Add Team</span>
				</button>
			</div>
		</div>
    <display-players-with-teams v-if="game.teams.length > 0"></display-players-with-teams>
    <display-players v-else-if="game.players.length > 0"></display-players>
    <h1 v-if="game.players.length == 0">Add Players</h1>
	</section>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

import DisplayPlayersWithTeams from '../components/DisplayPlayersWithTeams.vue'
import DisplayPlayers from '../components/DisplayPlayers.vue'

export default {
  name: 'AddPlayerCard',
  components: {
    DisplayPlayersWithTeams,
    DisplayPlayers
  },
  data: function () {
    return {
      player_name: '',
    }
  },
  computed: {
    ...mapState(['game']),
    ...mapGetters(['teamsWithPlayers'])
  },
  methods: {
    addPlayer(name) {
      if (name.trim() === '') {
        return
      }

      this.$store.commit('addPlayer', {name: name})
      this.player_name = ''
    },
    addTeam(name) {
      if (name.trim() === '') {
        return
      }

      this.$store.commit('addTeam', name)
      this.player_name = ''
    },
  }
}
</script>
