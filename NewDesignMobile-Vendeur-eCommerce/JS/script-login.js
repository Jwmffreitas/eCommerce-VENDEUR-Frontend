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