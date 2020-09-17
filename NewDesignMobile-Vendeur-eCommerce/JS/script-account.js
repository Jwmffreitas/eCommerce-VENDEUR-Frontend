var x = 0


function mostrarPedidos() {
    if(x == 0) {
        document.getElementById('seta').style.transform = "rotate(360deg)"
        document.getElementById('seta').style.left = "-10px"
        document.getElementById('pedidos').style.display = "grid"
        x = 1
    }else {
        document.getElementById('seta').style.transform = "rotate(270deg)"
        document.getElementById('seta').style.left = "0px"
        document.getElementById('pedidos').style.display = "none"
        x = 0
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