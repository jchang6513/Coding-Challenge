var img

function setup() {
    createCanvas(500,500)
    img = loadImage('black.jpg');
}

function draw() {
    rotate(PI/3);
    image(img, 0, 0, 500, 500);
    fill(0);
    rect(-26, -26, 52, 52);
}