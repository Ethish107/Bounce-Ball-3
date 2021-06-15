class Form{
  constructor(){
    this.name = createInput("Enter your name");
    this.button = createButton("Submit");
  }
  
   display(){
     this.name.position(150,200);
     this.button.position(200,400);
     
     this.button.mousePressed(()=>{
       gameState = PLAY;
     });

   }

}