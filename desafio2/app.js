/*     Criar uma função que exibe "Olá, mundo!" no console.

    Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

    Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

    Criar uma função que recebe três números como parâmetros e retorna a média deles.

    Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

    Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
 */

function olaMundo() {
    console.log("Olá mundo!")
}

olaMundo();

function saudacao(nome) {
    console.log(`Olá ${nome}!`);
}
let nome = `Jeferson`;

saudacao(nome);

function dobroDeUmNumero(numero = 0) {
    return numero * 2;
}
console.log(dobroDeUmNumero(4));

function calculaMedia(numero1 = 0, numero2 = 0, numero3 = 0) {
    let calculo = (numero1 + numero2 + numero3) / 3;
    return calculo;
}

console.log(calculaMediaDeTresNumeros(10, 10, 10));

function encontrarOmaior(numero1, numero2) {
    let verificacao = numero1 > numero2 ? numero1 :numero2;

    return verificacao;

}

console.log(encontrarOmaior(1, 2));

function quadrado(numero) {
    let operacao = numero * numero;
    return operacao;
}

console.log(quadrado(3));

