function Star() {
    this.appear();
}

Star.prototype.update = function() {    
    this.pos.add(this.vec);
    this.vec.mult(1.05);
    strokeWeight(map(mag(this.pos.x-width/2,this.pos.y-height/2),0,200,0,3));
    point(this.pos.x,this.pos.y)
    this.back();
}

Star.prototype.back = function() {
    if (this.pos.x>width || this.pos.x<0 || this.pos.y>height || this.pos.y<0 ) {
        this.appear();
    }
}

Star.prototype.appear = function() {
    this.vec = createVector(random(-10,10),random(-10,10));
    this.pos = createVector(width/2,height/2);
    this.pos.x = this.pos.x+this.vec.x*20;
    this.pos.y = this.pos.y+this.vec.y*20;
    if (this.pos.x)
    this.ox = this.pos.x;
    this.oy = this.pos.y;
}

