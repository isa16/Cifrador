var alfabeto = ["a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function capElemento(ref) {
    const element = document.querySelector(ref);
    return element;
}

const btnCifrar = capElemento('#cifrar')
btnCifrar.addEventListener('click', () => {
    criptografar(verChave())
})

const btnDecifrar = capElemento('#decifrar')
btnDecifrar.addEventListener('click', () => {
    descriptografar(verChave())
})

function verChave() {
    let key = capElemento('.senha').value;
    if (key <= 26 || key < 0) {} else {
        alert('Chave inválida!');
    }
    return key
}

function criptografar(k) {
    capElemento(".retorno").innerHTML = " "
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

            let newPos = (j + chave) - 1

            if (newPos > 25) {
                newPos -= 26
            }
            retorno += alfabeto[newPos]
        }
    }
    retorneHTML(retorno);
}

function descriptografar(k) {
    capElemento(".retorno").innerHTML = " "
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

            let newPos = (j - chave) - 1

            if (newPos < 0) {
                newPos += 26
            }
            retorno += alfabeto[newPos]
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
