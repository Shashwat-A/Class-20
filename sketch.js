var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
 movingRect = createSprite(400, 100, 70, 50);
 fixedRect = createSprite(400, 300, 50, 70);

 fixedRect.velocityY = -5;
 movingRect.velocityY = 5;
}

function draw() {
  background(255,255,255); 
  
  if (fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 ) {

      fixedRect.velocityY = fixedRect.velocityY * (-1);
      movingRect.velocityY = movingRect.velocityY * (-1);

    }

    if ((movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
      fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2) {
        
        fixedRect.velocityX = fixedRect.velocityX * (-1);
        movingRect.velocityX = movingRect.velocityX * (-1);
      }

    edges = createEdgeSprites();
    fixedRect.bounceOff(edges);
    movingRect.bounceOff(edges);

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;
  
  drawSprites();
}
function isTouching () {
  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2) {

      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
    } else {
      fixedRect.shapeColor = "green";
      movingRect.shapeColor = "green";
    }
}