x = 0

function mostrarAliancas() {
    if(x == 0) {
        $('.vAB').slideDown(500, function() {
            //$('.vB').css('display', 'flex')
            $('.open').append('<i>')
            $('.open i:first').attr('class', 'fas fa-times')
        })
        x = 1
    }else {
        $('.vAB').slideUp(600)
        setTimeout(() => {
            $('.open').append('<i>')
            $('.open i:first').attr('class', 'fas fa-angle-down')
        }, 400)
        x = 0
    }
}