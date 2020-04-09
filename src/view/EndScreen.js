class EndScreen extends Screen{

    constructor(imgBackground){
        super(imgBackground);
        this.imgBackground = imgBackground;
        this.imgBackground = loadImage('./data/img/Fin.jpg');
    }

    paint(){
        image(this.imgBackground,this.posX,this.posY,this.sizeX,this.sizeY);
    
    }

    clicked(){
        if(dist(mouseX,mouseY,725,420)<75){
            Logic.txt();
        }
    }
}