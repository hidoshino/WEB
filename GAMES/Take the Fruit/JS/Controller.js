function Controller() {

    // Tem a função de checar o mouse a todo momento Cuidando dos movimentos da cesta e também da interação Com o menu.
    window.addEventListener('mousemove', function (e) {

        // obejto que recebe coordenas. 
        mouse.x = e.pageX;
        mouse.y = e.pageY;

        var h = window.document.getElementById("Infos");

        //  h.innerHTML=`Coordenas Mouse em X: ${mouse.x} em Y: ${mouse.y} `; 

    }, false);

    // Controla a confirmação do usuário após o click. 
    window.addEventListener('click', function (e) {

        //              EVENTO PARA CONTROLAR TELAS                      //
        if (!pause_game.Informacoes && !pause_game.Creditos && mouse.y >= 224 && mouse.y <= 290 && mouse.x >= 148 && mouse.x <= 510) {

            // Seleciona Jogar Game !!
            Play = true;
            Pause = false;

        } else if (!Play && mouse.y >= 308 && mouse.y <= 368 && mouse.x >= 148 && mouse.x <= 510) {
            // Seleciona Instruções Game !!
            pause_game.Informacoes = true;

        } else if (mouse.y >= 390 && mouse.y <= 465 && mouse.x >= 148 && mouse.x <= 510) {

            // Seleciona Créditos Game !!
            pause_game.Creditos = true;
        } else if (!Play_Game.Over && pause_game.Informacoes && mouse.y >= 40 && mouse.y <= 120 && mouse.x >= 30 && mouse.x <= 114 || !Play_Game.Over && pause_game.Creditos && mouse.y >= 40 && mouse.y <= 120 && mouse.x >= 30 && mouse.x <= 114) {

            // Coordenadas para retonar Menu do Game Caso esteja em alguma tela de Informações ou de Créditos.
            pause_game.Creditos = false;
            pause_game.Informacoes = false;

        } else if (Play_Game.Over && mouse.x >= 60 && mouse.x <= 310 || Play_Game.Winner && mouse.x >= 60 && mouse.x <= 310) {
            // Requisitou retorno Menu caso tenha perdido
            Pause = true;
            Play_Game.Over = false;
            frutas_game.Quantidade_pegas = 0;
            frutas_game.Lifes = 3;

        } else if (Play_Game.Over && mouse.x >= 368 && mouse.x <= 610) {
            // Requisitou Tentar novamente Caso tenha perdido o game.
            contas.next = true;
            Pause = false;
            Play = true;
            Play_Game.Over = false;
            frutas_game.Lifes = 3;
            frutas_game.Quantidade_pegas = 0;
        }

    }, false);
}