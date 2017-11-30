function Bar(bound) {
    this.bound = bound;
    this.Y = height/2;
    this.VY = 0;
}

Bar.prototype.getY = function() {
    return this.Y;
}

Bar.prototype.show = function() {
    this.update();
    fill(255);
    stroke(10);
    if (this.bound === 'R') {        
        rect(width-20,this.Y-75,15,150);
    }
    
    if (this.bound === 'L') {
        rect(5,this.Y-75,15,150);
    }    
}

Bar.prototype.update = function() {
    this.Y = this.Y+this.VY;
    if (this.Y < 0) this.Y = 0
    if (this.Y > height) this.Y = height
    
    this.VY = 0;
}

Bar.prototype.up = function() {
    this.VY = -5;
}

Bar.prototype.down = function() {
    this.VY = 5;
}

Bar.prototype.getVY = function() {
    return this.VY;
}

Bar.prototype.getY = function() {
    return this.Y;
}