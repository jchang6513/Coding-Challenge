var rd = [];

function setup() {
    cv = createCanvas(displayWidth,displayHeight);
    cv.parent('Matrix');

    for (var i=0; i<width; i+=15) {
        rd.push(new rainDrop(i));
    }
}

function draw() {
    background(0);
    for (var i=0; i<width/15; i++) {
        rd[i].update();
    }
}