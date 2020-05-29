var wall;
var thickness,bullet;
var speed,weight;
var wallLeftEdge;

function setup() {
  createCanvas(1200,400);

  speed = random(223,321)

  weight = random(30,52)

  thickness = random(23,83)

  bullet= createSprite(50,200,50,50);

  wall = createSprite(1100,200,thickness,height/2)

  bullet.velocityX = speed;

 
}

function draw() {
  background(0);
  
  if(hasCollided(bullet,wall) )
  {
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(deformation>10)
    {
      wall.shapeColor = color(255,0,0);
    }


    if(deformation<10)
     {
       wall.shapeColor = color(0,255,0);
     }
  } 
  
  drawSprites();
}

function hasCollided(Lbullet,Lwall){
  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}

