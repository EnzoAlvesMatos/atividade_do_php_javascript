export class Veiculo{
    Cor;
    Velocidade;
    #Modelo;
    
    
   

    constructor(Cor, Velocidade, Modelo){
        this.#Modelo = Modelo;
        this.Cor = Cor;
        this.Velocidade = Velocidade;
       
    }
   
   get Modelo(){
    return this.#Modelo;
   }

    set Modelo(Modelo){
        if(this.Velocidade > 1000){
           console.log("modelo igual a" + this.#Modelo);
        }else{
            console.log("Não é possivel acessar modelo")
        }
    }

    imprimirInformacoes(){
        return `a cor dele é ${this.Cor} minha velocidade é ${this.Velocidade} `;
        
 }
     acelerar(){
    return `Se acelerar${this.Velocidade + 10}`;
    };
    frear(){
        
        return `Se frear${this.Velocidade - 10}`;
       }

  
   
}
