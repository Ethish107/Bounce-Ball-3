class Block
{
  constructor(x,y){
  var options={
    isStatic:true,
    restitution:0,
    friction:0.5
  }
  this.w = 100;
  this.h = 50;

  this.image = loadImage("images/brick2.png");
  this.body = Bodies.rectangle(x,y,this.w,this.h,options);
  World.add(world,this.body);
}
display()
{
  var posB = this.body.position;
push()

translate(posB.x,posB.y);
rectMode(CENTER);
imageMode(CENTER);
strokeWeight(0);
image(this.image,0,0,this.w,this.h);
pop();
}
}