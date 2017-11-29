var stars = [];
var star;
function setup() {
    createCanvas(600,600);
    background(0);
    for (var i=0; i<150; i++) {
        star = new Star();
        stars.push(star);
        stroke(255);
        strokeWeight(0.5);
    }
}

function draw() {
    background(0);
    for (var i=0; i<stars.length; i++) {
        stars[i].update();
    }  
}