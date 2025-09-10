/*     Crie uma função que calcule o índice de massa corporal(IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

    Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

    Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais.Para isso, considere a cotação do dólar igual a R$4, 80.

    Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

    Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro.Considere Pi = 3, 14.

    Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
 */

function calculaImc(altura, peso) {
    return peso / altura*altura;
}

function calculaFatorial(n) {
    if (n == 1) {
        return 1;
    } else {

        return n * calculaFatorial(n - 1);
    }
}

console.log(calculaFatorial(5));

function converterDollarParaReal(valor) {
    return valor * 4.80;
}

function calcularPerimetro(altura, largura) {
    let area = largura * altura;
    let perimetro = 2 * (largura + altura);
    console.log("Área da sala: " + area + " m²");
    console.log("Perímetro da sala: " + perimetro + " m");
}
function calcularPerimetroCircular(raio) {
    let pI = 3.14;
    let area = pI * raio *raio;
    let perimetro  = 2* pI * raio;
    console.log("Área da sala: " + area.toFixed(2) + " m²");
    console.log("Perímetro da sala: " + perimetro.toFixed(2) + " m");
}
function tabuada(numero) {
   let cont = 0;
    while (cont< 10) {
        console.log(`${numero} X ${cont} = ${numero*cont}`);
        cont++;
    }
}
tabuada(10);