import { Veiculo } from "./Veiculo.js"

export class Carro extends Veiculo{
    numeroPortas = 0;
    constructor(Cor, Velocidade, Modelo, numeroPortas){
        super(Cor, Velocidade, Modelo);
        this.numeroPortas = numeroPortas;
    }
    imprimirInformacoesCarro(){
        return `a cor dele é ${this.Cor} minha velocidade é ${this.Velocidade} e Numero da Porta ${this.numeroPortas} `;
    }


}