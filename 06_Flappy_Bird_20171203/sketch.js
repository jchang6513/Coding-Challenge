var bird;
var walls;

function setup() {
    createCanvas(400,600);
    background(0);
    bird = new Bird();
    walls = new Walls();
}

function draw() {
    background(0);
    walls.update(bird.getStatus());
    bird.update(walls);
}

function keyPressed() {
    bird.flap();
}