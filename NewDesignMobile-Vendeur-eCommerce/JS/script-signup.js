var confirma = 'Not!'


function verificarEmail () {
    if(document.getElementById('email').value == "") {
        document.getElementById('email').style.width = "30%"
    }else {
        document.getElementById('email').style.width = "100%"
    }
}

function verificarNome () {
    if(document.getElementById('nome').value == "") {
        document.getElementById('nome').style.width = "30%"
    }else {
        document.getElementById('nome').style.width = "100%"
    }
}

function verificarSenha () {
    if(document.getElementById('senha').value == "") {
        document.getElementById('senha').style.width = "30%"
    }else {
        document.getElementById('senha').style.width = "100%"
    }
}

function confirmarSenha () {
    if(document.getElementById('csenha').value == "") {
        document.getElementById('csenha').style.width = "30%"
    }else {
        document.getElementById('csenha').style.width = "100%"
        if(document.getElementById('senha').value == document.getElementById('csenha').value) {
            confirma = `Ok!`
        }
    }
}

function verificarWhats () {
    if(document.getElementById('number').value == "") {
        document.getElementById('number').style.width = "160px"
    }else {
        document.getElementById('number').style.width = "100%"
        var numero = document.getElementById('number').value
        var num = numero.indexOf("(", ")", "-")
        if(num >= 0) {
            num = numero.replace("(", "")
            num = num.replace(")", "")
            num = num.replace("-", "")
            document.getElementById('number').value = num
            if(num == 11) {
                document.getElementById('number').readOnly = true
                const part1 = num.slice(0, 2)
                const part2 = num.slice(2, 7)
                const part3 = num.slice(7, 11)
                document.getElementById('number').type = "text"
                document.getElementById('number').value = `(${part1})${part2}-${part3}`
           }
        }else {
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
}

function reativarWhats () {
    document.getElementById('number').readOnly = false
}

function verificarCEP () {
    if(document.getElementById('cep').value == "") {
        document.getElementById('cep').style.width = "30%"
    }else {
        document.getElementById('cep').style.width = "45%"
        var cep = document.getElementById('cep').value
        var resultado = cep.indexOf("-")
        console.log(resultado)
        if(resultado >= 0) {
            resultado = cep.replace("-", "")
            document.getElementById('cep').value = resultado
            console.log(resultado)
            if(resultado == 8) {
                document.getElementById('cep').readOnly = true
                const part1 = resultado.slice(0,5)
                const part2 = resultado.slice(5,8)
                document.getElementById('cep').type = "text"
                document.getElementById('cep').value = `${part1}-${part2}` 
            }
        }else {
            if(cep.length == 8) {
                document.getElementById('cep').readOnly = true
                const part1 = cep.slice(0,5)
                const part2 = cep.slice(5,8)
                document.getElementById('cep').type = "text"
                document.getElementById('cep').value = `${part1}-${part2}` 
            }
        }
    }
}

function reativarCEP () {
    document.getElementById('cep').readOnly = false
}

function verificarEndereco () {
    if(document.getElementById('ender').value == "") {
        document.getElementById('ender').style.width = "160px"
    }else {
        document.getElementById('ender').style.width = "100%"
    }
}

function verificarBairro () {
    if(document.getElementById('comp').value == "") {
        document.getElementById('comp').style.width = "160px"
    }else {
        document.getElementById('comp').style.width = "160px"
    }
}

/*function aumentarCEP() {
    document.getElementById('cep').style.setProperty("width", "40%", "!important")
    verificarCEP()
}*/

function enviarDados() {
    console.log(`Email: ${document.getElementById('email').value}`)
    console.log(`Nome: ${document.getElementById('nome').value}`)
    console.log(`Senha: ${document.getElementById('senha').value}`)
    console.log(`Confirmar Senha: ${confirma}`)
    console.log(`WhatsApp: ${document.getElementById('number').value}`)
    console.log(`CEP: ${document.getElementById('cep').value}`)
    console.log(`Endereco: ${document.getElementById('ender').value}`)
    console.log(`Complemento: ${document.getElementById('comp').value}`)
    console.log(`UF: ${document.getElementById('UF').value}`)
    console.log(`Cidade: ${document.getElementById('city').value}`)
    console.log(`Bairro: ${document.getElementById('neigh').value}`)
}