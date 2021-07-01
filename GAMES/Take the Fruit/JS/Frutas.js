var src_imgs = ["Banana.png","Cereja.png","Laranja.png","Laranja_Amarela.png","maçã.png","MaçãRoxa.png","Mamão.png","maracujá.png","Morango.png","pera.png","Tomate.png","Uva.png"];
var img_fruta = new Image();

// *** Estrutura para percorrer array e jogar frutas inicial de forma aleatória *** //
var indice = 0;
for (var i = 0 ; i < src_imgs.length ; i++){
        indice++
}

img_fruta.src = `../IMG/Play/frutas/${src_imgs[parseInt(Math.floor(Math.random() * indice))]}`;

// Função referenciado dentro de Play...
function Frutas_Game(){

    this.y = 80;
    this.x = Math.floor(Math.random() * 626/2) + 10 ;
    this.gravidade = 2;
    this.DoubleLevel = 0;
    this.Quantidade_pegas = 0;
    this.Count_length_Array = 0
    this.count_Splash = 0;
    this.count = 4;
    this.Lifes = 3;
    this.Get_fruit = false;

    this.Loag_img = function(Ctx){

          // Efeito Gravidade atuando na coordenada Y do objeto Fruta. (Contadores)
          
          
            this.y += this.gravidade;

            if(this.Count_length_Array >= 11){
                this.Count_length_Array = parseInt(Math.floor(Math.random() * 2));
            } else {
                this.Count_length_Array++;
            }
            // Inicializa Label contagem
            Ctx.fillStyle = 'rbg(250,250,250)';
            Ctx.font = '24px Avenir Heavy';
            Ctx.textAlign = 'left';
            Ctx.textBaseline = 'top';
            Ctx.fillText(this.Quantidade_pegas , 175, 495);
            Ctx.drawImage(img_fruta,0,0,46,44,this.x,this.y,36,34);
            // Contagem de lifes.
            Ctx.fillStyle = 'rbg(250,250,250)';
            Ctx.font = '24px Avenir Heavy';
            Ctx.textAlign = 'left';
            Ctx.textBaseline = 'top';
            Ctx.fillText(this.Lifes , 580, 495);
           
           
          console.log(this.gravidade);
           
    }


    // Função de verificação se encontra a fruta ou não
    this.Verifica_Get_OR_Null = function(Ctx,Pos_Cesta_X,Pos_Cesta_Y){
        //&& this.y == Pos_Cesta_Y
        if(parseInt(this.x + 23) >= parseInt(Pos_Cesta_X - 20) && parseInt(this.x + 23) <= parseInt(Pos_Cesta_X + 20) && this.y == Pos_Cesta_Y - 42){
            // Caso os objetos se encontem;
           this.Quantidade_pegas++;
           this.Reseta_fruta();
            
        } else if (this.y >= 483 - 38 ) {
            // Caso a fruta caia sem o jogador conseguir pegar
            this.Reseta_fruta();
            this.Lifes--;
        } 

       

    }

    this.Time_Splash = function(Pos_Cesta_Y){

        if(this.y == Pos_Cesta_Y){
            this.count_Splash++;
            this.y = 0;

        }
        this.y += this.count; 
    }

    this.Reseta_fruta = function(){

        // Reseta a posição em X aleatóriamente e retorna a posição em Y para o início do Canvas em 0 ;
        this.x = (Math.random() * (500 - 0) + 0) + 80  ;
        this.y = 0;

        // Implementar sistema mudar aleatóriamente a imagem da fruta a cada reenicialização ; 
        var count_random = parseInt(Math.floor(this.Count_length_Array * Math.random()));
        img_fruta.src = `../IMG/Play/frutas/${src_imgs[count_random]}`;
    }
    
}