class StartScreen {

    constructor(){
        this.imgBackground = loadImage('./data/img/TITLE.jpg');
        this.posX = 0;
        this.posY = 0;
        this.sizeX = 1024;
        this.sizeY = 600;
    }

    paint(){
        image(this.imgBackground,this.posX,this.posY,this.sizeX,this.sizeY);
    }

    clicked(){
        if(dist(mouseX,mouseY,725,420)<80){
            print("Todo en orden");
            return true;
        }
    }
}