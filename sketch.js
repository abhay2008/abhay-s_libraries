var fixedRect, movingRect;
var sprite1, sprite2;
var rect1, rect2;


function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect1 = createSprite(100, 300, 50, 50);
  rect1.shapeColor = "yellow";
  rect1.velocityX = 4;

  rect2 = createSprite(1000, 300, 50, 50);
  rect2.shapeColor = "yellow";
  rect2.velocityX = -4;

}

function draw() {
  background(0);

  if (isTouching(rect1, rect2)) {
    collide(rect1, rect2);

    rect1.shapeColor = "cyan";
    rect2.shapeColor = "cyan";
  }

  bounceOff(movingRect, fixedRect);

  drawSprites();
}