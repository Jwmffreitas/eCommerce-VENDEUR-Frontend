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
            console.log(`(${part1}) ${part2}-${part3}`)
        }
    }
}