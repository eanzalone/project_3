var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });


function preload() {

    game.load.image('background', '1050x750-bkg.png');
    game.load.tilemap('map', 'assets/tilemaps/maps/random.csv', null, Phaser.Tilemap.CSV);
    game.load.image('tileset_img', 'assets/tilemaps/tiles/scifi_platformTiles_32x32.png');
    game.load.image('phaser', 'assets/sprites/phaser-dude.png');
    game.load.image('star', 'assets/star.png');
    game.load.image('diamond', 'assets/diamond.png');

}

var score = 0;
var scoreText;
var map;
var layer;
var cursors;
var sprite;

function create() {

    var bkg = game.add.tileSprite(0, 0, 800, 600, 'background');
    bkg.fixedToCamera = true;

    map = game.add.tilemap('map', 35, 35);

    map.addTilesetImage('tileset_img');
    
    layer = map.createLayer(0);

    layer.resizeWorld();

    map.setCollisionByExclusion([], true);

    sprite = game.add.sprite(50, 50, 'phaser');

    game.physics.enable(sprite);

    // sprite.body.bounce.set(0.6);
    // sprite.body.tilePadding.set(32);
    // sprite.body.bounce.y = 0.2;
    sprite.body.gravity.y = 300;
    sprite.body.collideWorldBounds = true;

    game.camera.follow(sprite);

    game.physics.arcade.gravity.y = 300;


    stars = game.add.group();

    stars.enableBody = true;
    // stars.body.velocity.y = 300;

    //  Here we'll create 12 of them evenly spaced apart
    // for (var i = 0; i < 12; i++)
    // {
        //  Create a star inside of the 'stars' group
        // var star = 
        stars.create(850, 400, 'star');
        stars.create(100, 100, 'diamond');
        // star.fixedToCamera = true;

        //  Let gravity do its thing
        // star.body.gravity.y = 300;

        // //  This just gives each star a slightly random bounce value
        // star.body.bounce.y = 0.7 + Math.random() * 0.2;
    // }


    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' });
    scoreText.fixedToCamera = true;


    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

    this.game.physics.arcade.collide(sprite, layer);
    this.game.physics.arcade.collide(stars, layer);
    this.game.physics.arcade.overlap(sprite, stars, collectStar, null, this);

    //  Un-comment these to gain full control over the sprite
    sprite.body.velocity.x = 0;
    // sprite.body.velocity.y = 0;

    if (cursors.up.isDown)
    {
        sprite.body.velocity.y = -150;
    }
    else if (cursors.down.isDown)
    {
        sprite.body.velocity.y = 150;
    }

    if (cursors.left.isDown)
    {
        sprite.body.velocity.x = -150;
    }
    else if (cursors.right.isDown)
    {
        sprite.body.velocity.x = 150;
    }

}

function collectStar (sprite, star) {

    // Removes the star from the screen
    star.kill();

    //  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;

}

function render() {

    //  Useful debug things you can turn on to see what's happening

    // game.debug.spriteBounds(sprite);
    // game.debug.cameraInfo(game.camera, 32, 32);
    // game.debug.body(sprite);
    // game.debug.bodyInfo(sprite, 32, 32);

}