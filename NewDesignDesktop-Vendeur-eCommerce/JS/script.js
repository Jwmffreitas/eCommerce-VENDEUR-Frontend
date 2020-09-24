x = 0

function mostrarAliancas() {
    if(x == 0) {
        $('.vB').slideDown(0, function() {
            $('.vB').css('display', 'flex')
            $('.open').append('<i>')
            $('.open i:first').attr('class', 'fas fa-times')
        })
        x = 1
    }else {
        $('.vB').slideUp(500)
        setTimeout(() => {
            $('.open').append('<i>')
            $('.open i:first').attr('class', 'fas fa-angle-down')
        }, 400)
        x = 0
    }
}