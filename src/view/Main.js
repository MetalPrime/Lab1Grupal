var startS;
var screen;

function setup(){
    createCanvas(1024,600);
    startS = new StartScreen();
}

function draw(){
    background(180);
    startS.paint();
}

function mouseClicked(){

}