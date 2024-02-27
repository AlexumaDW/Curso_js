console.log(window);
const hablar = (texto) => {
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
};
let texto = "Soy un genio";
//hablar(texto);
/********************************Document*****************************************/

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
