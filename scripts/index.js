var alfabeto = ["a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function capElemento(ref) {
    const element = document.querySelector(ref);
    return element;
}



const formulario = capElemento('.botao1')
formulario.addEventListener('click', (event) => {
capElemento(".retorno").value = " "
    verChave()
    criptografar(k)
    event.preventDefault();
}, false)

const form = capElemento('.botao2')
form.addEventListener('click', (event) => {

    

    verChave()
    descriptografar(k)
    event.preventDefault();
}, false)

function verChave() {
    let key = capElemento('.senha');
    console.log(key)
    k = key.value;
    if (k <= 26 || k < 0) {
        console.log("Deu certo!");
    } else {
        alert('Chave inválida!');
    }
}

function criptografar(k) {
    let chave = parseInt(k);
    let word = capElemento('.palavra').value.toLowerCase();
    let retorno = ""

    for (let i = 0; i < word.length; i++) {
        if (word[i] == " ") {
            retorno += "-"
        } else {
            let letraCifrada = null
            let j = 0
            while (letraCifrada != word[i]) {
                letraCifrada = alfabeto[j]
                j++
            }
            if (j < alfabeto.length + chave) {
                retorno += alfabeto[j + chave - 1]
            } else {
                alert('Erro!')
            }
        }
    }
    retorneHTML(retorno);
}

function descriptografar(k) {
    let chave = parseInt(k);
    let word = capElemento('.palavra').value.toLowerCase();
    let retorno = ""

    for (let i = 0; i < word.length; i++) {
        if (word[i] == " ") {
            retorno += "-"
        } else {
            let letraCifrada = null
            let j = 0
            while (letraCifrada != word[i]) {
                letraCifrada = alfabeto[j]
                j++
            }
            if (j < alfabeto.length - chave) {
                retorno += alfabeto[j - chave - 1]
            } else {
                alert('Erro!')
            }
        }
    }
    retorneHTML(retorno);
}

function retorneHTML(retorno) {
    let ret = document.createElement("p");
    let conteudo = document.createTextNode(retorno);
    ret.appendChild(conteudo);
    capElemento(".retorno").appendChild(ret);
}