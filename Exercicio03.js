//Aluna: Flávia Avelino dos Santos
//Ex03: Cálculo da média de Consumo de Energia
//Uma família deseja acompanhar seu consumo de energia elétrica durante quatro
//meses para verificar se está respeitando uma meta de consumo mensal que é de 150kWh.
//Ao final Mostrar um detalhamento do consumo.


let consumoMes1 = Number(prompt("Digite o consumo do 1° mês"));
let consumoMes2 = Number(prompt("Digite o consumo do 2° mês"));
let consumoMes3 = Number(prompt("Digite o consumo do 3° mês"));
let consumoMes4 = Number(prompt("Digite o consumo do 4° mês"));

let Total = consumoMes1 + consumoMes2 + consumoMes3 + consumoMes4;
let mediaConsumo = Total / 4;

let metaConsumo = 150;
let avaliacaoMeta; 

if (mediaConsumo <= metaConsumo) {
    avaliacaoMeta = "O consumo médio está DENTRO da meta.";
} else {
    avaliacaoMeta = "O consumo médio está ACIMA da meta.";
}

let resultadoOrganizado = 
    "=== DETALHAMENTO DE CONSUMO DE ENERGIA ===" + "\n\n" +
    "* Primeiro Mês: " + consumoMes1 + " kWh" + "\n" +
    "* Segundo Mês: " + consumoMes2 + " kWh" + "\n" +
    "* Terceiro Mês: " + consumoMes3 + " kWh" + "\n" +
    "* Quarto Mês: " + consumoMes4 + " kWh" + "\n\n" +
    "---------------------------------------" + "\n" +
    "Média Calculada: " + mediaConsumo.toFixed(1) + " kWh/mês" + "\n" +
    "Meta Estabelecida: Até " + metaConsumo + " kWh/mês" + "\n" +
    "Situação: " + avaliacaoMeta;

console.log(resultadoOrganizado);