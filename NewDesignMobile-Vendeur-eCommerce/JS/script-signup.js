function verificarEmail () {
    if(document.getElementById('email').value == "") {
        document.getElementById('email').style.width = "30%"
    }else {
        document.getElementById('email').style.width = "100%"
    }
}

function verificarSenha () {
    if(document.getElementById('senha').value == "") {
        document.getElementById('senha').style.width = "30%"
    }else {
        document.getElementById('senha').style.width = "100%"
    }
}

function verificarEndereco () {
    if(document.getElementById('ender').value == "") {
        document.getElementById('ender').style.width = "160px"
    }else {
        document.getElementById('ender').style.width = "100%"
    }
}

function verificarComp () {
    if(document.getElementById('comp').value == "") {
        document.getElementById('comp').style.width = "160px"
    }else {
        document.getElementById('comp').style.width = "160px"
    }
}

function verificarWhats () {
    if(document.getElementById('number').value == "") {
        document.getElementById('number').style.width = "30%"
    }else {
        document.getElementById('number').style.width = "100%"
        var numero = document.getElementById('number').value
        if(numero.length == 11){
            document.getElementById('number').readOnly = true
            const part1 = numero.slice(0, 2)
            const part2 = numero.slice(2, 7)
            const part3 = numero.slice(7, 11)
            document.getElementById('number').type = "text"
            document.getElementById('number').value = `(${part1})${part2}-${part3}`
            //console.log(`(${part1}) ${part2}-${part3}`)
        }
    }
}

/*function aumentarCEP() {
    document.getElementById('cep').style.setProperty("width", "40%", "!important")
    verificarCEP()
}*/

function verificarCEP () {
    if(document.getElementById('cep').value == "") {
        document.getElementById('cep').style.width = "30%"
    }else {
        document.getElementById('cep').style.width = "40%"
        var cep = document.getElementById('cep').value
        if(cep.length == 8) {
            document.getElementById('cep').readOnly = true
            const part1 = cep.slice(0,5)
            const part2 = cep.slice(5,8)
            document.getElementById('cep').type = "text"
            document.getElementById('cep').value = `${part1}-${part2}` 
        }
    }
}

function reativarCEP () {
    document.getElementById('cep').readOnly = false
}