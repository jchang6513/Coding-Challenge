var clock;

function setup() {
    createCanvas(600,600);
    background(0);
    clock = new Clock();
}

function draw() {
    clock.update();
}