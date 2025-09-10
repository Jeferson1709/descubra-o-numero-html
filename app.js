/* let titulo = document.querySelector('h1');
titulo.innerHTML='Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}
function exibirMensagemInicial() {
    
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;

    document.getElementById('reiniciar').removeAttribute('disabled');
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensegemTentativa = `Você descobriu o número secreto com ${tentativas}  ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensegemTentativa);
    } else {

        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
     
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
            
        }
        tentativas++;
        limparCampo();
    }
    console.log(parseInt(chute) == numeroSecreto ? 'Acertou' : "Errou tente novamente");

}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
function limparCampo() {
    chute =document.querySelector('input');
    chute.value ='';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled',true);
}