class Player {
    constructor() {
        this.width = 140
        this.height = 180
        this.x = 20
        this.y = height - this.height

        this.gravity = 0.3
        this.velocity = 0

        this.forward = 0
        this.backward = 0
    
    }

    jump(){
        this.velocity = -13
    }

    forwardJump(){
        this.forward = 40
        this.x += this.forward
    }
    backwardJump(){
        this.backward = 40
        this.x -= this.backward

    }

    draw (){
        this.velocity += this.gravity
        this.y += this.velocity

        if (this.y >= height - this.height) {
			this.y = height - this.height
		}

        if(this.x >= width - this.width) {
            this.x = width - this.width
        }

        console.log("here goes the player")
        image(game.playerImage, this.x, this.y, this.width, this.height)
    }

  
}