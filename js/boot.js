var bootState = {
	//create function to start up arcade physics
	create: function() {
		//arcade physcs
		game.physics.startSystem(Phaser.Physics.ARCADE);

		//call the load state
		game.state.start('preload');
	}
}