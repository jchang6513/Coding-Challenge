function Clock() {
    this.hr = hour();
    this.min = minute();
    this.sec = second();
}

Clock.prototype.update = function() {
    
    this.hr = hour();
    this.min = minute();
    this.sec = second();
    
    if (this.hr>=12) {
        background(0);    
        fill(255);
    } else {
        background(255);
        fill(0);
    }
    
    noStroke();
    textSize(40);
    textStyle('Bold');    
    textAlign(CENTER);
    text(this.textClock(), width/2, height/2+10);

    var angles = this.arcClock();
    noFill();
    strokeWeight(10);    
    stroke(255,0,0);
    arc(width/2,height/2,400,400,-PI/2,angles[0]);
    stroke(0,255,0);
    arc(width/2,height/2,300,300,-PI/2,angles[1]);
    stroke(0,0,255);
    arc(width/2,height/2,200,200,-PI/2,angles[2]);
}

Clock.prototype.textClock = function() {
    var hr = this.hr;
    var min = this.min;
    var sec = this.sec;
    
    if (hr<10) {
        var textClock = "0"+hr+":";
    } else {
        var textClock = hr+":";
    }
    
    if (min<10) {
        textClock += "0"+min+":";
    } else {
        textClock += min+":";
    }
    
    if (sec<10) {
        textClock += "0"+sec;
    } else {
        textClock += sec;
    }
    
    return textClock;
}

Clock.prototype.arcClock = function() {
    var angles = [];
    
    var hr = this.hr%12;
    var min = this.min;
    
    if (this.sec===0) {
        var sec = 60;
    } else {
        var sec = this.sec;
    }
    
    
    angles[0] = hr*2*PI/12-PI/2+0.0000001;
    angles[1] = min*2*PI/60-PI/2+0.0000001;
    angles[2] = sec*2*PI/60-PI/2;
    
    return angles;
}