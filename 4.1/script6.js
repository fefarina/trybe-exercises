let num1 = 15;
let num2 = 15;

if(num1 === num2) {
    console.log(num1 + num2);
} else {
    console.log( num1 * num2);
}

var chessPiece = 'bispo';

switch(chessPiece.toLocaleLowerCase()) {
    case 'rei':
        console.log("Rei -> Uma casa apenas para qualquer direção");
        break;
    case 'bispo':
        console.log('Bispo -> Diagonal');
        break;
    case 'rainha':
        console.log('Rainha -> Diagonal e Hotizontal');
        break;
    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças');
        break;
    case 'torre':
        console.log('Torre -> Horizontal');
        break;
    case 'peão':
        console.log('Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas');
        break;
    default:
        console.log('Erro, peça inválida');
        break;
    
}