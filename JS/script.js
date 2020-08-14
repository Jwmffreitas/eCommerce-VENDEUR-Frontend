cart = 0

function addItem() {
  cart ++
  document.getElementById('qntdd').innerHTML = `${cart}`
  document.getElementById('qntdd').style.display = "inline"
  
  setTimeout(() => {
    document.getElementById('qntdd').style.color = "red"
  }, 500)

}

function aparecer() {
  setTimeout(() => {
    document.getElementById('rodape').style.bottom = "20px"
  }, 500)
}