var car, wall
var speed, weight

function setup() {
  createCanvas(1600,400);
 car = createSprite(50, 200, 30, 30);
 wall = createSprite(1000, 300, 50, 300);
 speed = (55,90)
 weight = (400,1500)
 car.velocityX = speed
}

function draw() {
   background(0)
   if(wall.x-car.x <(car.width+wall.width)/2){
   car.velocityX = 0
   var deformation = 0.5* speed*speed*weight/22500
   }
   if(deformation<180&&deformation>80){
     car.shapeColor = ("yellow")
   }
   if(deformation>180){
    car.shapeColor = ("red")
  }
  if(deformation<80){
    car.shapeColor =("green")
  }


  drawSprites();
}