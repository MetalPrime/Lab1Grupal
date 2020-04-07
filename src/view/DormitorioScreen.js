class DormitorioScreen extends Screen{

    constructor(imgBackground){
        super(imgBackground);
        this.imgBackground = imgBackground;
        this.imgBackground = loadImage('./data/img/DORMITORIO.jpg');

    }

    paint(){
        image(this.imgBackground,this.posX,this.posY,this.sizeX,this.sizeY);
    }

    clicked(){

    }
}