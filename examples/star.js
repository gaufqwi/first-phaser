/**
 * Created by jay on 4/12/15.
 */
window.onload = function () {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, "main",
        {preload: preload, create: create, update: update});
    var star, cursors, tween;

    function preload () {
        game.load.image('star', 'assets/star.png');
    }

    function create () {
        cursors = game.input.keyboard.createCursorKeys();
        star = game.add.sprite(100, 100, 'star');
        game.physics.enable(star, Phaser.Physics.ARCADE);
    }

    function update () {

    }
};