class Logic {

    static preload(){
        txtBase = loadStrings('../data/txt/historiaRicitos.txt');
    }

    constructor(){
        // this.arrayTxt = split(this.txtBase, '<br/>')
        this.text();
        
     }

    static paint(){
        //console.log(txtBase[2]);
        
    }

    text(){
        createP(txtBase);
    }



}