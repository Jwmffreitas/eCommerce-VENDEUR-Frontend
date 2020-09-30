var limite = 0
Produto = 0

function Mostrar(categoria, botao, titulo) {
    var On = $(categoria).attr("name")

    if(On == "oculto"){
        $(categoria).slideDown(500, function() {
            $(botao).removeClass('fas fa-angle-down')
            $(botao).addClass('fas fa-times')
        })
        $(categoria).attr('name', 'mostrou')
        console.log(On)
        //location.href = titulo
        }else{
        $(categoria).slideUp(600, function() {
            $(botao).removeClass('fas fa-times')
            $(botao).addClass('fas fa-angle-down')
        })
        $(categoria).attr('name', 'oculto')
        console.log(On)
        //location.href = titulo
    }
}

function abrirProduto() {
    document.getElementById('modal').style.display = "grid"
    document.getElementById('p-popup').innerHTML = `            <div>
                <i class="fas fa-times" onclick="fecharProduto()" style="font-size: 30px; color: white; float: right; margin-right: 10px; margin-top: 5px; margin-bottom: 5px;"></i>
            </div>
            <div id="produto-popup">
                <div style="display: grid; align-items: center; justify-content: center;">
                    <img style="width: 300px;" src="img/5a1cd0991d0697.0856172915118378491189.png" alt="">
                </div>
                <div id="produto">
                    <h3 style="font-family: helvetica;">ALIANCA OA</h3>
                    <p style="font-size: 16px; overflow-y: auto; height: 120px;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam error ipsum laboriosam dolor, aliquam cupiditate quo itaque voluptas at corrupti iure quaerat. Officia quod autem dicta debitis eum eveniet?</p>
                    <h2 style="color: red; font-family: helvetica;">R$ 2.340,00</h2>
                    <button class="w3-button w3-black w3-round-large" style="width: 200px;"><i class="fas fa-shopping-cart" style="margin-right: 10px; font-size: 18px;"></i>Adicionar ao Carrinho</button>
                    <label for="select">&emsp;Quantidade:&emsp; &emsp;</label><select class="w3-select" style="width: 50px; height: 30px; padding: 0; border-radius: 20px; border: none;" id="select">
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>

                    </select>
                    <button class="w3-button w3-white w3-round-large" style="width: 200px; margin-top: 5px; box-shadow: #707070 0px 0px 10px;"><i class="fas fa-cube" style="margin-right: 10px; font-size: 18px;"></i>&emsp;Visualizar modelo 3D</button>
                </div>
            </div>`
    $('#p-popup').toggle("normal")
}

function fecharProduto() {
    $('#p-popup').toggle('normal')
    //document.getElementById('p-popup').innerHTML = ``
    setTimeout(() => {
        document.getElementById('modal').style.display = "none"
    }, 500)
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block" 
}

function automatico() {
    setInterval(() => {
        plusSlides(1)
    }, 5000);
}