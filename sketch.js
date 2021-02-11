
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone;
var ground;
var rubber;
var hammer;
var sand1,sand2,sand3,sand4,sand5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    stone = new Stone(200,350,100,100)
	  ground = new Ground(400,height,800,20)
    rubber = new Rubber(600,500,40)
    hammer = new Hammer(200,50) 
    sand1 = new Sand(500,500,6)
    sand2 = new Sand(450,500,6)
    sand3 = new Sand(350,500,6)
    sand4 = new Sand(300,500,6)
    sand5 = new Sand(550,500,6)
    
    Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
 // console.log(rubber.body.position.x)
  stone.display();
  ground.display();
  rubber.display();
  hammer.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  drawSprites();
 
}



