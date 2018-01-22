function Netatmo() {
    this.data='';
}

Netatmo.prototype.update = function() {
    this.data = loadJSON('data.json');
    fill(255);        
}