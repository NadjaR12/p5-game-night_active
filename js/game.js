class Game {

    constructor() {
        this.nightBackground
        this.spaceBackground
        this.score = 0
    }

    setup() {
        this.player = new Player()
        this.background = new Background()
        this.obstacles = []
        this.diamonds = []
        this.whiteDiamonds = []
        this.rainbowDiamonds = []
        this.inSpace = false
        this.timer = 0
    }

    preload() {
        this.nightBackground = [
            {src: loadImage('assets/background/Parallax Desert Background (Seamless)/01_Sky.png'), x: 0, speed: 0},
            {src: loadImage('assets/background/Parallax Desert Background (Seamless)/02_Stars.png'), x: 0, speed: 0},
            {src: loadImage('assets/background/Parallax Desert Background (Seamless)/03_Moon.png'), x: 0, speed: 0},
            {src: loadImage('assets/background/Parallax Desert Background (Seamless)/04_Cloud.png'), x: 0, speed: 1},
            {src: loadImage('assets/background/Parallax Desert Background (Seamless)/05_Cloud.png'), x: 0, speed: 2},
            {src: loadImage('assets/background/Parallax Desert Background (Seamless)/07_Cloud.png'), x: 0, speed: 3},
            {src: loadImage('assets/background/Parallax Desert Background (Seamless)/09_Cloudsmall.png'), x: 0, speed: 4}
        ]

        this.spaceBackground = [
        {src: loadImage('assets/background/Space/Nebula Blue.png'), x: 0, speed: 0},
        //{src: loadImage('assets/background/Parallax Desert Background (Seamless)/03_Moon.png'), x: 0, speed: 0},
        {src: loadImage('assets/background/Space/Stars Small_1.png'), x: 0, speed: 2},
        {src: loadImage('assets/background/Space/Stars Small_2.png'), x: 0, speed: 3},
        {src: loadImage('assets/background/Space/Stars-Big_1_1_PC.png'), x: 0, speed: 4},
        {src: loadImage('assets/background/Space/Stars-Big_1_2_PC.png'), x: 0, speed: 5}]
   

        this.playerImage = loadImage('assets/character/trippycat.png')
        this.trippyCatImage = [loadImage('assets/character/trippycatgreen.png'), loadImage('assets/character/trippycatred.png'), loadImage('assets/character/trippycatblue.png')]
        this.rotatingCatImage = loadImage('assets/character/editor-1s-47px (1).gif')

        this.diamondImage = loadImage('assets/obstacles/pngkey.com-diamond-sparkle-png-4926558.png')
        this.thirdeyeImage = loadImage('assets/obstacles/icons8-third-eye-symbol-64.png') 
        this.whiteDiamondImage = loadImage('assets/obstacles/disco-ball-png-27276.png')
        this.rainbowDiamondImage = loadImage('assets/obstacles/Cookie-PNG-Download-Image.png')
    }

    draw() {
        clear()
        this.background.draw()
        this.player.draw()
//scoreboard
        fill('#f2709c');
        textSize(40);
        text('Score:', 750, 580);
        textSize(40);
        text(this.score, 880, 580)
// cat stops rotating
        if(game.player.rotation){
            if(frameCount % 150 === 0) {
            game.player.rotation = false
            game.player.catImage = game.playerImage
         }
        }
// obstacles - third eye
        if (frameCount % 100 === 0){
            this.obstacles.push(new Obstacle(this.thirdeyeImage))
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
// diamonds
        if (frameCount % 800 === 0){
            this.diamonds.push(new Diamond(this.diamondImage))
            console.log(this.diamonds)
        }

        this.diamonds.forEach(function (diamond){
            diamond.draw()
        })
    
        this.diamonds = this.diamonds.filter(diamond => {
            if (diamond.collision(this.player) || diamond.x < 0) {
                return false
            } else  {
                return true
            }
        })
 // white Diamonds       
        if (frameCount % 2670 === 0){
            this.whiteDiamonds.push(new Whitediamond(this.whiteDiamondImage))
            console.log(this.whiteDiamonds)
        }

        this.whiteDiamonds.forEach(function (whiteDiamond){
            whiteDiamond.draw()
        })
    
        this.whiteDiamonds = this.whiteDiamonds.filter(whiteDiamond => {
            if (whiteDiamond.collision(this.player) || whiteDiamond.x < 0) {
                return false
            } else  {
                return true
            }
        })

// Rainbow Diamonds       
           if (frameCount % 3800 === 0){
               this.rainbowDiamonds.push(new RainbowDiamond(this.rainbowDiamondImage))
               console.log(this.rainbowDiamonds)
           }
   
           this.rainbowDiamonds.forEach(function (rainbowDiamond){
               rainbowDiamond.draw()
           })
       
           this.rainbowDiamonds = this.rainbowDiamonds.filter(rainbowDiamond => {
               if (rainbowDiamond.collision(this.player) || rainbowDiamond.x < 0) {
                   return false
               } else  {
                   return true
               }
           })
    }
}