var atmo;
var img;
var raind;
var dust;
var noi;
var co2;

function setup() {
    cv = createCanvas(windowWidth,windowHeight);
    cv.parent('weather');
    background(255);    
    img = loadImage("sun.png");  
    raind = loadImage("raindrop-close-up.png");  
    dust = loadImage("icon.png");
    noi = loadImage("megaphone.png");
    co2 = loadImage("co2.png");    
}

function draw() {
    loadJSON('data.json', drawWeather);
    loadJSON('pm25.json', drawPM25);
}

function drawWeather(data) {

    var oTemp = data['body']['modules'][0]['dashboard_data']['Temperature'];
    var oMTemp = data['body']['modules'][0]['dashboard_data']['max_temp'];
    var omTemp = data['body']['modules'][0]['dashboard_data']['min_temp'];
    var oHum = data['body']['modules'][0]['dashboard_data']['Humidity'];
    var oPr = data['body']['devices'][0]['dashboard_data']['Pressure'];

    var iTemp = data['body']['devices'][0]['dashboard_data']['Temperature'];
    var iMTemp = data['body']['devices'][0]['dashboard_data']['max_temp'];
    var imTemp = data['body']['devices'][0]['dashboard_data']['min_temp'];
    var iHum = data['body']['devices'][0]['dashboard_data']['Humidity'];
    var iCO2 = data['body']['devices'][0]['dashboard_data']['CO2'];
    var iNoi = data['body']['devices'][0]['dashboard_data']['Noise'];

    colorMode(RGB)
    if (hour()>12) {
        fill(0, 0, 50);        
    } else {
        fill(0, 0, 200);
    }
    rect(0, 0, 0.5*width, 0.6*height);

    if (hour()>12) {
        fill(0, 0, 40);
    } else {
        fill(0, 0, 210);
    }
    rect(0, 0.6*height, width, 0.4*height);
    
    image(img,0.08*width,0.13*height,0.08*width,0.08*width)
    fill(255); // use the humidity value to set the alpha
    textSize(150);    
    textAlign(LEFT,TOP);
    text(oTemp,0.2*width,0.13*height);    
    
    textSize(30);
    text('o',0.36*width,0.13*height);
    text(oMTemp,0.4*width,0.15*height);    
    textAlign(LEFT,BOTTOM);
    text(omTemp,0.4*width,0.265*height);    
    
    textSize(15);
    textAlign(LEFT,TOP);
    text('o',0.432*width,0.14*height);
    text('o',0.432*width,0.225*height);
    
    textSize(40);
    textAlign(LEFT,TOP);
    text(oPr,0.08*width,0.43*height);
    textSize(20);
    text(' mbar',0.15*width,0.43*height);
    
    image(raind,0.24*width,0.43*height,40,40);
    textSize(40);
    text(oHum,0.265*width,0.43*height);
    textSize(20);
    text(' %',0.288*width,0.43*height);
    
    
    
    
    fill(0);
    
    textSize(150);    
    textAlign(LEFT,TOP);
    text(iTemp,0.55*width,0.13*height);    
    
    textSize(30);
    text('o',0.71*width,0.13*height);
    text(iMTemp,0.75*width,0.15*height);    
    textAlign(LEFT,BOTTOM);
    text(imTemp,0.75*width,0.265*height);    
    
    textSize(15);
    textAlign(LEFT,TOP);
    text('o',0.782*width,0.14*height);
    text('o',0.782*width,0.225*height);
        
    textSize(40);
    image(noi,0.55*width,0.43*height,40,40);
    text(iNoi,0.575*width,0.43*height);
    textSize(20);
    text(' db',0.598*width,0.43*height);
    
    textSize(40);
    image(raind,0.7*width,0.43*height,40,40);
    text(iHum,0.725*width,0.43*height);
    textSize(20);
    text(' %',0.748*width,0.43*height);
    
    textSize(40);
    textAlign(LEFT,TOP);
    image(co2,0.835*width,0.43*height,40,40);
    text(iCO2,0.865*width,0.43*height);
    textSize(20);
    text(' ppm',0.9*width,0.43*height);
    
    colorMode(HSB)
    fill(map(iCO2,400,1000,135,0),100,100);
    noStroke();
    ellipse(0.89*width, 0.21*height, 180, 180);
     
}

function drawPM25(data){
    colorMode(RGB)
    fill(255);
    textSize(40);
    noStroke();
    image(dust,0.375*width,0.43*height,40,40);
    text(data['feeds'][0]['LASS4U']['s_d0'],0.4*width,0.43*height);
    textSize(20);
    text('µg/m³',0.43*width,0.43*height)
}