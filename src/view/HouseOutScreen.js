class HouseOutScreen extends Screen{

    constructor(imgBackground){
        super(imgBackground);
        this.imgBackground = imgBackground;
        this.imgBackground = loadImage('./data/img/EXTERIOR.jpg');
        this.hHighlight = loadImage('./data/img/casaHighlight.png');
    }

    paint(){
        image(this.imgBackground,this.posX,this.posY,this.sizeX,this.sizeY);
      

       if(dist(mouseX,mouseY,540,130)<300){
        image(this.hHighlight,525,130,400,220);
        console.log("funciona algo");
        }
    }

    clicked(){

    }
}