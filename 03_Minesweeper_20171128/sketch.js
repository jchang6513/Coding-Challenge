var board;
var button;
var shr;
var smin;
var ssec;
var secs;
var sqFont;

function preload() {
    sqFont = loadFont('Square.ttf');
}

function setup() {
    textFont(sqFont);
    board = new Board();
    button = createButton('^_^');
    button.style("font-size", "10px","font-style", "bold");
    button.position(width/2-0.5*board.gs,1.7*board.gs);
    button.size(board.gs,board.gs);
    button.mousePressed(restart);
    shr = hour();
    smin = minute();
    ssec = second();
}

function draw() {
    board.checkStatus()
    noStroke;
    fill(255);    
    rect(0,0,width,4*board.gs)
    noStroke();
    fill(0);               
    textAlign(LEFT,CENTER);
    textSize(150);   
    text("*",0,2.8*board.gs);
    textSize(40);   
    text(board.flags,55,2*board.gs);
    
    if (!board.getStatus()) {
        button.elt.innerHTML = '>_<';
        textAlign(RIGHT,CENTER);
        text(secs+' sec.',width,2*board.gs);
    } else {
        secs = 3600*(hour()-shr)+60*(minute()-smin)+(second()-ssec)        
        textAlign(RIGHT,CENTER);
        text(secs+' sec.',width,2*board.gs);
    }
}

function restart() {
    board = new Board();
    button.elt.innerHTML = '^_^';
    shr = hour();
    smin = minute();
    ssec = second();    
}

function mousePressed() {
    if (mouseButton === LEFT) {
//        console.log('L',mouseX, mouseY,width,height)
        board.leftPressed(mouseX,mouseY);
    }
    
    if (mouseButton === RIGHT) {
//        console.log('R',mouseX, mouseY,width,height)
        board.rightPressed(mouseX,mouseY);
    }
}