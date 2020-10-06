function verificarNome () {
    if(document.getElementById('nome').value == "") {
        document.getElementById('nome').style.width = "30%"
    }else {
        document.getElementById('nome').style.width = "100%"
    }
}

function ProxInput() {
    num1 = document.getElementById('num1').value
    num2 = document.getElementById('num2').value
    num3 = document.getElementById('num3').value
    num4 = document.getElementById('num4').value

    if(num1.length == 4) {
        document.getElementById('num1').readOnly = true
        document.getElementById('num2').focus()
        if(num2.length == 4) {
            document.getElementById('num2').readOnly = true
            document.getElementById('num3').focus()
            if(num3.length == 4) {
                document.getElementById('num3').readOnly = true
                document.getElementById('num4').focus()
                if(num4.length == 4) {
                    document.getElementById('num4').readOnly = true
                }
            }
        }
    }
}

function AntInput() {
    document.getElementById('num1').readOnly = false
    document.getElementById('num2').readOnly = false
    document.getElementById('num3').readOnly = false
    document.getElementById('num4').readOnly = false
    document.getElementById('cvv').readOnly = false
}

function CVV() {
    cvv = document.getElementById('cvv').value
    if(cvv.length == 3) {
        document.getElementById('cvv').readOnly = true
    }
}