const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var ground;
var stand1, stand2;
var ball;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  

  ground = new Ground(450,390,900,20);
  stand1 = new Ground(280,290,80,10);
  stand2 = new Ground(370,200,80,10);
  stand3 = new Ground(450,300,80,10);
  stand4 = new Ground(620,230,80,10);
  stand5 = new Ground(650,290,80,10);
  
  
  stand8 = new Ground(700,200,70,10);
  stand9 = new Ground(840,200,90,10);
  stand10 = new Ground(790,180,10,50);
  stand11 = new Ground(880,165,10,80);

  ball=new Ball(100,200,40,40);


	Engine.run(engine);
}

  function draw() {
    background("black"); 
    
    
    Engine.update(engine);
    
    ground.display();
    
    stand1.display();
    stand2.display();
    stand3.display();
  

    stand4.display();
    stand5.display();
    
    
    stand8.display();
    stand9.display();
    stand10.display();
    stand11.display();

    ball.display();
  }
  

  function keyPressed() {
    if (keyCode === UP_ARROW) {
  
      Matter.Body.applyForce(ball.body,ball.body.position,{x:72,y:-72});
    
    }
  }

  