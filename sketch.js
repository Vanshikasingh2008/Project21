var bullet,wall,w;
  var speed,weight,damage,thickness;

  function setup() {
    createCanvas(1600,400);
    bullet = createSprite(50, 200, 50, 30);
    bullet.shapeColor = "white";
    wall = createSprite(1200,200,thickness,height/2);
    wall.shapeColor = rgb(80,80,80);
    //wall.visible = false;

    w = createSprite(1475,200,10,200);
    w.visible = false;

    speed = random(223,321);
    weight = random(30,52);
    thickness = random(22,83);
  }

  function draw() {
    background(0);
    bullet.velocityX = speed;
    
    if(hasCollided(bullet,wall)){
    
        bullet.velocityX = 0;
        var damage = (0.5*weight*speed*speed) / (thickness*thickness*thickness);

        if(damage>10)
        {
            wall.shapeColor = color(255,0,0);
        }

        if(damage<10)
        {
            wall.shapeColor = color(0,255,0);
        }
    }

    drawSprites();
}

function hasCollided(lbullet,lwall){
   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x;
   if(bulletRightEdge >= wallLeftEdge){
       return true;
   }else{
    return false;
   }
   
}  
