var alfabeto = ["a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function capElemento(ref) {
    const element = document.querySelector(ref);
    return element;
}

const formulario = capElemento('.container')
formulario.addEventListener('submit', function (event) {
    verChave();
    event.preventDefault();
}, false)

function verChave() {
    let key = capElemento('.senha');
    console.log(key)
    k = key.value;
    if (k <= 26 || k < 0) {
        console.log("Deu certo!");
        criptografar(k);
    } else {
        alert('Chave inválida!');
    }
}

function criptografar(k) {
    let chave = parseInt(k);
    let word = capElemento('.palavra').value.toLowerCase();
    console.log(word);

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
                retorno += alfabeto[j + chave -1]
            } else {
                alert('Erro!')
            }
        }
    }
    console.log(retorno);
    retorneHTML(retorno);
}


function retorneHTML(retorno) {
    let ret = document.createElement("p");
    let conteudo = document.createTextNode(retorno);
    ret.appendChild(conteudo);
    capElemento(".retorno").appendChild(ret);
}

function reserva(){
    verChave();

}
function descriptografar(k) {
    let chave = parseInt(k);
    let word = capElemento('.palavra').value.toLowerCase();
    console.log(word);

    let retorno = ""

    for (let i = 0; i < word.length - 1; i++) {
        if (word[i] == " ") {
            retorno += "-"
        } else {
            let letraCifrada = null
            let j = 0
            while (letraCifrada != word[i]) {
                letraCifrada = alfabeto[j]
                j--
            }
            if (j < alfabeto.length - chave) {
                retorno += alfabeto[j - chave -1]
            } else {
                alert('Erro!')
            }
        }
    }
}
    
    // console.log(retorno);

    // let chave = parseInt(key);
    // let word = capElemento('palavra').toLowerCase();
    // let retorno = ""
    // let num = word[word.length - 1]
    //for (let i = 0; i < word.length - 1; i++) {
        //if (word[i] == "-") {
           // retorno += " "
        //} else {
           // let letraCifrada = null
           // let j = 26
           // while (letraCifrada != word[i]) {
            //    letraCifrada = alfabeto[j]
            //    j--
            //}
            //if (j < alfabeto.length - chave) {
            //    retorno += alfabeto[j - chave]
            //}
            //else if (j > alfabeto.length - chave) {
              //  retorno += alfabeto[j]
           // }
            //else {
              //  alert('Erro!')
           // }
       // }
       // console.log(retorno);

    //}
    //retorneHTML(retorno)
//}

