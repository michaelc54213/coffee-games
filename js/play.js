//playstate object
var playState = {
	//game logic 
	create: function() {
	var ball;
	var fruit;
	var music;
	var gameOverSound;
	var xRandom = 0;
	this.scoreNumber = 0;
	this.yGravity = 0;
	var text;
	var gulpNoise;
	var checkCollision;
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

	update: function (yGrav, ball, xRandom) {
		//collide player and balls with ground
		game.physics.arcade.overlap(this.ball, this.platforms, this.gameOver, null, this)

		//checks collision for boy and ball
		//sets y gravity to 12 before loop
		if (game.physics.arcade.overlap(this.ball, this.boy, this.collectBall, null, this)) {
		

		} //ends if statement


		cursors = game.input.keyboard.createCursorKeys();

		//check for movement
		this.boy.body.velocity.x = 0;

		if (cursors.left.isDown)
		{
			//move to the left
			this.boy.body.velocity.x = -600;
		}
		if(cursors.right.isDown)
		{
			//move to the right
			this.boy.body.velocity.x = 600;
		}
	},


	 collectBall: function (ball, text, scoreNumber, yGravity, xCord, music) {
		//removes ball from screen
		ball.kill();	//removes ball from screen
		this.music = game.sound.play('bleep');
			this.x = Math.floor(Math.random() * 10);
			this.xCord = 0;
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

	    this.ball = this.fruit.create(this.xCord, 0, 'ball'); //recreates the ball	
		 if (this.yGravity < 1500) {
			 this.yGravity = this.yGravity + 100;
		 }
	    this.ball.body.gravity.y = this.yGravity;              //creates the y gravity for the ball
		this.scoreNumber = this.scoreNumber + 10 
		this.text.text = "Score: " + this.scoreNumber;
		
	 },

	 gameOver: function (ball, fruit, text, scoreNumber, gameOverSound) {
		this.gameOverSound = game.sound.play('gameover');
		ball.kill();
		game.state.start('gameOver');
		return this.scoreNumber;
	 },

	 spawnFruit: function (xCord, fruit, ball, text) {
	 	//code for respawn fruit goes here
	 	var xRandom = 0;
	 	this.xRandom = Math.floor(Math.random() * 10);
	 	if (xRandom > 0 && xRandom < 5.000001) {
	 		this.banana = this.fruit.create(xCord, 0, 'banana');
	 		//add physics here

	 	if (xRandom > 5.000001 && xRandom < 10)
	 		this.ball = this.fruit.create(xCord, 0, 'ball');
	 	}
	 },

};


//run method if true