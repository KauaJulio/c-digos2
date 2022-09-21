const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ball;
var bmouse;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
  bmouse = createImg("right.png") 

	bmouse.position(40, 30)
  bmouse.size(50, 50)
	bmouse.mouseClicked(jumpBall)

  ground =new Ground(200,650,400,20);
  right = new Ground(690,750,20,400);
  left = new Ground(550,750,20,400);
  top_wall = new Ground(600,650,400,20);


	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(220, 200, 20, ball_options);
	World.add(world, ball);

	Engine.run(engine);
	ellipseMode(RADIUS);
	rectMode(CENTER);

}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20);

  drawSprites();
 
}

function jumpBall() {
	Matter.Body.applyForce(ball, {
		x: 0, 
		y: 0
	  }, {
		x: 0,
		y: -0.04
	  } )
	  Matter.Body.applyForce(ball, {
		x: 0, 
		y: 0
	  }, {
		x: 0.04,
		y: 0
	  } )
}


