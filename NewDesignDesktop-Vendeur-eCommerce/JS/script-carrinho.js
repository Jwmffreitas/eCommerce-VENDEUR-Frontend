

function trocarPagamento() {
    var Pagamento = document.getElementById('PAGAMENTO')
    console.log(Pagamento.value)
    if(Pagamento.value == 'Boleto') {
        document.getElementById('bc').innerHTML = `<i class="fas fa-barcode fa-10x" style="text-shadow: gray 0px 0px 3px; color: #4B4242;"></i>`
        document.getElementById('Dados').innerHTML = ``
    }else {
        document.getElementById('bc').innerHTML = `<i class="fas fa-credit-card fa-10x" style="text-shadow: gray 0px 0px 3px; color: #4B4242;"></i>`
        document.getElementById('Dados').innerHTML = `<div style="margin-bottom: 30px;">
        <p>Nome no cartão:</p>
        <input class="w3-input w3-animate-input" id="nome" type="text" style="width:30%; background: none;" oninput="verificarNome()">
    </div>
    <div style="margin-bottom: 30px;">
        <p>Número do cartão:</p>
        <div style="display: flex; flex-flow: row wrap;" class="CreditNumber">
            <input class="w3-input" id="num1" type="number" style="width:90px; background: none; margin-right: 10px; font-size: 18px;" oninput="ProxInput()" onblur="AntInput()">
            <input class="w3-input" id="num2" type="number" style="width:90px; background: none; margin-right: 10px; font-size: 18px;" oninput="ProxInput()" onblur="AntInput()">
            <input class="w3-input" id="num3" type="number" style="width:90px; background: none; margin-right: 10px; font-size: 18px;" oninput="ProxInput()" onblur="AntInput()">
            <input class="w3-input" id="num4" type="number" style="width:90px; background: none; margin-right: 10px; font-size: 18px;" oninput="ProxInput()" onblur="AntInput()">
        </div>
    </div>
    <div>
        <p>Data de expiração:</p>
        <div>
            <select name="mes" id="mes">
                <option value="01">Janeiro</option>
                <option value="02">Fevereiro</option>
                <option value="03">Março</option>
                <option value="04">Abril</option>
                <option value="05">Maio</option>
                <option value="06">Junho</option>
                <option value="07">Julho</option>
                <option value="08">Agosto</option>
                <option value="09">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
            </select>
            <select name="ano" id="ano" style="width: 85px;">
                <option value="2020">2021</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
             <span style="margin-left: 10px;">CVV: </span><input class="w3-input" type="number" id="cvv" style="display: inline; width: 60px; height: 30px; background: none; font-size: 16px; text-align: center;" oninput="CVV()" onblur="AntInput()">
        </div>
    </div>`
    }
}


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