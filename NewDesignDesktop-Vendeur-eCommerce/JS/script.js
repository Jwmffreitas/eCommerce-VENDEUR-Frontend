Mostrou = 0

function Mostrar(categoria, botao, secao) {
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

function rodarDestaque() {

}