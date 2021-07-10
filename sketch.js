
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left
var right
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	ellipseMode(RADIUS);

	var ball_options={
	isStatic:false,
     restitution:0.2,
     friction:0,
		density:1.2,
		}
		ball=Bodies.circle(100,100,20,ball_options);
		World.add(world,ball)
	
		ground=new Ground(200,680,1500,20);
		left = new Ground(550,620,20,100);
	 right= new Ground(700,620,20,100)
		Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
  Engine.update(engine);
   ground.show()
   left.show()
  right.show();
  drawSprites();
 
}

function keyPressed(){
if (keyCode==UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:55,y:-55})

}


}



