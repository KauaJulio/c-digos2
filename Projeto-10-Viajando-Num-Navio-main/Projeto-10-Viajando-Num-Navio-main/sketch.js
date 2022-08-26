var mar,navio;
var marImg,navioImg;

function preload(){
  marImg = loadImage("sea.png");
  navioImg1 = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(550,400);
  background("blue");

  mar=createSprite(400,200);
  mar.addImage(marImg);
  mar.velocityX = -5;
  mar.scale=0.3;

  
  navio = createSprite(130,200,30,30);
  navio.addAnimation("movingShip",navioImg1);
  navio.scale =0.25;
  
}

function draw() {
  background(0);
  mar.velocityX = -3;

  
  if(mar.x < 0){
    mar.x = mar.width/8;
  }

  drawSprites();
}

