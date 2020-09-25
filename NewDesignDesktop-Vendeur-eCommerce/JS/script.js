alianca = 0
anel = 0
brinco = 0

function mostrarAliancas() {
    if(alianca == 0) {
        $('.vAB').slideDown(500, function() {
            //$('.vB').css('display', 'flex')
            $('.openAL').append('<i>')
            $('.openAL i:first').attr('class', 'fas fa-times')
        })
        alianca = 1
    }else {
        $('.vAB').slideUp(600)
        setTimeout(() => {
            $('.openAL').append('<i>')
            $('.openAL i:first').attr('class', 'fas fa-angle-down')
        }, 400)
        alianca = 0
    }
}

function mostrarAneis() {
    if(anel == 0) {
        $('.vAC').slideDown(500, function() {
            $('.openAN').append('<i>')
            $('.openAN i:first').attr('class', 'fas fa-times')
        })
        anel = 1
    }else {
        $('.vAC').slideUp(600, function() {
            $('.openAN').append('<i>')
            $('.openAN i:first').attr('class', 'fas fa-angle-down')
        })
        anel = 0
    }
}

function mostrarBrincos () {
    if(brinco == 0) {
        $('.vAD').slideDown(500, function() {
            $('.openB').append('<i>')
            $('.openB i:first').attr('class' , 'fas fa-times')
        })
        brinco = 1
    }else {
        $('.vAD').slideUp(600, function() {
            $('.openB').append('<i>')
            $('.openB i:first').attr('class', 'fas fa-angle-down')
        })
        brinco = 0
    }
}