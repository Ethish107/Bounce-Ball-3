class Brick
{
  constructor(x,y,w,h)
  {
   var options={isStatic:true,
             restitution:0,
             friction:1}
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = loadImage("images/br.jpg")         
    this.body = Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);
  }

  display()
  {
   

   push()
   var posB = this.body.position;
   translate(posB.x,posB.y);
   
   //fill("blue");
   rectMode(CENTER);
   imageMode(CENTER);

   strokeWeight(0);
   image(this.image,0,0,this.w,this.h);
   pop()
  }
}