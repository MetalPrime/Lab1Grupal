class Sopa{

    constructor(posX,posY,sizeX,sizeY){
        this.image = loadImage('./data/img/Sopa.png');
        this.imgHighlight = loadImage('./data/img/SopaHighlight.png');
        this.imgVacia = loadImage('./data/img/SopaVacia.png');
        this.posX = posX;
        this.posY = posY;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.llena = true;
    }

    paint(){
        if(this.llena == true){
            image(this.image,this.posX,this.posY,this.sizeX,this.sizeY);
         } else{
            image(this.imgVacia,this.posX,this.posY,this.sizeX,this.sizeY);
         }
        
        if(dist(mouseX,mouseY,this.posX,this.posY)<this.sizeX && this.llena==true){
            image(this.imgHighlight,this.posX,this.posY,this.sizeX,this.sizeY);
            console.log("joder no se");
        }
    }

    clicked(){
        if(dist(mouseX,mouseY,this.posX,this.posY)<this.sizeX){
           this.llena = false;
        }
    }

    todasLLenas(){
        if(this.llena==false){
            return true;
        }
    }

}