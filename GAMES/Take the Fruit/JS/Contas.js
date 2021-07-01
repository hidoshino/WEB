// Selecionar vetores aleatóriamente para gerar setença matemática;

function Contas() {

    // Variáveis principais da classe
    this.array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    this.array_operacao = ["+", "-", "*", "/"];
    this.Gerar_Indice_Aleatorio_numero_1 = parseInt(Math.floor(Math.random() * 9 + 0));
    this.Gerar_Indice_Aleatorio_operacao = parseInt(Math.floor(Math.random() * 3 + 0));
    this.Gerar_Indice_Aleatorio_numero_2 = parseInt(Math.floor(Math.random() * 9 + 0));
    this.Valor_1 = 0;
    this.Valor_2 = 0;
    this.Operacao = 0;
    this.resposta = 0;
    this.next = false;

    // Gera setença matemática e retorna em string + calcula resultado.
    this.Setenca_Matematica = function () {


        this.Valor_1 = parseInt(this.Gerar_Indice_Aleatorio_numero_1);
        this.Operacao = this.Gerar_Indice_Aleatorio_operacao;
        this.Valor_2 = parseInt(this.Gerar_Indice_Aleatorio_numero_2);

        this.Calcula();

        if(this.array[this.Valor_1] < this.array[this.Valor_2] && this.Operacao == 1){

            return `${this.array[this.Valor_1]} ${this.array_operacao[0]} ${this.array[this.Valor_2]}`;
        } else {
            
            return `${this.array[this.Valor_1]} ${this.array_operacao[this.Operacao]} ${this.array[this.Valor_2]}`;
        }

        

    }

    // Calcula com operação selecionada
    this.Calcula = function () {

        switch (this.Operacao) {

            case 0: {
                this.resposta = parseInt(this.array[this.Valor_1]) + parseInt(this.array[this.Valor_2]);
                break;
            }
            case 1: {
                if (this.array[this.Valor_1] < this.array[this.Valor_2]) {
                    this.resposta = this.array[this.Valor_1] + this.array[this.Valor_2];
                    break;
                } else {

                    this.resposta = this.array[this.Valor_1] - this.array[this.Valor_2];
                    break;

                }

            }
            case 2: {
                this.resposta = this.array[this.Valor_1] * this.array[this.Valor_2];
                break;
            }
            case 3: {
                this.resposta = this.array[this.Valor_1] / this.array[this.Valor_2];
                break;
            }
        }


    }


    // A cada nível resetar o nível da conta OBRIGATÓRIAMENTE TEM QUE SER >=  0 ;
    this.verifica_nivel = function () {

        if (this.next) {

            this.Gerar_Indice_Aleatorio_numero_1 = parseInt(Math.floor(Math.random() * 9 + 0));
            this.Gerar_Indice_Aleatorio_operacao = parseInt(Math.floor(Math.random() * 3 + 0));
            this.Gerar_Indice_Aleatorio_numero_2 = parseInt(Math.floor(Math.random() * 9 + 0));
            
            if(this.Gerar_Indice_Aleatorio_numero_1 < this.Gerar_Indice_Aleatorio_numero_2){

                this.Gerar_Indice_Aleatorio_operacao = 0;

            }
            
            this.next = false;

        }


    }


}