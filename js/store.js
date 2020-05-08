import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const state = {
  game: {
    players: [],
    teams: [],
    rounds: [],
    team_counter: 0,
    player_button: 0
  }
}

const getters = {
  teamsWithPlayers(state) {
    if (state.game.teams === undefined) {
      return state.game.teams
    }
    var teams_with_players = []

    state.game.teams.forEach(function(team) {
      var individual_scores = []

      team.players = state.game.players.filter(player => team.name === player.team)
      team.players.forEach(function(player) {
        individual_scores.push(player.score)
      })
      team.score = individual_scores.reduce(function(a, b) {
        return a + b
      }, 0)

      teams_with_players.push(team)
    })

    return teams_with_players 
  },
  getPlayersFromTeam: (state) => (team_name) => {
    return state.game.players.filter(player => team_name === player.team)
  },
}

const mutations = {
  addPlayer(state, payload) {
    if (payload.name.trim() === '') {
      return
    }
    if (state.game.teams.length > 0 ) {
      if (state.game.team_counter > state.game.teams.length - 1) {
        state.game.team_counter = 0
      }
      
      var player = {
        index: state.game.teams[state.game.team_counter].players.length,
        name: payload.name,
        score: 0,
        team: state.game.teams[state.game.team_counter].name
      }

      if (payload.index) {
        state.game.players.splice(payload.index, 0, player)
      } else {
        state.game.players.push(player)
      }

      state.game.team_counter++
    } else {
      state.game.team_counter = 0

      var player = {
        index: state.game.players.length,
        name: payload.name,
        score: 0,
        team: undefined 
      }

      if (payload.index === undefined) {
        state.game.players.push(player)
      } else {
        player.index = payload.index
        state.game.players.splice(payload.index, 0, player)
      }
    }
  },
  removePlayer(state, name) {
    state.game.players = state.game.players.filter(player => name !== player.name)
  },
  changeAttributeOfPlayer(state, payload) {
    var new_players = []

    state.game.players.forEach(function(player) {
      if (player.name === payload.player_name) {
        player[payload.attribute] = payload.value
      }
      new_players.push(player)
    })

    state.game.players = new_players
  },
  changeAttributesOfPlayer(state, payload) {
    var new_players = []

    state.game.players.forEach(function(player) {
      if (player.name === payload.player_name) {
        payload.attributes.forEach(function(attribute) {
          player[attribute.attribute] = attribute.value
        })
      }

      new_players.push(player)
    })

    state.game.players = new_players
  },
  addTeam(state, name) {
    if (name.trim() === '') {
      return
    }
    state.game.teams.push({
      name: name,
      score: 0
    })
  },
  removeTeam(state, name) {
    state.game.teams = state.game.teams.filter(team => name !== team.name)

    state.game.players = state.game.players.filter(player => name !== player.team)

    if (state.game.teams === undefined) {
      state.game.teams = []
    }
  },
  increasePlayerScore(state, payload) {
    var new_players = []

    state.game.players.forEach(function(player) {
      if (player.name === payload.player_name) {
        player.score = player.score + payload.value
      }
      new_players.push(player)
    })

    state.game.players = new_players
  },
  increasePlayerButton(state) {
    state.game.player_button++

    if (state.game.playerButton >= state.game.players.length) {
      state.game.player_button = 0
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  plugins: [createPersistedState({key: 'CameoPriceIsRight'})]
})
