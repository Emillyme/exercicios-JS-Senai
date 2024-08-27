let peso = Number(window.prompt('digite seu peso: '))
let altura = Number(window.prompt('digite sua altura: '))
imc = peso / altura**2

let classificacao;
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }
    
window.alert(classificacao)