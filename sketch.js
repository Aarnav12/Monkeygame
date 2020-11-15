
var PLAY = 1
var END = 0

var gameState = PLAY

var  survivalTime 

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
 
  monkey=createSprite(80,310,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
     survivalTime = 0;
 
  
 FoodGroup= new Group();
  obstaclesGroup= new Group();

  
}


function draw() {
background("white");
  
  ground=createSprite(600,350,1200,20);
  ground.velocityX=-4;
  ground.X=ground.width/2;
  console.log(ground.x);
  
  
  
  monkey.collide(ground);
  
  if(keyDown("space") ){
    monkey.velocityY = -12;
  }
  
 monkey.velocityY = monkey.velocityY + 0.8;
  
  

  if(gameState === PLAY){
 
 
  
     stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
 
  
    if(obstaclesGroup.isTouching(monkey)){
        //trex.velocityY = -12;
        gameState = END;
      
    }
    
     if(keyDown("space") ){
    monkey.velocityY = -12;
  }
  
 monkey.velocityY = monkey.velocityY + 0.8;
    
  banan(); 
  
  obstacles();
    
  }else if(gameState === END){
    banana.velocityX = 0;
  banana.lifetime = -1;
    
    obstacle.velocityX = 0;
  obstacle.lifetime = -1;
    
     
     stroke("black");
  textSize(20);
  fill("black");
     text("survivalTime: "+ survivalTime, 100,50);
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50)
  
    
  }
  stroke("black");
  textSize(20);
  fill("black");
  text("survivalTime: "+ survivalTime, 100,50);
    
 drawSprites(); 
}

function banan() {
  if (frameCount%80===0){
  banana=createSprite(600,250, 40,10);
  banana.addImage(bananaImage); 
  banana.scale = 0.1;
  banana.y=random(120,200);
  banana.velocityX = -5;
  banana.lifetime = 300;
  banana.depth = monkey.depth;
  monkey.depth = monkey.depth+1;
  FoodGroup.add(banana)
}
  
  
}

function obstacles() {
  if (frameCount%300===0){
  obstacle=createSprite(650,310, 40,10);
  obstacle.addImage(obstaceImage); 
  obstacle.scale = 0.2;
  obstacle.velocityX = -5;
  obstacle.lifetime = 300;
  
  obstaclesGroup.add(obstacle);
}
  
  
}





