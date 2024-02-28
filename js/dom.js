console.log(window);
const hablar = (texto) => {
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
};
let texto = "Soy un genio";
//hablar(texto);
/*******************************Document*****************************************/

console.log(document);
console.log(document.body);
console.log(document.documentElement);

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
//Remplaza a estos 3 buscadores
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
//Para buscar por Id es mejor getElement porque es mas liviano
console.log(document.getElementById("que-es"));
console.log(document.querySelector("#que-es"));
console.clear();
/**********************Atributos y Data-Attribute********************************/

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.getAttribute("lang"));
document.documentElement.setAttribute("lang", "es-AR");
console.log(document.documentElement.getAttribute("lang"));

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Cambiamos el data description";
console.log($linkDOM.dataset.description);
console.log($linkDOM.dataset.rel);
console.clear();

/**************************DOM - Estilos y Variables**************************/

const $linkDOMCss = document.styleSheets[1].cssRules[3].style;
const cssObj = getComputedStyle($linkDOM, null);
console.log($linkDOM.getComputedStyle);
console.log($linkDOMCss);
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.padding = "1rem";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.marginLeft = "auto";

//custom property

$linkDOMCss.setProperty("background-color", "rgb(165, 42, 42)");
$body = document.body;
const $linkRoot = document.styleSheets[1];
const $DOM = document.documentElement;

console.log($linkRoot);
let varDarkColor = getComputedStyle($DOM).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($DOM).getPropertyValue("--yellow-color");
console.log(varDarkColor);
console.log(varYellowColor);

$body.style.backgroundColor = varDarkColor;
console.clear();
/*************************************Clases css*************************************/

const $card = document.querySelector(".card");
console.log($card);

console.log($card.classList);
$card.classList.add("rotate45");
console.log($card.classList);
$card.classList.remove("rotate45");

console.clear();
/*************************************tecto y HTML*************************************/

const $WhatIsDOM = document.getElementById("que-es");

let text = `
<p>
El modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es una API para documentos HTML y XML.
</p>
<p>
Este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante JS.
</p>
<p>
<mark>El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores</mark>
</p>
`;

$WhatIsDOM.textContent = text;
$WhatIsDOM.innerHTML = text;
