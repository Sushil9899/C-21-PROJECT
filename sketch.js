const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var ball


function setup() {
  createCanvas(1400,800);
  engine = Engine.create();
  world = engine.world;

  
 
  ground =new Ground(width/2,670,width,20);
  right = new Ground(1100,610,20,120);
  left = new Ground(950,610,20,120);
  
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var ball_options={

    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
    
    }

  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)
}

function draw() 
{
  background("lightblue");
  
  ground.show();
  
  left.show();
  right.show();
  Engine.update(engine);


  ellipse(ball.position.x,ball.position.y,20)
keyPressed()

}


function keyPressed(){

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.9,y:0})

  }
  
  }
  
  