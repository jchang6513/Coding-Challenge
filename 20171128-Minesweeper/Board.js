function Board() {
    this.gameOn = true;
    this.gs = 40;
    this.xg = 30;
    this.yg = 16;
    this.mines = 20;
    this.flags = this.mines;
    this.grids = [];
    this.sticked = [];
    this.flipped = [];    
    this.createBoard();
    this.put();
//    this.show();
}

Board.prototype.createBoard = function() {
    createCanvas(this.xg*this.gs+1,(this.yg+4)*this.gs+1);
    background(255);
    for (var i=0; i<this.xg; i++) {
        this.grids[i] = [];
        this.sticked[i] = [];
        this.flipped[i] = [];        
        for (var j=0; j<this.yg; j++) {
            stroke(0);
            fill(255);
            rect(i*this.gs,j*this.gs+4*this.gs,this.gs,this.gs);
            this.grids[i][j] = 0;
            this.sticked[i][j] = false;
            this.flipped[i][j] = false;
        }
    }    
}

Board.prototype.put = function() {
    var mines = 0;
    var xr;
    var yr;
    
    while (mines<this.mines) {
        xr = floor(random(0,this.xg));
        yr = floor(random(0,this.yg));
        if (this.grids[xr][yr] !== -999) {
            this.grids[xr][yr] = -999
            for (var i=xr-1; i<xr+2; i++) {
                for (var j=yr-1; j<yr+2; j++) {                    
                    if (i>=0 && j>=0 && i<this.xg && j<this.yg) {
                        if (this.grids[i][j] !== -999) {
                             this.grids[i][j]++;
                        }
                    }
                }
            }         
            mines++;
        }
    }
}

Board.prototype.show = function() {
    for (var i=0; i<this.xg; i++) {
        for (var j=0; j<this.yg; j++) {            
            if (this.grids[i][j] === 0) {
                stroke(250);
                fill(100);                
                rect(i*this.gs,j*this.gs+4*this.gs,this.gs,this.gs);
            } else if (this.grids[i][j] === -999){
                noStroke();
                fill(255,0,0);                
                ellipse(i*this.gs+0.5*this.gs,j*this.gs+4*this.gs+0.5*this.gs,0.5*this.gs,0.5*this.gs);
            } else {
                noStroke();
                fill(0);
                textAlign(CENTER,CENTER);
                text(this.grids[i][j],i*this.gs+0.5*this.gs,j*this.gs+4*this.gs+0.5*this.gs);                
            }
            this.flipped[i][j] = true;
        }
    }    
}

Board.prototype.showMine = function(i,j) {
    if (!this.flipped[i][j]) {
        noStroke();
        fill(255,0,0);
        textSize(50);
        textAlign(CENTER,CENTER);    
        for (var i=0; i<this.xg; i++) {
            for (var j=0; j<this.yg; j++) {
                if (this.grids[i][j] === -999) {
                    text("*",i*this.gs+0.5*this.gs,j*this.gs+4*this.gs+0.9*this.gs);
                    this.flipped[i][j] = true      
                }                
            }
        }        
    }
    this.gameOn = false
}

Board.prototype.showNumber = function(i,j) {
    if (!this.flipped[i][j] && !this.sticked[i][j] && this.gameOn) {
        if (this.grids[i][j] === 0) {
            stroke(0);
            fill(200);                
            rect(i*this.gs,j*this.gs+4*this.gs,this.gs,this.gs);
            this.flipped[i][j] = true
            this.floodfill(i,j)
        } else {
            noStroke();
            fill(0);
            textSize(20);
            textAlign(CENTER,CENTER);
            text(this.grids[i][j],i*this.gs+0.5*this.gs,j*this.gs+4*this.gs+0.5*this.gs);
            this.flipped[i][j] = true
        }
    }
}

Board.prototype.floodfill = function(xi,yj) {
    for (var i=xi-1; i<xi+2; i++) {
        for (var j=yj-1; j<yj+2; j++) {                    
            if (i>=0 && j>=0 && i<this.xg && j<this.yg) {
//                console.log(i,j,this.grids[i][j]);
                if (this.grids[i][j] !== -999) {
                    this.showNumber(i,j);
                }
            }
        }
    }
}

Board.prototype.leftPressed = function(mx,my) {
    var i = floor(mx/this.gs);
    var j = floor((my-4*this.gs)/this.gs);
    if (!this.flipped[i][j] && !this.sticked[i][j]) {
        if (i<this.xg && j<this.yg) {
            if (this.grids[i][j] === -999){
                this.showMine(i,j);
            } else {
                this.showNumber(i,j);
            }        
        }    
    }
}

Board.prototype.rightPressed = function(mx,my) {
    var i = floor(mx/this.gs);
    var j = floor((my-4*this.gs)/this.gs);
    if (this.gameOn && !this.flipped[i][j]){
        if (!this.sticked[i][j]) {
            if (this.flags>0) {
                stroke(0);
                fill(0,0,200);       
        //            rect(i*this.gs,j*this.gs+4*this.gs,this.gs,this.gs);
                triangle(i*this.gs+0.25*this.gs,j*this.gs+4*this.gs+0.70*this.gs
                        ,i*this.gs+0.5*this.gs,j*this.gs+4*this.gs+0.25*this.gs
                        ,i*this.gs+0.75*this.gs,j*this.gs+4*this.gs+0.70*this.gs)
                this.sticked[i][j] = true;
                this.flags--;
                if (this.grids[i][j] === -999) {
                    this.mines--;
                }
            }
        } else {
            stroke(0);
            fill(255);                
            rect(i*this.gs,j*this.gs+4*this.gs,this.gs,this.gs);
            this.sticked[i][j] = false;
            this.flags++;
            if (this.grids[i][j] === -999) {
                this.mines++;
            }                
        }    
    }
}

Board.prototype.getStatus = function() {
    return this.gameOn;
}

Board.prototype.checkStatus = function() {
    var total = 0;
    for (var i=0; i<this.xg; i++) {
        for (var j=0; j<this.yg; j++) {
            if (this.flipped[i][j] === true) {
                total++;
            }
            if (this.sticked[i][j] === true) {
                total++;
            }            
        }
    }
    
    if (total === this.xg*this.yg) {
        this.gameOn = false;
    }
}