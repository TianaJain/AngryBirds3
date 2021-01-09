
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, box,box2;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  //Matter.Bodies.circle(x,y,radius,options);
  ball=new Paper(200,200,40)
	box = new Dustbin(350,350,80,100);
   
   //box2 = new Dustbin(240,100,70,70);
   ground = new Ground(200,399,399,20);
   console.log(ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  Engine.update(engine);

  box.display();
  //box2.display();
  ball.display();
  ground.display();

  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyforce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}



