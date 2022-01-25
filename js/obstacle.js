class Obstacle {

    constructor(image) {
		this.image = image
		this.x = width
		this.y = (Math.random() * height) / 2.5
		this.width = 30
		this.height = 30
	}

    collision(playerInfo) {
        let obstacleX = this.x + this.width / 2
        let obstacleY = this.y + this.height

        let playerX = playerInfo.x + playerInfo.width / 2
        let playerY = playerInfo.y 

        if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
            return false
        } else {
            game.score += 10
            console.log(game.score)
            return true
        }
    }

    draw(){
        console.log("this is the obstacle")
        this.x--
        image(game.diamantImage, this.x, this.y, this.width, this.height)

    }
}