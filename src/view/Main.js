var startS;
var screen;

function setup(){
    createCanvas(1024,600);
    startS = new StartScreen(this);
    screen = 0;

}

function draw(){
    background(180);
    
    switch (screen){
        case 0:
            startS.paint();

            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;

    }

    fill(0);
    textSize(32);
    text(mouseX,mouseX,mouseY);
    text(mouseY,mouseX+60,mouseY);


}

function mouseClicked(){

    switch (screen){
        case 0:
            if(startS.clicked()){
                print("tambien funciona");
                screen=1;
            };
            break;
        case 1:

            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;

    }

}