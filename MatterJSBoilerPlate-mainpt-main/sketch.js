const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var block;
var rectangle;
var ground;
var ball1;
var block1;
var rectangle1;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	var ball_options = {
		restitution : 0.87,
		frictionAir : 0.01
		
		}

	  var block_options = {
		restitution : 0.87,
		frictionAir : 0.01

	  }

	  var rectangle_options = {
		restitution : 0.87,
		frictionAir : 0.01
	
	  }

	  var ground_options = {
		isStatic : true
	  }

	ball1 = Bodies.circle(220, 200, 20, ball_options);
	World.add(world, ball1);
	
	block1 = Bodies.rectangle(110, 50, 20, 20, block_options);
	World.add(world, block1);

	rectangle1 = Bodies.rectangle(350, 50, 20, 20, rectangle_options);
	World.add(world, rectangle1);

	ground1 = Bodies.rectangle(390,200,400,20, ground_options);

	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);
  
 ellipse(ball1.position.x,ball1.position.y,20);
 rect(block1.position.x,block1.position.y,40,20);
 rect(rectangle1.position.x,rectangle1.position.y,40,20);
 rect(ground.position.x,ground.position.y,50,20);

  drawSprites();
}



