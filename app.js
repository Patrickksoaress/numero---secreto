-alert("Bem vindo Rafael!");
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');
let tentativas = 1;


//enquanto chute nao for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt ('Escolha um numero entre 1 a 10');
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
;    } else {
    if (chute > numeroSecreto) {
        alert( `O numero secreto é menor que ${chute}`);
    } else {
        alert(`O numero secreto é maior que ${chute}`);
    }
    tentativas = tentativas + 1;
    tentativas++; 
}
}
let palavraTentativa = tentativas > 1 ? 'tentativa';
alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
