class Ball
{
  constructor(x,y,r)
  {

  var options={
    isStatic:false,
    restitution:0,
    friction:1
  }

   this.x = x;
   this.y = y;
   this.r = r;
   this.image = loadImage("images/ball.png")
   this.body = Bodies.circle(x,y,r,options);
   World.add(world,this.body);
  }

  display(){
  var pos = this.body.position;
  //var angle = 0;

  push()
  translate(pos.x,pos.y);
 
  rotate(angle);
  fill(0,98,255);
  imageMode(CENTER);
  ellipseMode(CENTER);
  strokeWeight(0);
  image(this.image,0,0,this.r*2,this.r*2);

  pop();

  }
}