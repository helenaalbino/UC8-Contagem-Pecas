var listaDePecas = ["Amortecedor", "Parafuso", "Radiador"]

let pesoPeca = 50

if(peso < 100){
    console.log("A peça não possui o peso mínimo.")
} else {
    console.log("A peça possui o peso adequado. Cadastro permitido.")
}

if(listaDePecas.length <= 10){
    console.log("Ainda cabem mais peças.")
} else {
    console.log("Não tem mais espaço na lista.")
}

let nomePeca = "Disco de Freio"

if(nomePeca.length > 3){
    console.log("Nome está adequado para cadastro")
} else if(nomePeca.length == 0){
    console.log("O nome da peça não pode ser vazio")
} else {
    console.log("O nome deve ter mais de 3 caracteres para cadastro, digite o nome novamente")
}