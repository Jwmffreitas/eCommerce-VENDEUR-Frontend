var limite = 0
Produto = 0

function Mostrar(categoria, botao, titulo) {
    var On = $(categoria).attr("name")

    if(On == "oculto"){
        $(categoria).slideDown(500, function() {
            $(botao).removeClass('fas fa-angle-down')
            $(botao).addClass('fas fa-times')
        })
        $(categoria).attr('name', 'mostrou')
        console.log(On)
        //location.href = titulo
        }else{
        $(categoria).slideUp(600, function() {
            $(botao).removeClass('fas fa-times')
            $(botao).addClass('fas fa-angle-down')
        })
        $(categoria).attr('name', 'oculto')
        console.log(On)
        //location.href = titulo
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