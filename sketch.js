var car,wall,thickness;
var bullet,speed,weight;

function setup() {
  speed = random(223,321)
  weight = random(30,52)
  thickness=random(22,83)
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall=createSprite(1200, 200, thickness, height/2);
}

function draw() {
  background("white");
  if (hasCollided(bullet, wall)) {
    bullet.velocity=0;
    var damage=0.5 * weight * speed* speed/thickness * thickness * thickness);
    
    if (damage>10) {
      wall.shapeColor=color(255,0,0);
    }

    if (damage<10) {
      wall.shapeColor=color(0,255,0);
    }
  }
  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2) {
    car.shapeColor = "black";
    wall.shapeColor = "black";
    }
else {
    car.shapeColor = "black";
    wall.shapeColor = "black";
}
if (wall.x-car.x < (car.width+wall.width)/2) {
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22500;
 if (deformation>180) {
    car.shapeColor=color(255,0,0);
  }

  if (deformation<180 && deformation>100) {
    car.shapeColor=color(230,230,0);
  }

  if (deformation<100) {
  
    car.shapeColor=color(0,255,0);
  }
}
  drawSprites();
}