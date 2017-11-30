var img
var bar_L;
var bar_R;
var ball;

function setup() {
    createCanvas(800,500);
    bar_L = new Bar('L');
    bar_R = new Bar('R');
    ball = new Ball();
}

function draw() {
    background(0);      
    
    bar_L.show();
    bar_R.show();
    
    if (keyIsDown(81)) {
        bar_L.up();
    }
    
    if (keyIsDown(65)) {
        bar_L.down();
    }
    
    if (keyIsDown(79)) {
        bar_R.up();
    }
    
    if (keyIsDown(76)) {
        bar_R.down();
    }  
    
    ball.update(bar_L.getY(),bar_L.getVY(),bar_R.getY(),bar_R.getVY());
    ball.show();
}
