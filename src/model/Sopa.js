class Sopa{

    constructor(posX,posY,sizeX,sizeY){
        this.image = loadImage('./data/img/Sopa.png');
        this.imgHighlight = loadImage('./data/img/SopaHighlight.png');
        this.posX = posX;
        this.posY = posY;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }

    paint(){
        image(this.image,this.posX,this.posY,this.sizeX,this.sizeY);
        if(dist(mouseX,mouseY,this.posX,this.posY)<this.sizeX){
            image(this.imgHighlight,this.posX,this.posY,this.sizeX,this.sizeY);
            console.log("joder no se");
        }
    }
}