var ship
var ship1,ship2,ship3,ship4_running
var sea;
var sea_running;
function preload(){
ship_running=loadAnimation( "ship-1.png","ship-2.png","ship-3.png","ship-4.png",);
sea_running=loadAnimation("sea.png");
}

function setup(){
  createCanvas(800,800);
  sea=createSprite(200,300,400,400);
  sea.addAnimation("running",sea_running)
  sea.velocityX=-1;
  ship =createSprite(370,500,20,20);
  ship.addAnimation("running",ship_running)
  ship.scale=0.25;
}
  
function draw() {
  background("white");
 drawSprites();
 console.log(sea.x)
 if(sea.x<0){
   sea.x=199;
 }
}