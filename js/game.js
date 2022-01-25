class Game {

    constructor() {
        this.backgroundImages
        this.score = 0
    }

    setup() {
        this.player = new Player()
        this.background = new Background()
        this.obstacles = []
    }

    preload() {
        this.backgroundImages = [
            {src: loadImage('assets/background/Parallax Desert Background (Seamless)/01_Sky.png'), x: 0, speed: 0},
            {src: loadImage('assets/background/Parallax Desert Background (Seamless)/02_Stars.png'), x: 0, speed: 1},
            {src: loadImage('assets/background/Parallax Desert Background (Seamless)/03_Moon.png'), x: 0, speed: 2},
            {src: loadImage('assets/background/Parallax Desert Background (Seamless)/04_Cloud.png'), x: 0, speed: 3},
            {src: loadImage('assets/background/Parallax Desert Background (Seamless)/05_Cloud.png'), x: 0, speed: 4},
            {src: loadImage('assets/background/Parallax Desert Background (Seamless)/07_Cloud.png'), x: 0, speed: 5},
            {src: loadImage('assets/background/Parallax Desert Background (Seamless)/09_Cloudsmall.png'), x: 0, speed: 6}
        ]

        this.playerImage = loadImage('assets/character/trippycat.png')
        this.diamantImage = [
            {loadImage('assets/obstacles/icons8-illuminati-symbol-48.png')},
            {loadImage('assets/obstacles/icons8-third-eye-symbol-64.png')} // zweites Image hinzufügen - random obstacle auswählen
        ]
    }

    draw() {
        clear()
        this.background.draw()
        this.player.draw()

        if (frameCount % 100 === 0){
            this.obstacles.push(new Obstacle(this.diamantImage))
            console.log(this.obstacles)
        }

        this.obstacles.forEach(function (obstacle){
            obstacle.draw()
        })
    
        this.obstacles = this.obstacles.filter(obstacle => {
            if (obstacle.collision(this.player) || obstacle.x < 0) {
                return false
            } else  {
                return true
            }
        })
    }
}