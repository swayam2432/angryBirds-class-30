class Bird extends BaseClass {
  constructor(x,y){
    var options = {
      density:2
    }
    super(x,y,50,50,options);
    this.image = loadImage("bird.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
