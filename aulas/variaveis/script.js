var nome = window.prompt("Digite seu nome: ")
document.write("Bem vindo! <br>")
document.write(`Olá ${nome}`)

let qnt = Number(window.prompt('Serão quantas notas a serem colocadas na média? '));
let notas = [];
let soma = 0;

for (let index = 0; index < qnt; index++) {
    let nota = Number(window.prompt(`digite a nota ${index + 1}: `))
    notas.push(nota)
}

notas.forEach((elemento) => {
    soma += elemento
})

let media = soma / notas.length;

let opcao = Number(window.prompt("1: Ver média e status.   2: Notas")) 

switch(opcao){
    case 1:
        document.write(`Média: ${media}`)
        alert(`Media: ${media} ----> ${media > 6 ? "Aprovado!" : "Reprovado"}`)
        break;
    
    case 2:
        document.write(`<br> Notas: ${notas}`)
        document.write(`<br> Media: ${media}`)
        break;
}