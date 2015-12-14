var loading = function(game){
	// console.log("%cStarting my awesome game", "color:white; background:red");

};

loading.prototype = {

	preload: function() {

		game.load.image('background', '1050x750-bkg.png');
		game.load.tilemap('map', 'assets/tilemaps/maps/random.csv', null, Phaser.Tilemap.CSV);
		game.load.image('tileset_img', 'assets/tilemaps/tiles/scifi_platformTiles_32x32.png');
		game.load.image('phaser', 'assets/sprites/phaser-dude.png');
		game.load.image('star', 'assets/star.png');
		game.load.image('diamond', 'assets/diamond.png');
		console.log('LOADING...');
	},
	create: function(){
		game.state.start('mainMenu');
	}
};