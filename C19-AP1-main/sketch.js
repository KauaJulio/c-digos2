var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var score = 0;
var gameOver = "Fim de Jogo"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
    ghost = createSprite(200,200);
      ghost.addImage("ghoststp",ghostImg);
      ghost.scale = 0.43;
      climbersGroup = new Group();
      doorsGroup = new Group(); 
}
function draw() {


if(gameState == "play"){
  background(200);
  
  text("score: " + score, 200, 200)
  ghost.velocityY = ghost.velocityY +0.8
  tower.velocityY = - (-3 + score / 1000)
  
  score = score + Math.round(getFrameRate() / 60 )
  if(keyDown("space")){
    ghost.velocityY = -6
  }

  if(keyDown("left")){
    ghost.x =  ghost.x + -5 
  }

  if(keyDown("right")){
    ghost.x = ghost.x + 5
  
  }
  if(tower.y > 400){
      tower.y = 300
    }
  if(climbersGroup.isTouching(ghost) || ghost.y > 900){
    ghost.destroy()
    gameState = "END"
}
spawnObstacles()
drawSprites();
}

if(gameState == "END"){
  background("black");
  text(gameOver, 200, 200)
  gameOver.scale = 60
}

 
}

function spawnObstacles(){
  if(frameCount % 60 == 0){
    door = createSprite(200,0);
    door.addImage("door",doorImg);
    door.scale = 0.7;
    door.velocityY = 5
    door.x = Math.round(random(100, 400))
    climber = createSprite(200, 44);
    climber.addImage("climber",climberImg);
    climber.scale = 0.7;
    climber.velocityY = 5
    climber.x = door.x
    climbersGroup.add(climber);
    doorsGroup.add(door);
  }
}