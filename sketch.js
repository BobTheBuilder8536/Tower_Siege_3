const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0;

var backgroundImg = "bgDay.jpg";

function setup() {
  createCanvas(1500,500);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height-5,width,10);
  ceiling = new Ground(width/2,5,width,10);
  leftWall = new Ground(width - 5,height/2,10,height);
  rightWall = new Ground(5,height/2,10,height);

  platform = new Ground(800,400,440,20);
  
  blocka1 = new Block(600,370,"pink.png");
  blocka2 = new Block(640,370,"pink.png");
  blocka3 = new Block(680,370,"pink.png");
  blocka4 = new Block(720,370,"pink.png");
  blocka5 = new Block(760,370,"pink.png");
  
  blocka6 = new Block(640,330,"pink.png");
  blocka7 = new Block(680,330,"pink.png");
  blocka8 = new Block(720,330,"pink.png");
  
  blocka9 = new Block(680,290,"pink.png");


  blockb1 = new Block(840,370,"pink.png");
  blockb2 = new Block(880,370,"pink.png");
  blockb3 = new Block(920,370,"pink.png");
  blockb4 = new Block(960,370,"pink.png");
  blockb5 = new Block(1000,370,"pink.png");

  blockb6 = new Block(880,330,"pink.png");
  blockb7 = new Block(920,330,"pink.png");
  blockb8 = new Block(960,330,"pink.png");

  blockb9 = new Block(920,290,"pink.png");


  blockc1 = new Block(720,290,"purple.png");
  blockc2 = new Block(760,290,"purple.png");
  blockc3 = new Block(800,290,"purple.png");
  blockc4 = new Block(840,290,"purple.png");
  blockc5 = new Block(880,290,"purple.png");

  blockc6 = new Block(760,330,"purple.png");
  blockc7 = new Block(800,330,"purple.png");
  blockc8 = new Block(840,330,"purple.png");

  blockc9 = new Block(800,370,"purple.png");


  blockd1 = new Block(720,250,"pink.png");
  blockd2 = new Block(760,250,"pink.png");
  blockd3 = new Block(800,250,"pink.png");
  blockd4 = new Block(840,250,"pink.png");
  blockd5 = new Block(880,250,"pink.png");

  blockd6 = new Block(760,210,"pink.png");
  blockd7 = new Block(800,210,"pink.png");
  blockd8 = new Block(840,210,"pink.png");

  blockd9 = new Block(800,170,"pink.png");

  throwObj = new ThrowBlock(200,200);
  string = new String(throwObj.body,{x:200,y:200});

  backgroundImg = loadImage("bgDay.jpg")
}

function draw() {
  background(backgroundImg);
   
  Engine.update(engine);

  ground.display();
  ceiling.display();
  leftWall.display();
  rightWall.display();
  platform.display();

  blocka1.display();
  blocka2.display();
  blocka3.display();
  blocka4.display();
  blocka5.display();
  blocka6.display();
  blocka7.display();
  blocka8.display();
  blocka9.display();
  
  blockb1.display();
  blockb2.display();
  blockb3.display();
  blockb4.display();
  blockb5.display();
  blockb6.display();
  blockb7.display();
  blockb8.display();
  blockb9.display();

  blockc1.display();
  blockc2.display();
  blockc3.display();
  blockc4.display();
  blockc5.display();
  blockc6.display();
  blockc7.display();
  blockc8.display();
  blockc9.display();

  blockd1.display();
  blockd2.display();
  blockd3.display();
  blockd4.display();
  blockd5.display();
  blockd6.display();
  blockd7.display();
  blockd8.display();
  blockd9.display();



  blocka1.score();
  blocka2.score();
  blocka3.score();
  blocka4.score();
  blocka5.score();
  blocka6.score();
  blocka7.score();
  blocka8.score();
  blocka9.score();
  
  blockb1.score();
  blockb2.score();
  blockb3.score();
  blockb4.score();
  blockb5.score();
  blockb6.score();
  blockb7.score();
  blockb8.score();
  blockb9.score();

  blockc1.score();
  blockc2.score();
  blockc3.score();
  blockc4.score();
  blockc5.score();
  blockc6.score();
  blockc7.score();
  blockc8.score();
  blockc9.score();

  blockd1.score();
  blockd2.score();
  blockd3.score();
  blockd4.score();
  blockd5.score();
  blockd6.score();
  blockd7.score();
  blockd8.score();
  blockd9.score();

  throwObj.display();
  string.display();

  getBgImg();

  textSize(20);
  fill("white");
  strokeWeight(5);
  stroke("brown");
  text("Score : " + score, 1350 , 40);
}

function mouseDragged(){
  Matter.Body.setPosition(throwObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  string.fly();
}

async function getBgImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  var bg;

  if(hour>=0600 && hour<=1900){
      bg = "bgDay.jpg";
  }
  else{
      bg = "bgNight.jpg";
  }

  backgroundImg = loadImage(bg);
}