//numero fixo

//alert( "Bem vindo ao jogo de adivinhação!" )

//numeroSecreto = 4;
//contador = 0;

//chute = prompt("Digite um numero de 1 a 10 ?");3
//while (chute != numeroSecreto) {
//    if (chute > numeroSecreto) {
//        alert("O número secreto é menor");
//    } else if (chute < numeroSecreto) {
//        alert("O número secreto é maior");
//    }
//    chute = prompt("Digite um numero de 1 a 10 ?");
//}
//while (chute == numeroSecreto) {
//    alert("Parabéns você acertou!");
//    break;
//    Contador = contador + 1;
//    alert(`Você tentou ${contador} vezes.`); 
//    
//}

//Numero Aleatório

alert( "Bem vindo ao jogo de adivinhação!" )

numeroSecreto = parseInt(Math.random() * 10 + 1);
contador = 0;

chute = prompt("Digite um numero de 1 a 10 ?");3
while (chute != numeroSecreto) {
    if (chute > numeroSecreto) {
        alert("O número secreto é menor");
    } else if (chute < numeroSecreto) {
        alert("O número secreto é maior");
    }
    chute = prompt("Digite um numero de 1 a 10 ?");
}
while (chute == numeroSecreto) {
    alert("Parabéns você acertou!");
    break;
    Contador = contador + 1;
    alert(`Você tentou ${contador} vezes.`); 
    
}