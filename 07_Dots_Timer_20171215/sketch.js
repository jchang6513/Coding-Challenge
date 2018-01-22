var font

function preload() {
    font = loadFont('Arial');
}

function setup() {
    createCanvas(600,600);
    background(0);
    var pts = font.textToPoints('12:12',100,200);
    point(pts.x,pts.y);
}

function draw() {
    background(0);
}