var soaps = [];

class Logic {

    static preload(){
        txtBase = loadStrings('../data/txt/historiaRicitos.txt');
    }

    constructor(){
        // this.arrayTxt = split(this.txtBase, '<br/>');
        
        for(let i=0;i<3;i++){
           soaps.push(new Sopa((80*i)+450,(15*i)+200,(i*10)+50,50)) 
        }
        this.text();
        
     }

    static paint(){
        //console.log(txtBase[2]);
        for(let i=0;i<soaps.length;i++){
            soaps[i].paint();
         }
    }

    text(){
        createP(txtBase);
    }



}