class Ground {
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.x=x;
      this.y=y;
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w=w;
      this.h=h;
      World.add(world, this.body);
    }
    display(){
      var groundPos=this.body.position;
      push()
      translate(groundPos=this.body.podition);
      rectMode(CENTER);
      fill(128,128,128)
      rect(0,0,this.w, this.h);
      pop();
      rect(pos.x, pos.y, this.w, this.w);
    }
  };