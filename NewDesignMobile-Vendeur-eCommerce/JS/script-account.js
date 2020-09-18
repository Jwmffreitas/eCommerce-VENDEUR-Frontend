var x = 0
var y = 0

function mostrarPedidos() {
    if(x == 0) {
        document.getElementById('seta').style.transform = "rotate(360deg)"
        document.getElementById('seta').style.left = "-10px"
        $('#pedidos').slideDown(900)
        document.getElementById('oChat').style.marginTop = "10px"
        x = 1
    }else {
        document.getElementById('seta').style.transform = "rotate(270deg)"
        document.getElementById('seta').style.left = "0px"
        $('#pedidos').slideUp(500)
        document.getElementById('oChat').style.marginTop = "-20px"
        x = 0
    }
}

function abrirFoto() {
    if(y == 0) {
        document.getElementById('modal').style.display = "block"
        document.getElementById('foto').style.display = "grid"
        y = 1
    }else {
        document.getElementById('modal').style.display = "none"
        document.getElementById('foto').style.display ="none" 
        y = 0
        $('#photo').attr("src", document.getElementById('file').value)
    }
}

function aparecer() {
    if(busca == 0) {
       document.getElementById('s').style.transition = "1s"
      document.getElementById('busca').style.display = "flex"
      document.getElementById('s').style.color = "#c9a146"
      setTimeout(() => {
        document.getElementById('pesquisa').style.bottom = "65px"
        document.getElementById('pesquisa').style.boxShadow = "gray 0px 0px 15px"
      }, 0)
      busca = 1
    } else {
     document.getElementById('s').style.color = "gray"
      document.getElementById('pesquisa').style.bottom = "20px"
      document.getElementById('pesquisa').style.boxShadow = "gray 0px 0px 0px"
      setTimeout(() => {
        document.getElementById('busca').style.display = "none"
      }, 600)
      busca = 0
    }
  }
  
  function pesquisar() {
    var search = document.getElementById('search')
  
    search.addEventListener('keyup', function(e) {
      if(e.keyCode === 13) {
        e.preventDefault()
        document.getElementById('btn-srch').click()
      }
    })
  }
  
  function p(x) {
    document.getElementById('search').value = ""
    document.getElementById('s').style.color = "gray"
    document.getElementById('pesquisa').style.bottom = "20px"
    setTimeout(() => {
       document.getElementById('busca').style.display = "none"
    }, 600)
    busca = 0
  }