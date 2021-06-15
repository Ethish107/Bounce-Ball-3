class Cracker
{
  constructor(x,y,w,h){
    var options={
      isStatic:true,
      restitution:0,
      friction:1
    }
    this.w =w;
    this.h = h;
  
    this.image = loadImage("images/cracker.png");
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
  noStroke();
  image(this.image,0,0,this.w,this.h);
  pop();
  }
}