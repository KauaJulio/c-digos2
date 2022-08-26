var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

path = createSprite(200,400);
path.addImage(pathImg);
path.velocityY = -5;
path.scale=0.3;

boy = createSprite(130,200,30,30);
boy.addAnimation("movingBoy",boyImg1);
boy.scale =0.25;

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;
rightBoundary=createSprite(390,0,100,800);
rigthBoundary.visible = false;
}


function draw() {
background(0);
path.velocityY = 4;

// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);




 if(path.y < 0){
    path.y = path.width/8;
  }



 drawSprites();

 }




