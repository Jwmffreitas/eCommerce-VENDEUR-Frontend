function Mensagem() {
    var mnsgm = document.getElementById('mensagem')
    mnsgm.addEventListener('keyup', function(e) {
        if(e.key === 'Enter') {
            e.preventDefault()
            enviarMensagem()
        }
    })
}



function enviarMensagem() {
    mensagem = document.getElementById('mensagem').value
    if(mensagem != "") {
        document.getElementById("chat").innerHTML += `<div class="mensagem">
        <div class="balaoU">
            <h5 style="margin: 0; float: left; width: 94%;">
                ${mensagem}
            </h5>
            <div style="margin-top: 5px;">
                <i class="fas fa-paper-plane" style="float: right; font-size: 15px;"></i>
            </div>
        </div>
    </div>`
    document.getElementById('mensagem').value = ""
    }else {
        
    }
}