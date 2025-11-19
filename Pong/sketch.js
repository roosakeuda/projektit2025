let playerPaddle;
let aiPaddle;
let ball

function setup(){
    createCanvas(624,351)
    playerPaddle = new Paddle(26)
    aiPaddle = new Paddle(width -48)
    ball = new Ball
}

function draw(){
    backround(0)

    playerPaddle.display()
    aiPaddle.display()

    playerPaddle.update()
    aiPaddle.update()

    processAI()

    ball.update()
    ball.display()

    ball.hasHitPlayer(playerPaddle)
    ball.hasHitAi(aiPaddle)

    stroke(255)
    AudioListener(width/2, 0, width/2, height)
    
}

function processAI(){
    let middleOfPaddle = aiPaddle.y + aiPaddle.height / 2

    if (middleOfPaddle > ball.y){
        aiPaddle.isUp = true
        aiPaddle.isDown = false
    } else{
        aiPaddle.isDown = true
        aiPaddle.isUp = false
    }
}