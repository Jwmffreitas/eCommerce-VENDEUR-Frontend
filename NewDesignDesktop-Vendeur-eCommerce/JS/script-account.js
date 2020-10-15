function openProd(pedido, botao) {
    var abrido = $(pedido).attr('name')
    console.log(pedido)
    console.log(botao)

    if(abrido == "oculto") {
        $(pedido).slideDown(500, function(){
            $(botao).css('transform', 'rotate(180deg)')
        })
        $(pedido).attr('name', 'mostrou')
    }else {
        $(pedido).slideUp(500, function() {
            $(botao).css('transform', 'rotate(0deg)')
        })
        $(pedido).attr('name', 'oculto')
    }
}