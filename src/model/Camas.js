class Camas{

    constructor(image,imgLlena,imgDesordenada,posX,posY,sizeX,sizeY){
        this.image = image;
        this.imgLlena = imgLlena;
        this.imgDesordenada = imgDesordenada;
        this.posX = posX;
        this.posY = posY;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.cama =0;
    }

    paint(){
        switch(this.cama){
            case 0:
                image(this.image,this.posX,this.posY,this.sizeX,this.sizeY);
                break;
            case 1:
                image(this.imgLlena,this.posX,this.posY,this.sizeX,this.sizeY);
                break;
            case 2:
                image(this.imgDesordenada,this.posX,this.posY,this.sizeX,this.sizeY);
                break;
        }

    }

    clicked(){
        if(dist(mouseX,mouseY,this.posX,this.posY)<(this.sizeX-70) && this.cama==1){
            this.cama = 2;
            console.log("jajaajajajja");
        } else
        if(dist(mouseX,mouseY,this.posX,this.posY)<(50)){
            this.cama = 1;
            console.log("jcjcoñooooooooooo");
        }




    }
    
    /**
     * @param {number} cama
     */
    set changesCamas(cama){
        this.cama = cama;
    }

    get cama() {
        return this.cama;
    }
        
       // console.log("menajdjd");

}
