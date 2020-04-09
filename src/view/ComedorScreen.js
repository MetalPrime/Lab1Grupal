class ComedorScreen extends Screen{

    constructor(imgBackground){
        super(imgBackground);
        this.imgBackground = imgBackground;
        this.imgBackground = loadImage('./data/img/MESAS.jpg');
        this.imgSilla = loadImage('./data/img/SillaPng.png');
        this.imgSillaR = loadImage('./data/img/ricitosSilla.png');
        this.imgRicitosLook = loadImage('./data/img/ricitosEsquina.png');
        this.ricitosLooking = true;
        this.logic = new Logic();

    }

    paint(){
        image(this.imgBackground,this.posX,this.posY,this.sizeX,this.sizeY);
        image(this.imgSilla,580,82,115.2,175.2);

        if(this.ricitosLooking == true){
            image(this.imgRicitosLook,200,247,200,200);
        } else{
            image(this.imgSillaR,420,48,180,180);
        }
    
            this.logic.getSoaps();
         
       
    }

    clicked(){
        if(dist(mouseX,mouseY,420,48)<180){
            this.ricitosLooking = false;
        }

        this.logic.getClicksSopas();
    }

    passScreen(){
        if(this.logic.passToDormi()==true){
            return true;
            
        }
    }
}