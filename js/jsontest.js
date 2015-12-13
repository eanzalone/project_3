var game = new Phaser.Game(800, 640, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });



function preload() {

    game.load.tilemap('mapName', 'assets/tilemap.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('sprites', 'assets/scifi_platformTiles_32x32.png');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);

}


function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);


    var map = game.add.tilemap('mapName', 32,32);
    map.addTilesetImage('scifi_platformTiles_32x32', 'sprites');
    

    background = map.createLayer('dark_background');
    level1 = map.createLayer('metal_tileset');


    background.resizeWorld();
    map.setCollisionBetween(775, true, 'level1');

    player = game.add.sprite(50, game.world.height - 150, 'dude');

    game.physics.arcade.enable(player);

    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    game.physics.enable(player);

}

function update(){
    this.game.physics.arcade.collide(player, level1);
}



