class DormitorioScreen extends Screen{

    constructor(imgBackground){
        super(imgBackground);
        this.imgBackground = imgBackground;
        this.imgBackground = loadImage('./data/img/DORMITORIO.jpg');
        this.txt1= loadImage('./data/img/textocamas.png');
        this.txt2= loadImage('./data/img/textocamas2.png');
        this.ositosPutos = loadImage('./data/img/ososesquina.png');
        this.boton = loadImage('./data/img/boton.png');
        this.changeText= false;
        this.logic = new Logic();
    }

    paint(){
        
        image(this.imgBackground,this.posX,this.posY,this.sizeX,this.sizeY);
        fill(255);
        rect(0,445,1024,600);
        
        this.logic.getCamas();
        this.showOsitos();
if(this.changeText){
            image(this.txt2,100,460);
        }else{
            image(this.txt1,100,460);
        }
    }

    clicked(){
        this.logic.getClicksCamas();
    }

    showOsitos(){
        if(this.logic.showOsitos()){
            image(this.ositosPutos,0,220);
            this.changeText = true;
            image(this.boton,950,300,50,50);
        }
    }

    passScreen(){
        if(dist(mouseX,mouseY,950,300)<50&&this.logic.showOsitos()){
            return true;
        }
    }
}