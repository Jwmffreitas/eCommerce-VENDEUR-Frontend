cart = 0
busca = 0
troca = 0
var vcorpo = `<div class="recomendado" id="recomendado">
<i class="fa fa-exchange" onclick="trocar(vcorpo)" aria-hidden="true" style="position: absolute; top: 8px; right: 20px; font-size: 1.5rem; color: black; transform: rotate(90deg);"></i>
<h2 style="margin-top: 0; font-family: Helvetica;">Mostruário</h2>
<div class="produto">
<div class="caixa-produto">
    <img id="image" src="img/brinco.png" style="width: 100px; height: auto;">
</div>
<div>
    <h4 style="position: relative; top: -15px;">Pulseira Gemstone</h4>
    <p style="position: relative; top: -25px; color: gray;">Puls Gem Prec...</p>
    <img src="img/5star.png" style="width: 80px; position: relative; top: -25px; margin: 0;">
    <h4 style="position: relative; top: -35px; margin: 0;">R$ 8.612,00</h4>
    <button class="w3-button w3-black" style="position: relative; top: -35px; border-radius: 15px; outline: 0; font-size: 10px; height: 25px; padding: 0; padding-left: 10px; padding-right: 10px;" onclick="addItem()">Add to cart</button>
</div>
</div>
<div class="produto">
    <div class="caixa-produto">
        <img id="image" src="img/colar.png" style="width: 100px; height: auto;">
    </div>
    <div>
        <h4 style="position: relative; top: -15px;">Colar pingente</h4>
        <p style="position: relative; top: -25px; color: gray;">Ouro ping diam...</p>
        <img src="img/5star.png" style="width: 80px; position: relative; top: -25px; margin: 0;">
        <h4 style="position: relative; top: -35px; margin: 0;">R$ 4.320,00</h4>
        <button class="w3-button w3-black" style="position: relative; top: -35px; border-radius: 15px; outline: 0; font-size: 10px; height: 25px; padding: 0; padding-left: 10px; padding-right: 10px;" onclick="addItem()">Add to cart</button>
    </div>
</div>
<div class="produto">
<div class="caixa-produto">
    <img id="image" src="img/casal.png" style="width: 100px; height: auto;">
</div>
<div>
    <h4 style="position: relative; top: -15px;">Aliança Casal</h4>
    <p style="position: relative; top: -25px; color: gray;">Alianc ouro...</p>
    <img src="img/5star.png" style="width: 80px; position: relative; top: -25px; margin: 0;">
    <h4 style="position: relative; top: -35px; margin: 0;">R$ 1.220,00</h4>
    <button class="w3-button w3-black" style="position: relative; top: -35px; border-radius: 15px; outline: 0; font-size: 10px; height: 25px; padding: 0; padding-left: 10px; padding-right: 10px;" onclick="addItem()">Add to cart</button>
</div>
</div>
</div>`
var vcorpo2 = `        <div class="recomendado" id="recomendado">
<i class="fa fa-exchange" onclick="trocar(vcorpo)" aria-hidden="true" style="position: absolute; top: 8px; right: 20px; font-size: 1.5rem; color: black; transform: rotate(90deg);"></i>
<h2 style="margin-top: 0; font-family: Helvetica;">Mostruário</h2>
<div class="produto">
    <div class="caixa-produto">
        <img id="image" src="img/colar.png" style="width: 100px; height: auto;">
    </div>
    <div>
        <h4 style="position: relative; top: -15px;">Colar pingente</h4>
        <p style="position: relative; top: -25px; color: gray;">Ouro ping diam...</p>
        <img src="img/5star.png" style="width: 80px; position: relative; top: -25px; margin: 0;">
        <h4 style="position: relative; top: -35px; margin: 0;">R$ 4.320,00</h4>
        <button class="w3-button w3-black" style="position: relative; top: -35px; border-radius: 15px; outline: 0; font-size: 10px; height: 25px; padding: 0; padding-left: 10px; padding-right: 10px;" onclick="addItem()">Add to cart</button>
    </div>
</div>
<div class="produto">
    <div class="caixa-produto">
        <img id="image" src="img/casal.png" style="width: 100px; height: auto;">
    </div>
    <div>
        <h4 style="position: relative; top: -15px;">Aliança Casal</h4>
        <p style="position: relative; top: -25px; color: gray;">Alianc ouro...</p>
        <img src="img/5star.png" style="width: 80px; position: relative; top: -25px; margin: 0;">
        <h4 style="position: relative; top: -35px; margin: 0;">R$ 1.220,00</h4>
        <button class="w3-button w3-black" style="position: relative; top: -35px; border-radius: 15px; outline: 0; font-size: 10px; height: 25px; padding: 0; padding-left: 10px; padding-right: 10px;" onclick="addItem()">Add to cart</button>
    </div>
</div>
<div class="produto">
    <div class="caixa-produto">
        <img id="image" src="img/brinco.png" style="width: 100px; height: auto;">
    </div>
    <div>
        <h4 style="position: relative; top: -15px;">Pulseira Gemstone</h4>
        <p style="position: relative; top: -25px; color: gray;">Puls Gem Prec...</p>
        <img src="img/5star.png" style="width: 80px; position: relative; top: -25px; margin: 0;">
        <h4 style="position: relative; top: -35px; margin: 0;">R$ 8.612,00</h4>
        <button class="w3-button w3-black" style="position: relative; top: -35px; border-radius: 15px; outline: 0; font-size: 10px; height: 25px; padding: 0; padding-left: 10px; padding-right: 10px;" onclick="addItem()">Add to cart</button>
    </div>
</div>

</div>`
var loading = `<div style ="height: 70vh"><i class="fa fa-exchange" onclick="trocar(vcorpo)" aria-hidden="true" style="position: absolute; top: 8px; right: 20px; font-size: 1.5rem; color: black; transform: rotate(90deg);"></i>
<h2 style="margin-top: 0; font-family: Helvetica;">Mostruário</h2>
<img src="./img/loading.gif" style="width: 100px; height: auto;"></div>`

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

function trocar(vcorpo) {
   var html = document.getElementById('recomendado')
   html.innerHTML = `${loading}`
   setTimeout(() => {
      if(troca == 0) {
         var html = document.getElementById('recomendado')
         html.innerHTML = `${vcorpo}`
         troca = 1
      }else if(troca == 1) {
         var html = document.getElementById('recomendado')
         html.innerHTML = `${vcorpo2}`
         troca --
      }
   }, 2000)
}