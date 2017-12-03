function Bird() {
    this.pos = createVector(width/4,height/2);
    this.status = -1;
}

Bird.prototype.update = function(walls) {
    this.checLift(walls);
}

Bird.prototype.flap = function() {
    
}