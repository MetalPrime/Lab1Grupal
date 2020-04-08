class ComedorScreen extends Screen{

    constructor(imgBackground){
        super(imgBackground);
        this.imgBackground = imgBackground;
        this.imgBackground = loadImage('./data/img/MESAS.jpg');
        this.imgRicitosLook = loadImage('./data/img/ricitosEsquina.png');
        this.ricitosLooking = true;
        this.logic = new Logic();

    }

    paint(){
        image(this.imgBackground,this.posX,this.posY,this.sizeX,this.sizeY);

        if(this.ricitosLooking == true){
            image(this.imgRicitosLook,200,247,200,200);
        }
    
            this.logic.getSoaps();
         
       
    }

    clicked(){
     
    }
}