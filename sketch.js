const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(800, 747);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(700, 720, 2000, 50);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight))
  }

  for (var j = 40; j <= width; j = j + 60) {
    plinkos.push(new Plinko(j, 75))
  }

  for (var j = 45; j <= width; j = j + 60) {
    plinkos.push(new Plinko(j, 120))
  }

  for (var j = 40; j <= width; j = j + 60) {
    plinkos.push(new Plinko(j, 160))
  }

  for (var j = 45; j <= width; j = j + 60) {
    plinkos.push(new Plinko(j, 200))
  }

  for (var j = 40; j <= width; j = j + 60) {
    plinkos.push(new Plinko(j, 240))
  }

  for (var j = 45; j <= width; j = j + 60) {
    plinkos.push(new Plinko(j, 280))
  }

  for (var j = 40; j <= width; j = j + 60) {
    plinkos.push(new Plinko(j, 320))
  }

  for (var j = 45; j <= width; j = j + 60) {
    plinkos.push(new Plinko(j, 360))
  }

  if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  
}



function draw() {
  background(127, 127, 127);
  Engine.update(engine);
  ground.display();


  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  drawSprites();
}