const game = new Game();

function preload() {
    game.preload()
}
function setup() {
    createCanvas(1000, 600)
    game.setup()
}
function draw() {
    game.draw()
}

function keyPressed() {
    // arrow up = jump
	if (keyCode === 38) {
		game.player.jump()
    }
}