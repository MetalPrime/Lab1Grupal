let startS,houseS,comedorS,dormitorioS,endS;
let screen;
let logic;
let txtBase;

function preload() {
    txtBase = loadStrings('../data/txt/historiaRicitos.txt');
    Logic.preload();
}

function setup(){
    createCanvas(1024,600);
    startS = new StartScreen(this);
    houseS = new HouseOutScreen(this);
    comedorS = new ComedorScreen(this);
    dormitorioS = new DormitorioScreen(this);
    endS = new EndScreen(this);
    logic = new Logic();
    screen = 3;
    console.log(txtBase[0]);
}




function draw(){
    background(180);
    
    switch (screen){
        case 0:
            startS.paint();
            break;
        case 1:
            houseS.paint();
            break;
        case 2:
            comedorS.paint();
            break;
        case 3:
            dormitorioS.paint();
            break;
        case 4:
            endS.paint();
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
            comedorS.clicked();
            break;
        case 3:
            dormitorioS.clicked();
            break;
        case 4:
            break;

    }

}