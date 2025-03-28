import { Veiculo } from "./Veiculo.js";
import { Carro } from "./Carro.js";
console.log("Pagina carregando");
let moto = new Veiculo('amarelo', 1200, 'honda');
moto.Cor = 'amarela'
moto.Velocidade = 120;
moto.Modelo = 'honda';
console.log(moto.imprimirInformacoes());
console.log(moto.acelerar());
console.log(moto.frear());
let Fusca = new Carro ('azul', 2000, 'Fusca')
Fusca.Cor = 'Azul';
Fusca.Velocidade = 2000;
Fusca.Modelo = 'Fusca';
Fusca.numeroPortas = 132
console.log(Fusca.imprimirInformacoesCarro());
console.log(Fusca.acelerar());
console.log(Fusca.frear());



