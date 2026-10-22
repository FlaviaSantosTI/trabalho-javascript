//Aluna: Flávia Avelino dos Santos
//Ex02: Cálculo da média de vendas
//Uma empresa deseja acompanhar o desempenho de um vendedor durante quatro semanas. 
//Para isso, precisa de um programa que calcule a média semanal de vendas realizadas.

let totalVendaSemana1 = Number(prompt("Digite o Total de vendas da 1° semana R$"));
let totalVendaSemana2 = Number(prompt("Digite o Total de vendas da 2° semana R$"));
let totalVendaSemana3 = Number(prompt("Digite o Total de vendas da 3° semana R$"));
let totalVendaSemana4 = Number(prompt("Digite o Total de vendas da 4° semana R$"));

let mediaVendas = (totalVendaSemana1+totalVendaSemana2+totalVendaSemana3+totalVendaSemana4)/4;

console.log("*************************");
console.log("A média de venda DAS QUATRO SEMANAS foi:", mediaVendas.toFixed(2));
console.log("*************************");

