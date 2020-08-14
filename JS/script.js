cart = 0
busca = 0

function addItem() {
  cart ++
  document.getElementById('qntdd').innerHTML = `${cart}`
  document.getElementById('qntdd').style.display = "inline"
  
  setTimeout(() => {
    document.getElementById('qntdd').style.color = "red"
  }, 500)

}

function aparecer() {
  if(busca == 0) {
    document.getElementById('busca').style.display = "flex"
    setTimeout(() => {
      document.getElementById('pesquisa').style.bottom = "65px"
      document.getElementById('pesquisa').style.boxShadow = "gray 0px 0px 15px"
    }, 0)
    busca = 1
  } else {
    document.getElementById('pesquisa').style.bottom = "20px"
    document.getElementById('pesquisa').style.boxShadow = "gray 0px 0px 0px"
    setTimeout(() => {
      document.getElementById('busca').style.display = "none"
    }, 600)
    busca = 0
  }
}