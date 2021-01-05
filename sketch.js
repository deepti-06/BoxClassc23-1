//namespacing

const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies


var engine, world, box1
function setup() {
  createCanvas(400,400);

  engine= Engine.create();
  world= engine.world;
  var option= {
    isStatic:true
  }


ground= Bodies.rectangle(200,360,400,10,option)
World.add(world,ground)



box1= new Box(200,100,50,50)
 box2= new Box(240, 200,50,80)
}

function draw() {
  background("black");  
  Engine.update(engine)
   rectMode(CENTER)
  // fill("brown")
  rect(ground.position.x,ground.position.y,400,10)

  box1.display()
  box2.display()
 
}