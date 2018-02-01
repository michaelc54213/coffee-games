//playstate object
var playState = {
	//game logic 
	create: function() {
	var ball;
	var introMusic;
	var banana;
	var background;
	var strawberry;
	var fruit;
	var music;
	var gameOverSound;
	var xRandom = 0;
	this.scoreNumber = 0;
	this.yGravity = 0;
	var text;
	var gulpNoise;
	var checkCollision;
	//plays music
	this.introMusic = game.add.audio('intro');
	this.introMusic.play();
	this.introMusic.loopFull(0.4);
	//adds background
	this.background = game.add.sprite(0, 0, 'background');
	//text style
	var style = { font: "20px Arial", fill: "#ff0044", align: "center"};

	//adds text to game
	this.text = this.game.add.text(550, 16, "Score: 0", style); 

	this.text.anchor.set(0.5);

	//add ground for fruitboy
	this.platforms = game.add.group();
	this.fruit = game.add.group();
	this.players = game.add.group();

	this.boy = game.add.sprite(0, game.world.height - 80, 'boy');	//add fruitboy

	//adds sprite animation
	this.boy.animations.add('left', [1,2], 10, true);
	this.boy.animations.add('right', [3,4], 10, true);

	game.physics.arcade.enable(this.boy);	//enable physics
	this.boy.body.collideWorldBounds = true;	//boy wont go out of bounds

	//add physics to platform
	this.platforms.enableBody = true;
	this.fruit.enableBody = true;
	this.boy.enableBody = true;


	/*ADDS BALL GROUP TO GAME*/
	this.ball = this.fruit.create(0, 0, 'ball');
    this.ball.body.gravity.y = 100;

	//create ground
	this.ground = this.platforms.create(0, game.world.height - 50, 'ground');

	//makes ground immovable
	this.ground.body.immovable = true;
	},

	update: function (yGrav, ball, xRandom, banana, platforms, strawberry) {
		//collide player and balls with ground
		game.physics.arcade.overlap(this.ball, this.platforms, this.gameOver, null, this)
		game.physics.arcade.overlap(this.banana, this.platforms, this.gameOver, null, this)
		game.physics.arcade.overlap(this.strawberry, this.platforms, this.gameOver, null, this)

		//checks collision for boy and ball
		game.physics.arcade.overlap(this.ball, this.boy, this.collectBall, null, this)

		//Checks for collision between boy and banana
		game.physics.arcade.overlap(this.banana, this.boy, this.collectBall, null, this)

		//Checks for collision between boy and banana
		game.physics.arcade.overlap(this.strawberry, this.boy, this.collectBall, null, this)



		cursors = game.input.keyboard.createCursorKeys();

		//check for movement
		this.boy.body.velocity.x = 0;

		if (cursors.left.isDown)
		{
			//move to the left
			this.boy.body.velocity.x = -800;

			this.boy.animations.play('left');
		}
		if(cursors.right.isDown)
		{
			//move to the right
			this.boy.body.velocity.x = 800;

			this.boy.animations.play('right');
		}
	},


	 collectBall: function (ball, text, scoreNumber, yGravity, xCord, music, fruit) {
		//removes ball from screen
		ball.kill();
		this.music = game.sound.play('bleep');
			this.x = Math.floor(Math.random() * 10);
			this.xCord = 0;
			//adds random generator for xCord
			//Gives 6 different options
			if (this.x <= 2)
				this.xCord = 100;
			if (this.x > 2 && this.x <= 4)
				this.xCord = 200;
			if (this.x > 4 && this.x <= 6)
				this.xCord = 300;
			if (this.x > 6 && this.x <= 8)
				this.xCord = 400;
			if (this.x > 8 && this.x <= 9)
				this.xCord = 500;
			if (this.x === 10)
				this.xCord = 600;

		 if (this.yGravity < 3000) {
			 this.yGravity = this.yGravity + 100;
		 }
		 this.randomFruit(xCord); //passes xCord into randomFruit function

		this.scoreNumber = this.scoreNumber + 10 
		this.text.text = "Score: " + this.scoreNumber;
		
	 },

	  randomFruit: function (banana, fruit, xCord, yGravity, ball, boy) {
		//random fruit generator for all 3 fruit
         var randomNum = Math.floor(Math.random() * 10);
		 if (randomNum <= 3) {
				 this.banana = this.fruit.create(this.xCord, 0, 'banana');
                 this.banana.body.gravity.y = this.yGravity;
		 } else if (randomNum > 3 && randomNum <= 6){
				 this.ball = this.fruit.create(this.xCord, 0, 'ball');
				 this.ball.body.gravity.y = this.yGravity;
		 } else  {
				 this.strawberry = this.fruit.create(this.xCord, 0, 'strawberry');
				 this.strawberry.body.gravity.y = this.yGravity;

		 }
	},

	 gameOver: function (ball, fruit, scoreNumber, gameOverSound) {
		//when ball collision with ground is detected
		this.gameOverSound = game.sound.play('gameover');
		ball.kill();
		game.state.start('gameOver');
		return this.scoreNumber;
	 },

	 spawnFruit: function (xCord, fruit, ball) {
	 	//code for respawn fruit goes here
	 	var xRandom = 0;
	 	this.xRandom = Math.floor(Math.random() * 10);
	 	if (xRandom > 0 && xRandom < 5.000001) {
	 		this.banana = this.fruit.create(xCord, 0, 'banana');

	 	if (xRandom > 5.000001 && xRandom < 10)
	 		this.ball = this.fruit.create(xCord, 0, 'ball');
	 	}
	 },

};


//run method if true
