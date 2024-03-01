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

/*const $linkDOMCss = document.styleSheets[1].cssRules[3].style;
const cssObj = getComputedStyle($linkDOM, null);
console.log($linkDOM.getComputedStyle);
console.log($linkDOMCss);
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.padding = "1rem";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.marginLeft = "auto";*/

//custom property

/*$linkDOMCss.setProperty("background-color", "rgb(165, 42, 42)");
$body = document.body;
const $linkRoot = document.styleSheets[1];
const $DOM = document.documentElement;

console.log($linkRoot);
let varDarkColor = getComputedStyle($DOM).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($DOM).getPropertyValue("--yellow-color");
console.log(varDarkColor);
console.log(varYellowColor);

$body.style.backgroundColor = varDarkColor;*/
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
console.clear();

/*******************************Recorriendo el DOM*******************************/

//sconst $cards = document.querySelector(".cards");
/*s                                               *SIEMPRE* que quieras cargar te pido por favor que *CONSULTES EL CVU A ESTE NUMERO* antes de enviar el dinero ya que los vamos rotando para poder ofrecer una mejor atención! ☺
*SIEMPRE* que quieras cargar te pido por favor que *CONSULTES EL CVU A ESTE NUMERO* antes de enviar el dinero ya que los vamos rotando para poder ofrecer una mejor atención! ☺

console.log($cards);
console.log($cards.children);
console.log($cards.children[0]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);*/

/****************************Creando Elementos y Fragmentos***************************/

/*const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Blanco"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://place-hold.it/300");
$img.setAttribute("alt", "None");
$figure.classList.add("card");
$figure2.classList.add("card");

$cards.appendChild($figure);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$figcaption.appendChild($figcaptionText);
$cards.appendChild($figure2);

$figure2.innerHTML = `        
<img src="https://place-hold.it/300" alt="None">
<figcaption>none</figcaption>
</img>`;

const estaciones = ["verano", "primavera", "otoño", "invierno"];
$ul = document.createElement("ul");
document.getElementById("estaciones").appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["asia", "europa", "america", "africa", "oceania"];
$ul2 = document.createElement("ul");
document.getElementById("continentes").appendChild($ul2);
continentes.forEach((el) => {
  $ul2.innerHTML += `<li>${el}</li>`;
});

const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
$ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

$ul3.appendChild($fragment);
document.getElementById("meses").appendChild($ul3);*/

/****************************Templates***************************/

/*const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "template",
      img: "https://place-hold.it/300",
    },
    {
      title: "template",
      img: "https://place-hold.it/300",
    },
    {
      title: "template",
      img: "https://place-hold.it/300",
    },
    {
      title: "template",
      img: "https://place-hold.it/300",
    },
    {
      title: "template",
      img: "https://place-hold.it/300",
    },
    {
      title: "template",
      img: "https://place-hold.it/300",
    },
    {
      title: "template",
      img: "https://place-hold.it/300",
    },
    {
      title: "template",
      img: "https://place-hold.it/300",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector(".card").setAttribute("src", el.img);
  $template.querySelector(".card").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);

  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);*/

/**************************** Modificando Elementos (Old Style)***************************/

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true),
  $colgate = document.getElementById("colgate");

$newCard.innerHTML = `        
<img src="https://place-hold.it/300" alt="Remplazadora">
<figcaption>Remplazo</figcaption>
</img>`;

$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]);
//$cards.insertBefore($newCard, $cards.firstElementChild);
//$cards.removeChild($cards.children[4]);

$colgate.appendChild($cloneCards);
