function processCustomSlide(currentSlide) {
  slide = currentSlide;
  chart_div = slide.getElementsByTagName('div')[0];
  id = chart_div.getAttribute('id');

  if ($(chart_div).hasClass("results")) {
    createResultsChart(chart_div);
  }
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
    addGuess(player_name, guess) {
      if (guess.trim() === '') {
        return;
      }

      new_state = [];

      this.players.forEach(function(player) {
        if (player.name == player_name) {
          player.guess = parseInt(guess);
        }
        new_state.push(player);
      });

      this.players = new_state;

      storeObject('players', new_state);
    },
    findWinner(correct_answer) {
      var best_guess = 0;
      var winner = "";

      this.players.forEach(function(player) {
        if (player.guess > best_guess && player.guess <= correct_answer) {
          best_guess = player.guess;
          winner = player.name;
        }
      });

      new_state = [];

      this.players.forEach(function(player) {
        if (player.name == winner) {
          player.score++;
        }
        new_state.push(player);
      });

      this.players = new_state;

      storeObject('players', new_state);
      alert("Correct answer is " + correct_answer + ". The winner is " + winner + " with " + best_guess + "!");
    }
  }
}

function storeObject(key, object) {
  return localStorage.setItem(key, JSON.stringify(object));
}

function getObject(key) {
  return JSON.parse(localStorage.getItem(key));
}

function createResultsChart(div) {
  var players = getObject('players');

  var data = {
    type: 'bar',
    axis: {
      rotated: true
    },
  }

  var x = [];
  var values = ['Score']

  players.forEach(function(player) {
    x.push(player.name);
    values.push(player.score);
  });

  data.columns = [values];

  var options = {
    bindto: div, 
    data: data,
    axis: {
      rotated: true,
      x: {
        type: 'category',
        categories: x
      }
    }
  };

  console.log(options);

  console.log(data.columns);
 
  return c3.generate(options);
}


if (localStorage.getItem('players') === null) {
  localStorage.setItem('players', "[]");
}

function setPlayerScore(player_name, score) {
  var players = getObject('players');

  new_state = [];

  players.forEach(function(player) {
    if (player.name == player_name) {
      player.score = score;
    }

    new_state.push(player);
  });

  storeObject('players', new_state);
}
