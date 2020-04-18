function processCustomSlide(currentSlide) {
  // Slide level interactions go here.
}

function advanceCustom(event) {
  // Fragment reveals go here.
}

function retreatCustom(event) {
  // Fragment hides go here.
}

function players() {
  return {
    players: getObject('players'),
    player_name: '',
    addPlayer() {
      if (this.player_name.trim() === '') {
        return;
      }

      this.players.push({
        name: this.player_name,
        score: 0,
        guess: 0
      });

      this.player_name = '';
      storeObject('players', this.players);
    },
    removePlayer(name) {
      this.players = this.players.filter(player => name !== player.name);
      storeObject('players', this.players);
    },
    addGuess(player_name) {
      if (this.guess.trim() === '') {
        return;
      }

      this.players.forEach(function(player) {
        if (player.name == player_name) {
          this.players[player_name].guess = this.guess;
        }
      });

      storeObject('players', this.players);
    }
  }
}

function storeObject(key, object) {
  return localStorage.setItem(key, JSON.stringify(object));
}

function getObject(key) {
  return JSON.parse(localStorage.getItem(key));
}

if (localStorage.getItem('players') === null) {
  localStorage.setItem('players', "[]");
}
