var hollow
var ground
var invis
var background

function preload(){
 knight=loadImage("hollows.png")
 floor=loadImage("floor.png")
}

function setup() {
createCanvas(600,600)
ground=createSprite(300,550,600,20)
ground.addImage(floor)
hollow=createSprite(20,490,40,40)
hollow.addImage(knight)
hollow.scale=0.5

}

function draw() {
 background("white");
 

if (keyDown("space")){
hollow.velocityY=-15
}
hollow.velocityY=hollow.velocityY+1

hollow.collide(ground)
drawSprites();
}
