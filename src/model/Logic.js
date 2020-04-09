var soaps = [];
var camas = [];

class Logic {

    static preload(){
        txtBase = loadStrings('../data/txt/historiaRicitos.txt');
    }

    constructor(){
    
        console.log(txtBase);
        for(let i=0;i<3;i++){
           soaps.push(new Sopa((80*i)+450,(15*i)+200,(i*10)+50,50));
        }

        for(let i=0;i<3;i++){
            var imgC = loadImage('./data/img/cama'+i+'.png');
            var imgCD = loadImage('./data/img/camaDes'+i+'.png');
            var imgCL = loadImage('./data/img/camaLle'+i+'.png');
            var imgH = loadImage('./data/img/camaHigh'+i+'.png');
            camas.push(new Camas(imgC,imgCL,imgCD,imgH,(140*i)+325,(i*40)+150,(i*25)+215,(i*25)+165));
        }

       // this.text();
        
     }

    static txt(){
        txtBase[3].replace('(casa)','CASA');
        txtBase[6].replace('(sentarse)','SENTARSE');
        txtBase[6].replace('pequeño','PEQUEÑO');
        txtBase[6].replace('mediano','MEDIANO');
        txtBase[6].replace('grande','GRANDE');
        txtBase[11].replace('cama','CAMA');
        txtBase[11].replace('pequeña','PEQUEÑA');
        txtBase[11].replace('mediana','MEDIANA');
        txtBase[11].replace('grande','GRANDE');
        saveStrings(txtBase,'newTXT.txt');
    }



    text(){
        createP(txtBase);
    }

    getCamas(){
        for(let i=0;i<camas.length;i++){
            camas[i].paint();
            
        }
    }

    getSoaps(){
        for(let i=0;i<soaps.length;i++){
            soaps[i].paint();
         }
    }

    getClicksCamas(){
        for(let i=0;i<camas.length;i++){
            camas[i].clicked();
            console.log("funciona");
         }
    }

    getClicksSopas(){
        for(let i=0;i<soaps.length;i++){
            soaps[i].clicked();
           
         }

    }

    passToDormi(){
        for(let i=0;i<soaps.length;i++){
            if(soaps[0].todasLLenas()  && soaps[1].todasLLenas() && soaps[2].todasLLenas()){
                return true;
            }
         }
      
    }

    showOsitos(){
        for(let i=0;i<camas.length;i++){
            if(camas[0].camasF()  && camas[1].camasF() && camas[2].camasF()){
                return true;
            }
         }  
    }

}