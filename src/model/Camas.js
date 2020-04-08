class Camas{

    constructor(image,imgLlena,imgDesordenada,posX,posY,sizeX,sizeY){
        this.image = image;
        this.imgLlena = imgLlena;
        this.imgDesordenada = imgDesordenada;
        this.posX = posX;
        this.posY = posY;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }

    paint(){
        image(this.image,this.posX,this.posY,this.sizeX,this.sizeY);
        
        image(this.imgLlena,this.posX,this.posY,this.sizeX,this.sizeY);
            
        image(this.imgDesordenada,this.posX,this.posY,this.sizeX,this.sizeY);
    }

}
