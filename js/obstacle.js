class Obstacle {

    constructor(image) {
		this.image = image
		this.x = width
		this.y = (Math.random() * height) / 2.5
		this.width = 50
		this.height = 50	
    }

    collision(playerInfo) {
        let obstacleX = this.x + this.width / 2
        let obstacleY = this.y + this.height

        let playerX = playerInfo.x + playerInfo.width / 2
        let playerY = playerInfo.y 

        if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
            return false
        } else {
            game.catchedSound.play()
            game.score += 1
            console.log(game.score)
            return true
        }
    }

    draw(){
        this.x--
        image(game.thirdeyeImage, this.x, this.y, this.width, this.height)
    }
}


class Diamond {
   
    constructor(image) {
		this.image = image
		this.x = width
		this.y = (Math.random() * height) / 2.5
		this.width = 100
		this.height = 100
	}

    collision(playerInfo) {
        let obstacleX = this.x + this.width / 2
        let obstacleY = this.y + this.height

        let playerX = playerInfo.x + playerInfo.width / 2
        let playerY = playerInfo.y 

        if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
            return false
        } else {
// change Cat Image
            game.player.catImage = game.trippyCatImage[Math.floor(Math.random() * game.trippyCatImage.length)]
            game.score += 20
            console.log(game.score)
            return true
        }
    }

    draw(){
        this.x--
        image(game.diamondImage, this.x, this.y, this.width, this.height)
    }
} 

class Whitediamond {

    constructor(image) {
		this.image = image
		this.x = width
		this.y = (Math.random() * height) / 2.5
		this.width = 120
		this.height = 120
	}

    collision(playerInfo) {
//collision happens faster than in the other obstacle Classes
        let obstacleX = this.x + this.width
        let obstacleY = this.y + this.height

        let playerX = playerInfo.x + playerInfo.width
        let playerY = playerInfo.y + playerInfo.height

        if (dist(obstacleX, obstacleY, playerX, playerY) > 30) {
            return false
        } else {
// in case of collision with the disco ball change Cat Image back to playerImage + make cat rotate + cat makes angry sound --score
            game.collisionSound.play()
            game.player.rotation = true
            game.score -= 50
            console.log(game.score)
            return true
        }
    }

    draw(){
        this.x--
        image(game.whiteDiamondImage, this.x, this.y, this.width, this.height) 
    }  
}

class RainbowDiamond {

    constructor(image) {
		this.image = image
		this.x = width
		this.y = (Math.random() * height) / 2.5
		this.width = 150
		this.height = 150
	}

    collision(playerInfo) {
        let obstacleX = this.x + this.width / 2
        let obstacleY = this.y + this.height

        let playerX = playerInfo.x + playerInfo.width / 2
        let playerY = playerInfo.y 

        if (dist(obstacleX, obstacleY, playerX, playerY) > 20) {
            return false
        } else {
            game.inSpace = true
        }  
// in case of collision change background Images für Zeitintervall
        if (game.inSpace){
            game.background.backgroundImages = game.spaceBackground
        }
            game.spaceSound.play()
            game.score += 10
            console.log(game.score)
            return true
    }

    draw(){
        this.x--
        image(game.rainbowDiamondImage, this.x, this.y, this.width, this.height)

        if(frameCount % 600 === 0) {
            game.inSpace = false
            game.background.backgroundImages = game.nightBackground
        }
    } 
}