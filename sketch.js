var ball,ballIMG
var playerPaddle,paddleIMG
var computerPaddle;
var wall1,wall2,wall3,wall4
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10
var block11,block12,block13,block14
var block21,block22,block23,block24,block25,block26,block27,block28
var block15,block16,block17,block18,block19,block20


function preload() {
 ballIMG = loadImage("pongBal.png");
 paddleIMG = loadImage("paddle2.jpg") 
}
function setup(){
  createCanvas(900,700)
  ball = createSprite(200,600,10,10);
  ball.addImage(ballIMG)
  ball.scale=0.1
 playerPaddle = createSprite(100,680,100,10);
playerPaddle.addImage(paddleIMG)
playerPaddle.scale=0.4
 
 wall1 = createSprite(-3,650,10,7000);
 wall2 = createSprite(900,200,10,7000);
 wall3 =createSprite(350,0,1500,10)
 

 
 block1 = createSprite(300,300,100,20)
 block2 = createSprite(450,300,100,20)
 block3 = createSprite(600,300,100,20)
 block4 = createSprite(150,300,100,20)

 block5 = createSprite(70,250,100,20)
 block7 = createSprite(220,250,100,20)
 block8 = createSprite(670,250,100,20)
 block9 = createSprite(370,250,100,20)
 block10 = createSprite(520,250,100,20)

 block11 = createSprite(300,200,100,20)
 block12 = createSprite(450,200,100,20)
 block13 = createSprite(600,200,100,20)
 block14 = createSprite(150,200,100,20)
 block15 = createSprite(750,300,100,20)
 block16 = createSprite(750,200,100,20)
 block17 = createSprite(830,250,100,20)
 block18 = createSprite(830,150,100,20)
 block19 = createSprite(70,150,100,20)
 block20 = createSprite(220,150,100,20)

 block21 = createSprite(670,150,100,20)
 block22 = createSprite(370,150,100,20)
 block23 = createSprite(520,150,100,20)
 block24 = createSprite(300,100,100,20)
 block25 = createSprite(450,100,100,20)
 block26 = createSprite(600,100,100,20)
 block27 = createSprite(150,100,100,20)
 block28 = createSprite(750,100,100,20)
 
 


 


}
function draw() {
  //clear the screen
  background("black");
  
  //make the player paddle move with the mouse's y position
  playerPaddle.x = World.mouseX;
  
  //AI for the computer paddle
  //make it move with the ball's y position
 
  
  //create edge boundaries
  //make the ball bounce with the top and the bottom edges
  
  ball.bounceOff(wall1);
  ball.bounceOff(wall2)
  ball.bounceOff(wall3)
  
  ball.bounceOff(block1)
  ball.bounceOff(block2)
  ball.bounceOff(block3)
  ball.bounceOff(block4)
  ball.bounceOff(block5)
  ball.bounceOff(block7)
  ball.bounceOff(block8)
  ball.bounceOff(block9)
  ball.bounceOff(block10)
  ball.bounceOff(block11)
  ball.bounceOff(block12)
  ball.bounceOff(block13)
  ball.bounceOff(block14)
  ball.bounceOff(block15)
  ball.bounceOff(block16)
  ball.bounceOff(block17)
  ball.bounceOff(block18)
  ball.bounceOff(block19)
  ball.bounceOff(block20)
  ball.bounceOff(block21)
  ball.bounceOff(block22)
  ball.bounceOff(block23)
  ball.bounceOff(block24)
  ball.bounceOff(block25)
  ball.bounceOff(block26)
  ball.bounceOff(block27)
  ball.bounceOff(block28)

  

  playerPaddle.bounceOff(wall1)
  playerPaddle.bounceOff(wall2)
  //make the ball bounce off the paddles
  ball.bounceOff(playerPaddle);
  
  
  //serve the ball when space is pressed
  if (keyDown("space")) {
    ball.velocityY = -10;
    ball.velocityX = -9;
  }
  
  if(ball.isTouching(block1)){
    block1.visible = false
  }
  if(ball.isTouching(block2)){
    block2.visible = false
  }
  if(ball.isTouching(block3)){
    block3.visible = false
  }
  if(ball.isTouching(block4)){
    block4.visible = false
  }
  if(ball.isTouching(block5)){
    block5.visible = false
  }
  if(ball.isTouching(block7)){
    block7.visible = false
  }
  //reset the ball to the centre if it crosses the screen
  if(ball.y > 710 || ball.x <0) {
    ball.x = 350;
    ball.y = 350;
    ball.velocityX = 0;
    ball.velocityY = 0;
  }
  
  //draw the sprites on the screen
 
  drawSprites();
}
