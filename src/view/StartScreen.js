class StartScreen extends Screen {

    
    constructor(imgBackground){
        super(imgBackground);
        this.imgBackground = imgBackground;
        this.imgBackground = loadImage('./data/img/TITLE.jpg');
        
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