function Walls() {
    this.H = 70;
    this.W = 40;
    this.pos1 = createVector(1.5*width,floor(random(2*this.H,height-2*this.H)));
    this.pos2 = createVector(2*width,floor(random(2*this.H,height-2*this.H)));
    this.vec = createVector(-1,0);
}

Walls.prototype.update = function(status) {
    
    fill(0,200,0)
    rect(this.pos1.x, 0,                  this.W, this.pos1.y-this.H)
    rect(this.pos1.x, this.pos1.y+this.H, this.W, height)
    rect(this.pos2.x, 0,                  this.W, this.pos2.y-this.H)
    rect(this.pos2.x, this.pos2.y+this.H, this.W, height)    

    if (this.pos1.x+this.W < 0) {
        this.pos1 = this.pos2;
        this.pos2 = createVector(width,floor(random(2*this.H,height-2*this.H)));
    }
    
    if (status>=0) {
        this.pos1.add(this.vec);
        this.pos2.add(this.vec);
    }
}