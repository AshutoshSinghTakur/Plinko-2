var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var particles
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=240; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=400; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=560; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=720; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=880; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  division = new Divisions(0,270,10,550);
  division1 = new Divisions(800,270,10,550);

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  
}
 

function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

  division.display();
  division1.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  if(frameCount % 60 === 0){
    particles.push(new Particles(random(width/1-10, width/9+10), 10, 10));
  }

  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
  
}