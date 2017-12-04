function Walls() {
    this.H = 56;
    this.W = 40;
    this.pos1 = createVector(1.5*width,floor(random(2*this.H,height-2*this.H)));
    this.pos2 = createVector(2*width,floor(random(2*this.H,height-2*this.H)));
    this.vec = createVector(-2,0);
    this.fL = 0;
}

Walls.prototype.update = function() {
    
    fill(0,180,0)
    strokeWeight(1);
    rect(this.pos1.x,   0,                     this.W, this.pos1.y-this.H);
    rect(this.pos1.x-3, this.pos1.y-this.H-20, this.W+6, 20);
    rect(this.pos1.x,   this.pos1.y+this.H,    this.W, height);
    rect(this.pos1.x-3, this.pos1.y+this.H,    this.W+6, 20);
    
    rect(this.pos2.x,   0,                     this.W, this.pos2.y-this.H);
    rect(this.pos2.x-3, this.pos2.y-this.H-20, this.W+6, 20);
    rect(this.pos2.x,   this.pos2.y+this.H,    this.W, height);
    rect(this.pos2.x-3, this.pos2.y+this.H,    this.W+6, 20);

//    fill(255)    
    for (var i=this.fL; i<=width+this.W; i+=this.W) {
        rect(i, height-21, this.W, 20);
    }
    
    if (this.pos1.x+this.W < 0) {
        this.pos1 = this.pos2;
        this.pos2 = createVector(width,floor(random(2*this.H,height-2*this.H)));
    }
    
    if (bird.status>=0) {
        if (this.fL>-(this.W-2)) {
            this.fL += this.vec.x;
        } else {
            this.fL = 0;
        }
        this.pos1.add(this.vec);
        this.pos2.add(this.vec);
    }
}