function Bird() {
    this.body = 20;
    this.pos = createVector(width/4,height/2);
    this.status = -1;
    this.score = 0;
}

Bird.prototype.update = function() {
    
    if (this.status>0) {
        this.flapping();
        this.showScore();
    } else if (this.status === 0) {
        this.falling();
        this.showScore();
    } else if (this.status === -1) {
        this.showReady();
    } else if (this.status === -2) {
        this.showBillboard();
    } else if (this.status === -3) {
        this.dead();
        this.showScore();
    } else {
        this.status++;
    }
    
    if (this.status>0 || this.status === -1) {
        fill(0);
        rect(this.pos.x,this.pos.y,this.body,this.body, 10, 0, 10, 10);
    } else {
        fill(0);
        rect(this.pos.x,this.pos.y,this.body,this.body, 10, 10, 0, 10);
    }

    this.checkLife(walls);
    this.scored(walls);
}

Bird.prototype.showReady = function() {
    fill(255);
    stroke(0);
    strokeWeight(4);
    textAlign(CENTER,CENTER)
    textSize(40);
    text('PRESS SPACE',width/2,height/3)
}

Bird.prototype.showScore = function() {
    fill(255);
    stroke(0);
    strokeWeight(4);
    textAlign(CENTER,CENTER)
    textSize(40);
    text(this.score,width/2,height/4)
}

Bird.prototype.showBillboard = function() {
    fill(255);
    stroke(0);
    strokeWeight(4);
    textAlign(CENTER,CENTER)
    textSize(40);
    text('GAME OVER',width/2,height/3)
    textSize(20);
    text('SCORE',width/2,height/3+50)
    text(this.score,width/2,height/3+80)
    text('TOP',width/2,height/3+115)
    text(topScore,width/2,height/3+150)
}


Bird.prototype.flap = function() {
    if (this.status === -2) {
        setup();
    }
    if (this.status > -3) {
        this.status = 15;
    }
}

Bird.prototype.flapping = function() {
    if (this.status>5) {
        var vec = createVector(0,-this.status+5);
        this.pos.add(vec);
    }
    this.status--;
}

Bird.prototype.falling = function() {
    var vec = createVector(0,7);
    this.pos.add(vec);
}

Bird.prototype.dead = function() {
    var vec = createVector(0,15);
    this.pos.add(vec);
}

Bird.prototype.checkLife = function() {
    if (walls.pos1.x <= this.pos.x+this.body && walls.pos1.x+walls.W >= this.pos.x) {
        if (this.pos.y <= walls.pos1.y-walls.H || this.pos.y+this.body >= walls.pos1.y+walls.H) {
            if (this.status >= 0) {
                this.status = -13;
            }            
        }
    }
    
    if (this.pos.y+this.body >= height-23) {
        this.pos.y = height-23-this.body;
        this.status = -2;
    }
}

Bird.prototype.scored = function() {   
    if (walls.pos1.x+walls.W == this.pos.x && this.status>=0) {
        this.score++;
        if (topScore < this.score) {
            topScore = this.score;
        }
    }
}

Bird.prototype.getStatus = function() {
    return this.status;
}

Bird.prototype.getScore = function() {
    return this.score;
}