const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const criptografar = () => {
    let palavra = capturaInput()
    let retorno = ""
    let num = sorteiaNum()

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] == " ") {
            retorno += "-"
        } else {
            let letraCifrada = null
            let j = 0
            while (letraCifrada != palavra[i]) {
                letraCifrada = alfabeto[j]
                j++
            }
            if (j < alfabeto.length + num) {
                retorno += alfabeto[j + num]
            }
            else if (j > alfabeto.length + num) {
                retorno += alfabeto[j]
            }
            else {
                alert('Erro!')
            }
        }
    }
    retorno += `${num}`
    devolveHTML(retorno)
}

const descriptografar = () => {
    let palavra = capturaInput()
    let retorno = ""
    let num = palavra[palavra.length-1]
    for (let i = 0; i < palavra.length - 1; i++) {
        if (palavra[i] == "-") {
            retorno += " "
        } else {
            let letraCifrada = null
            let j = 26
            while (letraCifrada != palavra[i]) {
                letraCifrada = alfabeto[j]
                j--
            }
            if (j < alfabeto.length - num) {
                retorno += alfabeto[j - num]
            }
            else if (j > alfabeto.length - num) {
                retorno += alfabeto[j]
            }
            else {
                alert('Erro!')
            }
        }
        console.log(retorno);
        
    }
    devolveHTML(retorno)
}

const capturaInput = () => {
    return document.getElementsByTagName('input')[0].value
}

const devolveHTML = (elemento) => {
    document.getElementById('retorno').innerHTML = elemento;
}

const sorteiaNum = () => {
    let num = parseInt(Math.random() * 7)
    if (num == 0) {
        while (num == 0) {
            num = parseInt(Math.random() * 7)
        }
    }
    return num
}