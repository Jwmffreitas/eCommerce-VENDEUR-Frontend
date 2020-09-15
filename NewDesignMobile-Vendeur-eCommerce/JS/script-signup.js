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
        if(numero.length > 9){
            console.log('nao pode')
        }
    }
}