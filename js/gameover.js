var gameoverState = {

	create: function(scoreNumber, yGravity, introMusic) {

		var winLabel = game.add.text(10, 80, 'Game Over! Your score was: ' + playState.scoreNumber,  {font: '40px Arial', fill: '#00ff00' });

		//LOCAL STORAGE FOR HIGH SCORES
		var highScore = localStorage.getItem('highScore') || 0; //set initial high score
		var playerScore = playState.scoreNumber;

		//store playerScore in localstorage
		if (playerScore > highScore) {
				highScore = playerScore;
				localStorage.setItem('highScore', highScore);
		}

		//Leaderboard function
		//Names and score text for leaderboard
		var player1 = game.add.text(100, 200, 'Highest Score is currently:  ' + highScore, {font: '25px Arial', fill: '#fff'});


		//instructions on how to restart the game
		var startLabel = game.add.text(80, game.world.height-80, 'press the "W" key to restart', {font: '25px Arial', fill: '#ffffff' });

		//we define the wkey as Phaser.Keyboard.W so that we can act
		//when the player presses it
		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

		//when the player presses the W key, we call the restart function
		wkey.onDown.addOnce(this.restart, this);
	},
    removeMusic: function(introMusic) {
			this.music.destroy();

			game.cache.removeSound('intro');
	},

	restart: function(introMusic) {
		game.state.start('menu');
		game.sound.stopAll();
	}
}
