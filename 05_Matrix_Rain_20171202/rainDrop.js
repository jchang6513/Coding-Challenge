function rainDrop(xpos) {
    this.fontSize = 15;
    this.pos = createVector(xpos,floor(random(-height/2,height/2)));
    this.len = floor(random(height/this.fontSize/1.5,2*height/this.fontSize));
    this.top = 0;
    this.btm = 0;
    this.str = [];
    
    for (var i=0; i<this.len; i++) {
        this.str.push(char(floor(random(200))));
    }
}

rainDrop.prototype.update = function() {
    if (this.btm<this.len) {
        this.btm++;
    } else {
        this.top++;
    }
    
    if (this.top === this.btm) {
        this.restart();    
    }
    
    this.drop();
}

rainDrop.prototype.drop = function() {
    textSize(this.fontSize);
    noStroke();
    fill(0,255,0);
    for (var i=this.top; i<this.btm; i++) {
        if (i === this.btm-1) {
            fill(255);
        }
        text(this.str[i],this.pos.x,this.pos.y+i*this.fontSize);
    }
}

rainDrop.prototype.restart = function() {
    this.pos.y = floor(random(-height/2,height/2));
    this.len = floor(random(height/this.fontSize/1.5,2*height/this.fontSize));
    this.top = 0;
    this.btm = 0;
    this.str = [];
    
    for (var i=0; i<this.len; i++) {
        this.str.push(char(floor(random(200))));
    }    
}