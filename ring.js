class Ring
{
  constructor(x,y){
    var options={
      isStatic:true,
      restirution:0,
      friction:2
    }

    this.x = x;
    this.y = y;
    this.L1 = loadImage("images/Lring.png");
    this.R2 = loadImage("images/Rring.png")
    this.body = Bodies.rectangle(x,y+20,7,4,options);
    this.down = Bodies.rectangle(x,y-25,7,4,options);
    World.add(world,this.body);
    World.add(world,this.down);
    
    

  }

  display(){

    push()
    translate(this.x,this.y);
    fill("blue");
    rectMode(CENTER);
    imageMode(CENTER);
    image(this.L1,0-5,0,10,50);

    
    pop()
  }

  display2(){

    push()
    translate(this.x,this.y);
    fill("blue");
    rectMode(CENTER);
    imageMode(CENTER);
    image(this.R2,0+5,0,10,50);
    
    pop()
  }

}