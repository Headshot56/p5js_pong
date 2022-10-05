function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);

  return parseFloat(str);
}

function setup(){
  ballX = 500;
  ballY = 350;
  ball_X_Velocity = getRandomFloat(-10, 10, 0);
  ball_Y_Velocity = getRandomFloat(-3, 3, 0);
  playerScore = 0;
  enemyScore = 0;
  //To Do: Player, Player movement, Ball, Ball Movement, Enemy, Enemy movement, Final check and all collisions
  createCanvas(1000, 700);
  background(0,0,0)
  textSize(50);
  fill(color('white'));
}

function draw(){
  //Player and player movement. Very easy in p5 js
  playerY = mouseY - 50;
  if (playerY >= 600){
    playerY = 600;
  }
  if (playerY <= 0){
    playerY = 0
  }

  //Enemy
  enemyY = ballY - 50;
  if (enemyY >= 600){
    enemyY = 600;
  }
  if (enemyY <= 0){
    enemyY = 0
  }

  //Ball movement
  ballX += ball_X_Velocity
  ballY += ball_Y_Velocity
  
  //Ball bounces
  //walls
  if (ballX <= 12.5){ //Hit player side
    playerScore ++;
    ballX = 500;
    ballY = 350;
    ball_X_Velocity = getRandomFloat(-10, 10, 0);
    ball_Y_Velocity = getRandomFloat(-3, 3, 0);
  }
  if (ballX >= 987.5){ //Hit enemy side
    enemyScore ++;
    ballX = 500;
    ballY = 350;
    ball_X_Velocity = getRandomFloat(-10, 10, 0);
    ball_Y_Velocity = getRandomFloat(-3, 3, 0);
  }
  if (ballY <= 12.5){
    ball_Y_Velocity *= -1;
  }
  if (ballY >= 687.5){
    ball_Y_Velocity *= -1;
  }
  //Player paddle
  if (ballY > playerY && ballY < playerY + 100){
    if (ballX > 50 && ballX < 70){
      ball_X_Velocity *= -1.1;
    }
  }
  if (ballY > enemyY && ballY < enemyY + 100){
    if (ballX > 900 && ballX < 920){
      ball_X_Velocity *= -1.1;
    }
  }

  //Render to screen
  background(0,0,0);
  rect(50, playerY, 20, 100, 20);
  rect(900, enemyY, 20, 100, 20)
  ellipse(ballX, ballY, 25, 25)
  text(str(playerScore) + ":" + str(enemyScore), 450, 50);
}