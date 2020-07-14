let custoProduto = 120;
let vendaProduto = 145;

if (custoProduto && vendaProduto != 0) {
    totalLucro = ((vendaProduto - custoProduto) *1000 *0.20)
    console.log(totalLucro)
} else {
    console.log('Erro, valores abaxo de 0')
}