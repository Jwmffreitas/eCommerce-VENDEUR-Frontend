var limite = 0
Mostrou = 0
Produto = 0

function Mostrar(categoria, botao) {
    if(Mostrou == 0){
        $(categoria).slideDown(500, function() {
            $(botao).removeClass('fas fa-angle-down')
            $(botao).addClass('fas fa-times')
        })
        Mostrou = 1
    }else{
        $(categoria).slideUp(600, function() {
            $(botao).removeClass('fas fa-times')
            $(botao).addClass('fas fa-angle-down')
        })
        Mostrou = 0
    }
}

function abrirProduto() {
    if(Produto == 0) {
        document.getElementById('modal').style.display = "grid"
        $('#p-popup').toggle("normal")
    }
}

function fecharProduto() {
    $('#p-popup').toggle('normal')
    setTimeout(() => {
        document.getElementById('modal').style.display = "none"
    }, 500)
}