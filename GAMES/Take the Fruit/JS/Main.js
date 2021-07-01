// Take the fruits. 
// Data de início: 22/07/2020 Durante o período 20.5 remoto UFRN Subturma 01A.
// Autor: Filipe Rogério de Oliveira Paiva, Estudante de Ciência e Tecnologia(C&T) da Universidade Federal do Rio Grande do Norte (UFRN). 
// Versão 1.0 © 
// Link do vídeo : https://drive.google.com/file/d/1qV8i72LLewtSoixbZ16df64CmbXv6vmd/view?usp=sharing

window.onload = function Main(){

    // Criação das variáveis principais do canvas e estados do game 

    var Canvas, Context, width = 626, height = 483;

    var Pause = true , Play = false , Over = false ;

    // IMPLEMENTAÇÃO DO CANVAS AO DOCUMENTO HTML DA PÁGINA !!

    Canvas = window.document.createElement('canvas');
    Context = Canvas.getContext('2d');
    Canvas.width =  width;
    Canvas.height = height;
    Canvas.style.border = "10px #27ae60 Solid";
    Canvas.style.cursor = "url(/IMG/mão.cur),default";
    
    window.document.body.appendChild(Canvas);
    window.document.body.style.cursor = "url(/IMG/mão.cur),default";
    // Referencia os objetos Criados nas outras páginas JavaScript. Metódo para facilitar a organização do Game.

    var Play_Game = new play();
    var pause_game =  new Pause_Game();   
    
    var audio_winner = new Audio();
        audio_winner.src = "../SOUND/Winner/Vitoria.mp3";
 
    // Funções principais do Game . 
    function loop() {

        window.requestAnimationFrame(loop);
        update();
        draw();

    }

    // Atualiza a cada segundo o Game . 
    function update(){

        Controller();
        Verificar_Estado_Game();

    }

    // Caso queira Printar alguma coisa na tela do Canvas independente de funções externas
    function draw(){
        
       
    }

    function Verificar_Estado_Game(){

         if(Pause){
            // Pausa
            pause_game.Load_Img(Context);

         } else if (Play){
            // rodando
            Canvas.height = 533;
            Play_Game.Splash = false;
            Play_Game.Over = false;
            Play_Game.Start(Context,mouse.x,mouse.y);

            if(Play_Game.Over){
                Play = false;
            } else if (Play_Game.Winner){
                Play = false;
            }

         } else if (Play_Game.Over){
            // Perdeu
            Canvas.height = 483;
            Play_Game.Over_Game(Context,mouse.x,mouse.y);

         } else if  (Play_Game.Winner) {
            // Venceu
            Canvas.height = 483;
            audio_winner.play();
            Play_Game.Show_Winner(Context,mouse.x,mouse.y);
        }

         
         
        
    }

    var mouse = {x: 0, y: 0, click: false}; // Objeto para receber coordenadas do Mouse pelo Evento MouseMove dentro da função Controller ;

    function Controller(){
        
        // Tem a função de checar o mouse a todo momento Cuidando dos movimentos da cesta e também da interação Com o menu.
        window.addEventListener('mousemove', function (e) {
        
            // obejto que recebe coordenas. 
            mouse.x = e.pageX;
            mouse.y = e.pageY;
        
            var h = window.document.getElementById("Infos");    
        
          //  h.innerHTML=`Coordenas Mouse em X: ${mouse.x} em Y: ${mouse.y} `; 
        
        },false);
        
        // Controla a confirmação do usuário após o click. 
        window.addEventListener('click', function (e){
        
                                                    //              EVENTO PARA CONTROLAR TELAS                      //
            if(!pause_game.Informacoes && !pause_game.Creditos && mouse.y >= 224 && mouse.y <= 290 && mouse.x >= 148 && mouse.x <= 510){
               
                // Seleciona Jogar Game !!
                Play = true;
                Pause = false;

            } else if (!Play && mouse.y >= 308 && mouse.y <= 368 && mouse.x >= 148 && mouse.x <= 510){
               // Seleciona Instruções Game !!
               pause_game.Informacoes = true;

            } else if (mouse.y >= 390 && mouse.y <= 465 && mouse.x >= 148 && mouse.x <= 510){
               
                // Seleciona Créditos Game !!
                pause_game.Creditos = true;     
            } else if (!Play_Game.Over && pause_game.Informacoes && mouse.y >= 40 && mouse.y <= 120 && mouse.x >= 30 && mouse.x <= 114 || !Play_Game.Over && pause_game.Creditos && mouse.y >= 40 && mouse.y <= 120 && mouse.x >= 30 && mouse.x <= 114) {
                
               // Coordenadas para retonar Menu do Game Caso esteja em alguma tela de Informações ou de Créditos.
               pause_game.Creditos = false;
               pause_game.Informacoes = false;

            } else if(Play_Game.Over && mouse.x >= 60 && mouse.x <= 310 || Play_Game.Winner && mouse.x >= 60 && mouse.x <= 310){
                // Requisitou retorno Menu
                Pause = true;
                Play_Game.Over = false;
                frutas_game.Quantidade_pegas =0;
                frutas_game.Lifes = 3;

            } else if(Play_Game.Over && !Play_Game.Winner && mouse.x >= 368 && mouse.x <= 610){
                // Requisitou Tentar novamente
                Pause = false;
                Play = true;
                Play_Game.Over = false;
                frutas_game.Lifes = 3;
                frutas_game.Quantidade_pegas =0;
            }
             else if(Play_Game.Winner && !Play_Game.Over && mouse.x >= 368 && mouse.x <= 610){
                // Requisitou Próximo nível
                frutas_game.DoubleLevel++
                if(frutas_game.DoubleLevel == 2){
                    frutas_game.gravidade+= 2;
                }
                frutas_game.gravidade++
                contas.next = true;
                contas.verifica_nivel();
                frutas_game.Lifes = 3;
                frutas_game.Quantidade_pegas = 0;
                Pause = false;
                Play_Game.Over = false;
                Play = true;
                Play_Game.Winner = false;
                
            }

        
        },false);
    }

    loop();

}

