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

        this.rotation = false
        this.catImage = game.playerImage
    }

    jump(){
        this.velocity = -13
    }

    forwardJump(){
        this.forward += 0.5
        this.x += this.forward
    }
    backwardJump(){
        this.backward += 0.5
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
        if(this.x <= 0) {
            this.x = 0
        }

        if(keyIsDown(39)){
            this.forwardJump();
        }

        if(keyIsDown(37)){
            this.backwardJump();
        }

        if (this.rotation === true){
            this.catImage = game.rotatingCatImage
            }

        image(this.catImage, this.x, this.y, this.width, this.height)
      
    } 
}