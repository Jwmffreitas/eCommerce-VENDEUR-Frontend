abriu = false

function openMenu() {
  if (abriu == false) {
    document.getElementById("mySidebar").style.display = "grid"
    document.getElementById("mySidebar").style.height = "130px"
    document.getElementById("menu-button").innerHTML = "X"
    document.getElementById("modal").style.display = "block"
    abriu = true
  }else {
    document.getElementById("mySidebar").style.height = "0"
    document.getElementById("menu-button").innerHTML = "☰"
    document.getElementById("mySidebar").style.display = "none"
    document.getElementById("modal").style.display = "none"
    abriu = false
  }
}
