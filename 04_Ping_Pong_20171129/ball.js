function Ball() {
    this.pos = createVector(width/2,height/2);    
    var dir = random(-1,1)
    dir = dir/abs(dir);
    var theta = random(-PI/4,PI/4);
    this.vec = createVector(dir*2.5*cos(theta),2.5*sin(theta));
}

Ball.prototype.update = function(L_Y,L_VY,R_Y,R_VY) {
    this.pos.add(this.vec);    
    if (this.pos.y < 0 || this.pos.y > height) {
        this.reflectY();
    }
    
    if (this.pos.x < 20 && abs(this.pos.y-L_Y)<75) {
        this.reflectX(L_VY);
    } else if (this.pos.x < 5){
        setup();
    }

    if (this.pos.x > width-20 && abs(this.pos.y-R_Y)<75) {
        this.reflectX(R_VY);
    } else if (this.pos.x > width-5){
        setup();
    }       
}

Ball.prototype.show = function() {
    fill(255);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.pos.x,this.pos.y,20,20);
}

Ball.prototype.reflectY = function() {
    this.vec.y = -this.vec.y;
    this.pos.add(this.vec);
}

Ball.prototype.reflectX = function(VY) {
    this.vec.x = -this.vec.x;
    this.vec.y = 1.1*this.vec.y-0.5*VY;
    this.pos.add(this.vec);
}