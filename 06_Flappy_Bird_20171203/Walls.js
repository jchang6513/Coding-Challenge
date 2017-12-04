function Walls() {
    this.H = 58;
    this.W = 36;
    this.pos1 = createVector(1.5*width,floor(random(2*this.H,height-2*this.H)));
    this.pos2 = createVector(2*width,floor(random(2*this.H,height-2*this.H)));
    this.vec = createVector(-2,0);
    this.fL = 0;
}

Walls.prototype.update = function() {
    
    fill(0,200,0)
    strokeWeight(1);
    rect(this.pos1.x, 0,                  this.W, this.pos1.y-this.H);
    rect(this.pos1.x, this.pos1.y+this.H, this.W, height);
    rect(this.pos2.x, 0,                  this.W, this.pos2.y-this.H);
    rect(this.pos2.x, this.pos2.y+this.H, this.W, height);

//    fill(255)
    for (var i=this.fL; i<=width+40; i+=40) {
        rect(i, height-21, 40, 20);
    }
    
    if (this.pos1.x+this.W < 0) {
        this.pos1 = this.pos2;
        this.pos2 = createVector(width,floor(random(2*this.H,height-2*this.H)));
    }
    
    if (bird.status>=0) {
        if (this.fL>-38) {
            this.fL += this.vec.x;
        } else {
            this.fL = 0;
        }
        this.pos1.add(this.vec);
        this.pos2.add(this.vec);
    }
}