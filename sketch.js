var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
 pathImg=loadImage ("path.png"); 
 boyImg=loadAnimation ("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");
 
}

function setup(){
  
  createCanvas(400,400);
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY=2
path.scale=1.2;

boy=createSprite(180,340,30,30);
boy.addAnimation("movingBoy",boyImg);
boy.scale=0.8;
  
rightBoundary=createSprite(410,0,100,800);
leftBoundary=createSprite(0,0,100,800);

rightBoundary.visible=false
leftBoundary.visible=false


}
   
  
function draw() {
  background(0);
  path.velocityY = 4;
  
  
  
  boy.x =World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary,rightBoundary);
  
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
