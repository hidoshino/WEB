// faz a relação com as classes de Imagens e diretórios de origem.
var img_Play = new Image();
    img_Play.src = "../IMG/Play/Runner/CenárioFinal.png";

var pos_Cesta_X = 0, pos_Cesta_Y = 0;
var frutas_game = new Frutas_Game(pos_Cesta_X, pos_Cesta_Y);

var img_Cesta = new Image();
    img_Cesta.src = "../IMG/Play/Runner/Cesta.png";

var img_Over = new Image();

var img_winner = new Image(); 
    img_winner.src = "../IMG/Gain/Gain.png" ;

var Array_Select_Image = ["Splash3.png", "Splash2.png", "Splash1.png"], Indice_Array = 0;

var img_Splash = new Image();

var audio_over = new Audio();
    audio_over.src = "../SOUND/loos/derrota.mp3";

var audio_play = new Audio();
    audio_play.src = "../SOUND/Runner/Runner.mp3";    

var contas = new Contas();

//
function play() {

    this.Splash = false;
    this.play = false;
    this.Over = false;
    this.Winner = false;
    this.Btn_Resposta = false;
    this.Cesta_X = 0;
    this.Cesta_Y = 0;
    this.setenca = "";

    // Starta o Game e Chama todas as funções.
    this.Start = function (Ctx, Mouse_X, Mouse_Y) {


        if (this.play) {
           try{

            // Estado Jogando
            this.Spaw_Splash(Ctx);
            Ctx.clearRect(0, 0, 626, 483);
            //Ctx.drawImage(img_Play,0,0,626,483,0,0,626,483);
            Ctx.drawImage(img_Play, 0, 0, 626, 533, 0, 0, 626, 533);
            frutas_game.Loag_img(Ctx);
            Ctx.drawImage(img_Cesta, 0, 0, 80, 52, Mouse_X - 50, 434, 80, 52);
            pos_Cesta_X = Mouse_X;
            pos_Cesta_Y = 434; // Posição da Cesta em Y será sempre constante.
            frutas_game.Verifica_Get_OR_Null(Ctx, pos_Cesta_X, pos_Cesta_Y);
            this.Verifiva_derrota();
            this.Verifica_vitoria(Ctx,Mouse_X,Mouse_Y);
            Ctx.fillStyle = '#ffeaa7';
            Ctx.font = '36px Lucida Console';
            Ctx.fillText( this.setenca , 400, 5);
            audio_play.play();

           } catch{}
            
        } else if (!this.Splash) {
            // Estado de Splash
            this.Spaw_Splash(Ctx);

        } 

    }

    // Estado Derrota
    this.Over_Game = function(Ctx){
        // Verifica tipo de derrota 
        if (this.Over && frutas_game.Lifes == 0){
            // por vidas
            audio_over.play();
            img_Over.src = "../IMG/Over/Derrotav.png";
            Ctx.drawImage(img_Over,0,0,626,483,0,0,626,483);
           
        } else {
            // por errar conta matemática
            audio_over.play();
            img_Over.src = "../IMG/Over/Derrotaf.png";
            Ctx.drawImage(img_Over,0,0,626,483,0,0,626,483);

        }

    }

    this.Show_Winner = function(Ctx,mouseX,mouseY){

        if(this.Winner){

            Ctx.drawImage(img_winner,0,0,626,483,0,0,626,483);

        }

    }

    this.Spaw_Splash = function (Ctx) {

        if (frutas_game.count_Splash != 3) {
        frutas_game.Time_Splash(400);

        try {

            // Durante o Splash Inicializa algumas Labels e varia a origem do diretório de imagens.
            img_Splash.src = `../IMG/Play/Splash/${Array_Select_Image[frutas_game.count_Splash]}`;
            Ctx.clearRect(0, 0, 626, 483);
            Ctx.drawImage(img_Play, 0, 0, 626, 533, 0, 0, 626, 533);
            Ctx.fillStyle = 'rbg(250,250,250)';
            Ctx.font = '24px Avenir Heavy';
            Ctx.textAlign = 'left';
            Ctx.textBaseline = 'top';
            // Inicialização Label  lifes.
            Ctx.fillText("0" , 180, 495);
            Ctx.fillStyle = 'rbg(250,250,250)';
            Ctx.font = '24px Avenir Heavy';
            Ctx.textAlign = 'left';
            Ctx.textBaseline = 'top';
            Ctx.fillText("3" , 580, 495);
            Ctx.drawImage(img_Splash, 0, 0, 626, 533, 20, 25, 626, 533);
        }
        catch{ }
            
        } else {
            this.play = true;
            this.setenca = contas.Setenca_Matematica();
            this.Splash = true;
        }


    }


    // Verificar Estado de derrota dentro do Play 
    this.Verifiva_derrota = function(){

        // Significa que o jogador perdeu.
        if(frutas_game.Lifes == 0){
            this.play = false;
            this.Over = true;
        } 
    
    }
    
    // Verifica vitória 
    this.Verifica_vitoria = function(Ctx,pos_mouseX,pos_mouseY){

       if(pos_mouseY >= 520 && pos_mouseY <= 560 && pos_mouseX >= 280 && pos_mouseX <= 470){

           
            this.resposta_conta = parseInt(contas.resposta);
            this.frutas_coletadas = parseInt(frutas_game.Quantidade_pegas);
            console.log(this.resposta_conta);
            console.log(this.frutas_coletadas);
            // Valida vitória 
            if( this.frutas_coletadas === this.resposta_conta ){
                // Exibe vitória do jogador..
                this.play = false;
                this.Winner = true;

            } else{

                this.Over = true;
                this.Over_Game(Ctx);

            } 

        }

    }





}

