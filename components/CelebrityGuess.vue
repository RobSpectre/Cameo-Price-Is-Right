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
              <div v-for="guess in guessesByPrice" :key="guess.player_name"
                   class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150">
                <div class="font-semibold w-48">{{ guess.player_name }}</div>
                <div class="inline-flex items-center px-3 py-0.5
                rounded-full text-sm text-white font-medium leading-5
                green">${{ guess.guess }}</div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="relative mt-12 mx-auto" v-if="!complete">
        <div class="flex flex-col mx-32 rounded-lg shadow-lg overflow-hidden text-left">
          <div class="flex-shrink-0">
            <img class="h-48 m-0 w-full clear-reveal object-cover" :src="image" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <span class="block mt-2 text-xl leading-7 font-semibold text-gray-900">
                How much is {{ celebrity }}'s rate on Cameo? 
              </span>
              <div class="my-4 text-center">
                <input class="shadow appearance-none border rounded w-1/3 py-2
                px-3 text-gray-700 leading-tight focus:outline-none
                focus:shadow-outline" type="text"
                placeholder="Guess"
                v-model="guess"
                v-on:keydown.enter="addGuess(currentPlayer, guess)">
              </div>
            </div>
          </div>
          <div class="flex-1 bg-green p-6 flex flex-col justify-between">
            <span class="text-2xl leading-7 font-semibold text-white">
              {{ currentPlayer }}
            </span>
          </div>
        </div>
      </div>
      <div class="mx-auto align-middle" v-else>
        <span class="inline-flex rounded-md shadow-sm">
          <button type="button" class="inline-flex items-center px-6 py-3 border
          border-transparent text-base leading-6
          font-medium rounded-md text-white bg-indigo-600
          hover:bg-indigo-500 focus:outline-none
          focus:border-indigo-700
          focus:shadow-outline-indigo active:bg-indigo-700
          transition ease-in-out duration-150 
          mt-12"
                                @click="findWinner()">
            Is The Price Right?	
            <svg  class="ml-3 -mr-1 h-5 w-5" 
                  fill="currentColor"
                  viewBox="0 0 20 20">
              <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-11v2h1a3 3 0 0 1 0 6h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h3v-2h-1a3 3 0 0 1 0-6h1V6a1 1 0 0 1 2 0v1h3a1 1 0 0 1 0 2h-3zm-2 0h-1a1 1 0 1 0 0 2h1V9zm2 6h1a1 1 0 0 0 0-2h-1v2z"/>
            </svg>
          </button>
        </span>
      </div>
    </div>
    <h1>{{ celebrity }}</h1>

    <div v-if="winner"
         class="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex
         sm:items-center sm:justify-center transition ease-in-out duration-700">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div>
          <div class="mx-auto flex items-center justify-center h-12 w-12
            rounded-full bg-green">
            <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              {{ winner }} 
            </h3>
            <div class="mt-2">
              <p class="text-sm leading-5 text-gray-500">
              {{ winner }}'s guess was ${{ winning_guess }}
              </p>
              <p class="text-sm leading-5 text-gray-800">
              {{ celebrity }}'s rate on Cameo is <b>${{ price }}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: 'CelebrityGuess',
  props: [
    'celebrity',
    'image',
    'price'
  ],
  data: function() {
    return {
      guesses: [],
      currentPlayer: '',
      playerIndex: 0,
      complete: false,
      winner: '',
      winning_guess: 0
    }
  },
  mounted() {
    this.currentPlayer = this.game.players[this.game.player_button].name
    this.playerIndex = this.game.player_button
  },
  computed: {
    guessesByPrice() {
      return this.guesses.sort((a, b) => a.guess - b.guess).reverse()
    },
    ...mapState(['game']),
  },
  methods: {
    addGuess(player_name, guess) {
      this.guesses.push({
        'player_name': player_name,
        'guess': guess
      })  
      this.nextPlayer()
    },
    nextPlayer() {
      this.guess = ''
      this.playerIndex++ 

      if (this.playerIndex >= this.game.players.length) {
        this.playerIndex = 0
      }

      if (this.playerIndex === this.game.player_button) {
        this.complete = true
        return
      } else {
        this.currentPlayer = this.game.players[this.playerIndex].name
      }
    },
    findWinner() {
      let best_guess = 0
      let winner = ""

      this.guesses.forEach((guess) => {
        if (guess.guess > best_guess && guess.guess <= this.price) {
          best_guess = guess.guess;
          winner = guess.player_name;
        }
      })

      this.increasePlayerScore({
        player_name: winner,
        value: 1
      })

      let audio = new Audio('/sounds/fanfare.mp3')
      audio.volume = 0.2
      audio.play()

      this.winner = winner
      this.winning_guess = best_guess

      this.increasePlayerButton()

      return
    },
    ...mapMutations(['increasePlayerScore', 'increasePlayerButton'])
  }
}

</script>
