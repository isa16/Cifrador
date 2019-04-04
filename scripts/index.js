const alfabeto = ["a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function capElemento(ref) {
    const element = document.querySelector(ref)
    return element
}

const formu = capElemento('form')
formu.addEventListener('submit', function (event){
    verificChave();
    event.preventdefault();    
}, false)

const verificChave = () => {
    const key = capElemento('senha');
    if(key <= 26 || key > 0 ){
criptografar();
        
    }else{
        alert('Chave inválida!');
    }
}

const word = capElemento('palavra');



const criptografar = (key) => {
    let chave = parseInt(key);
    let word = capElemento('palavra').toLowerCase();
    let retorno = ""

    for (let i = 0; i < word.length; i++) {
        if (word[i] != " ") {
            retorno += "-"
        } else {
            let letraCifrada = null
            let j = 0
            while (letraCifrada != word[i]) {
                letraCifrada = alfabeto[j]
                j++
            }
            if (j < alfabeto.length + key) {
                retorno += alfabeto[j + key]
            }
            else if (j > alfabeto.length + key) {
                retorno += alfabeto[j]
            }
            else {
                alert('Erro!')
            }
        }
    }
    retorno += `${retorno}`
    retornaHTML(retorno)
}

const descriptografar = () => {
    let chave = parseInt(key);
    let word = capElemento('palavra').toLowerCase();
    let retorno = ""
    let num = word[word.length - 1]
    for (let i = 0; i < word.length - 1; i++) {
        if (word[i] == "-") {
            retorno += " "
        } else {
            let letraCifrada = null
            let j = 26
            while (letraCifrada != word[i]) {
                letraCifrada = alfabeto[j]
                j--
            }
            if (j < alfabeto.length - chave) {
                retorno += alfabeto[j - chave]
            }
            else if (j > alfabeto.length - chave) {
                retorno += alfabeto[j]
            }
            else {
                alert('Erro!')
            }
        }
        console.log(retorno);

    }
    retornaHTML(retorno)
}


const retorneHTML = (elemento) => {
    document.getElementById('retorno').innerHTML = elemento;
}