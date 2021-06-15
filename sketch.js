
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,angle = 0,gameState,PLAY=1,END=2; 
var collision,collision2;
var imageTop,imageBack,imageDown;
var ring;
var backImg;
var fireanimation,fire,stairs,stairsImg;
var cracker1,cracker2,cracker3,cracker4,cracker5,cracker6,cracker7,cracker8;
var bricks=[],cracker=[cracker1,cracker2,cracker3,cracker4,cracker5,cracker6,cracker7,cracker8];
var databse,formObject;
var crackerGroup,score;

function preload(){
crackerImg = loadImage("images/cracker.png");
}

function setup() {
  createCanvas(1000,700);

  database = firebase.database();

  engine = Engine.create();
  world = engine.world;

  crackerGroup = new Group();

  fireAnimation = loadAnimation("images/fire3.png","images/fire2.png","images/fire1.png");
  ball = new Ball(200,400,20); 
  //imageBack = new Brick(-100,250,500,500)
  //imageDown = new Brick(2100,620,5000,300);
  //imageTop = new Brick(2100,80,5000,220);
  ring = new Ring(920,440);
  fire = createSprite(1700,370);
  fire.addAnimation("img",fireAnimation);
  fire.scale = 0.5;

  //formObject = new Form();

//   cracker1 = new Cracker(560,250,30,50);
  //  cracker2 = new Cracker(590,500,30,50);
  //  cracker3 = new Cracker(600,400,30,50);
  //  cracker4 = new Cracker(660,600,30,50);
  //  cracker5 = new Cracker(770,450,30,50);
  //  cracker6 = new Cracker(870,550,30,50);
  //  cracker7 = new Cracker(970,450,30,50);
  //  cracker8 = new Cracker(1070,350,30,50);
  // cracker2 = new Cracker(600,250,30,50);
  //crackerGroup = new Group();
  
  for(var i = 250;i <550;i = i+100){
    bricks.push(new Block(i,350));
  }
  for(var i = 250;i <650;i = i+100){
    bricks.push(new Block(i,400));
  }
  for(var i = 250;i <750;i = i+100){
    bricks.push(new Block(i,450));
  }
  for(var i = 250;i <450;i = i+100){
    bricks.push(new Block(i,300));
  }
  for(var i = -350;i < 5000;i = i + 100){
    for(var j = 20;j<150;j = j + 50){
    bricks.push(new Block(i,j));
    }
  }

  for(var i=450;i<750;i=i+100){
    for(var j = i - 100;j<600;j=j+50){
      bricks.push(new Block(i,j));
    }
  }

  for(var i = -350;i < 5000;i = i + 100){
    for(var j = 500;j<700;j = j + 50){
    bricks.push(new Block(i,j));
    }
  }

  

  // for(var i = -350;i < 120;i = i + 100){
  //   for(var j = 150;j<480;j = j + 50){
  //   bricks.push(new Block(i,j));
  //   }
  // }
  
//   for(var i = 850;i<5000;i += 500){
//   cracker.push(new Obstacle(i,random(200,400),50,60));
//  // crackerGroup.add(cracker[i]);
//   }


  Engine.run(engine);
}

function draw() {
  background(255);

 //  collision =  Matter.SAT.collides(ball.body,cracker[0].body); 

  if(keyDown(RIGHT_ARROW)){
    Matter.Body.translate(ball.body,{x:+10,y:0});
    angle += 20;
  }
  if(keyDown(LEFT_ARROW)){
    Matter.Body.translate(ball.body,{x:-10,y:0});
    angle -= 20;
  }

  // if(collision.collided){
  //   cracker.
  // }
  camera.x = ball.body.position.x;



  Engine.update(engine);


  // imageDown.display();
  // imageBack.display();
 // imageTop.display();

  ring.display();
  ball.display();
  ring.display2();
 // cracker1.display();
 // formObject();
  // cracker2.display();
  // cracker3.display();
  // cracker4.display();
  // cracker5.display();
  // cracker6.display();
  // cracker7.display();
  // cracker8.display();
  //cracker2.display();
  for(var j = 0;j < bricks.length;j++){
    bricks[j].display();
  }
  // for(var j = 0;j < cracker.length;j++){
  //   cracker[j].display();
  // }
  // if(isTouching(ball.body,cracker[0])){
  //   console.log("game over");
  // }
  // for(var j = 0;j < cracker.length;j++){
  // if(cracker[j].x - 30 <= ball.x){
  //   console.log("gmaeover");
  // }
//}

createEdgeSprites();
  
  fill("black")
  text(mouseX + "  " + mouseY,ball.x + 200,ball.y - 200);

}

function keyPressed(){
  
  if(keyCode === UP_ARROW){
  //if(collision.collided){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-0.055});
  //}
  }
}

// function createCracker(){
//  // cracker[0].position.x = 500;
// for(var i = 0;i<8;i++){
//   cracker[i].position.x = cracker[i].position.x + 200;
//   cracker[i].position.y = Math.round(random(300,500));
// }
// }
function spawnCracker(){
  if(frameCount%250 === 0){
      cracker = createSprite(5000,random(200,400),50,60);
      crackerGroup.add(cracker);
      cracker.addImage(crackerImg);
      cracker.scale = 0.02;
      cracker.velocityX = -40;
      if(crackerGroup.x > ball.x + 500){
        cracker.velocityX = -2;
      }

  }
}
function crackerHit(ball,crackerGroup) {
  cracker.destroy();
  score = score + 5;
   
 }
