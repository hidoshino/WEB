var img_Pause = new Image();
img_Pause.src = "../IMG/Pause/Menu.png";
var img_Creditos = new Image();
img_Creditos.src = "../IMG/Creditos/Créditos.png";
var img_Informacoes = new Image();
img_Informacoes.src = "../IMG/Informacoes/Instruções.png";

function Pause_Game(){

    this.Pause = false;
    this.Informacoes = false;
    this.Creditos = false;
    this.retorno = false;
    
    this.Load_Img = function(Ctx){

        if(this.Informacoes){
            this.retorno = true;
           Ctx.drawImage(img_Informacoes,0,0,604,483,0,0,626,483);

        } else if (this.Creditos){
            this.retorno = true;
           Ctx.drawImage(img_Creditos,0,0,604,483,0,0,626,483);

        }
         else {
            this.retorno = true;
            Ctx.drawImage(img_Pause,0,0,468,625,0,0,626,483);
            Ctx.drawImage(img_Pause,0,0,468,483,0,0,626,483);
        }
        
       
    }

    

}