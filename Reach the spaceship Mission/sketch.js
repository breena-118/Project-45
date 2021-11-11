var astronaut, astronautImg;
var bg, bgImg;
var obstacle, obstacleImg;
var spaceship, spaceshipImg;
var star, starImg;



//var vx = 0;
//var g = 0.05;
//var vy = 0;

function preload()
{
  astronautImg = loadImage("./Assets/Astronaut.png");
  bgImg = loadImage("./Assets/bg.png");
  obstacleImg = loadImage("./Assets/obstacle.png");
  spaceshipImg = loadImage("./Assets/spaceship.png");
  starImg = loadImage("./Assets/star.png");
}

function setup() {
  createCanvas(1000,700);
  
  //frameRate(80);

  astronaut = createSprite(100,640,30,30);
  astronaut.addImage(astronautImg);
  astronaut.scale = 0.2; 

  obstacle = createSprite(100,100,30,30);
  obstacle.addImage(obstacleImg);
  obstacle.scale = 0.05;

  spaceship = createSprite(850,50,30,30);
  spaceship.addImage(spaceshipImg);
  spaceship.scale = 0.1;

  star = createSprite(100,50,30,30);
  star.addImage(starImg);
  star.scale = 0.05;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bgImg,0,0);
  //push()
  //fill(255);
  //text("Vertical Velocity: "+round(vy),800,75);
  //pop();

  //fall down
  //vy +=g;
  //lander.position.y+=vy;

  if (keyIsDown(UP_ARROW)) {
    //this.astronautMoving = true;
    astronaut.positionY += 10;
    //player.update();
  }

  /*if (keyIsDown(DOWN_ARROW)) {
    //this.astronautMoving = true;
    astronaut.positionY -= 10;
    //player.update();
  }

  if (keyIsDown(LEFT_ARROW)) {
    //this.leftKeyActive = true;
    astronaut.positionX -= 5;
    //player.update();
  }

  if (keyIsDown(RIGHT_ARROW)) {
    //this.leftKeyActive = false;
    astronaut.positionX += 5;
    //player.update();
  }*/

  drawSprites();
}


