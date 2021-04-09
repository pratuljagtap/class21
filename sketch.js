var fixedRect,movingRect;

var gameObject1, gameObject2, gameObject3,gameObject4 ;






function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="green"
  movingRect= createSprite(400, 200, 80, 30);
movingRect.shapeColor= "green";

  gameObject1= createSprite(100, 100, 50, 80);
  gameObject1.shapeColor="blue"

  gameObject2= createSprite(200, 100, 50, 80);
  gameObject2.shapeColor="blue"

  gameObject3= createSprite(300, 100, 50, 80);
  gameObject3.shapeColor="blue"

  gameObject4= createSprite(400, 100, 50, 80);
  gameObject4.shapeColor="blue"
  

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

 
 if( isTouching(movingRect, gameObject1)){
   
  movingRect.shapeColor= "red";
  gameObject1.shapeColor= "red";
 }
 else{
   
  movingRect.shapeColor= "green";
  gameObject1.shapeColor= "green";
 }

  drawSprites();
}



