cart = 0

function addItem() {
  cart ++
  document.getElementById('qntdd').innerHTML = `${cart}`
  document.getElementById('qntdd').style.display = "inline"
  
  setTimeout(() => {
    document.getElementById('qntdd').style.color = "red"
  }, 500)

}