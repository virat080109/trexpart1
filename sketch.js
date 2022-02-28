
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
groundimage=loadImage("ground1.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,50,50);
trex.addAnimation("x",trex_running)
trex.scale=0.5;
ground=createSprite(200,180,400,20);
ground.addImage(groundimage);
ground.scale=0.25;
}

function draw(){
  background("red")
  drawSprites();

}
