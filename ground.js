class Ground
{
  constructor(x,y,w,h)
  {
    var options={
      isStatic:true,
      restitution:0,
      friction:1
    }
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);
  }
  display(){
  var posG = this.body.position;
  push()
  translate(posG.x,posG.y);

  fill(112, 59, 15);
  rectMode(CENTER);
  strokeWeight(0);
  rect(0,0,this.w,this.h);
  pop();
}
}