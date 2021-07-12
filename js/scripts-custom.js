function getlink() {
  var aux = document.createElement("input");
  aux.setAttribute("value", window.location.href.split("?")[0].split("#")[0]);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  var css = document.createElement("style");
  var estilo = document.createTextNode(
    "#aviso {position:fixed; z-index: 999; widht: 120px; top:30%;left:50%;margin-left: -60px;padding: 20px; color: #fff; background: #102649;border-radius: 30px 0px 30px 0px;font-size: 14px;}"
  );
  css.appendChild(estilo);
  document.head.appendChild(css);
  var aviso = document.createElement("div");
  aviso.setAttribute("id", "aviso");
  var contenido = document.createTextNode("URL copiada");
  aviso.appendChild(contenido);
  document.body.appendChild(aviso);
  window.load = setTimeout("document.body.removeChild(aviso)", 2000);
}

var nav = document.querySelector("nav");
var dropdown = document.getElementById("navbarSupportedContent");
var menu = document.getElementById("menu");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-navbar-light", "shadow");
    document.getElementById("logo").src =
      "https://valmact.com/img/logo/valmact.svg";
    dropdown.classList.add("navbar-collapse-b");
    menu.classList.add("menu-b");
  } else {
    nav.classList.remove("bg-navbar-light", "shadow");
    document.getElementById("logo").src =
      "https://valmact.com/img/logo/valmact_b.svg";
    dropdown.classList.remove("navbar-collapse-b");
    menu.classList.remove("menu-b");
  }
});

console.log("Create by: [Github] PhynxMorales ");
