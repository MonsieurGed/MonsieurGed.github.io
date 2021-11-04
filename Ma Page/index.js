const nom = document.querySelector('input[type = "text"]');
const age = document.querySelector("#Age");
const cat = document.querySelectorAll('input[type="radio"]');
const t = document.querySelector("#o");
const f = document.querySelector("#n");
let variable = "o";
let tampon;

console.log(t);
console.log(nom);
console.log(age);
console.log(cat);

nom.addEventListener("input", (e) => {
  console.log(e.target.value);
});

age.addEventListener("input", (e) => {
  tampon = e.target.value;
  return tampon;
});

// cat.forEach("input", (e) => {
//   console.log(e.target.value);
// });

// const rep = document.querySelector(".rep");
// alert(tampon);
// const a = document.rep.innerHTML;
// console.log(a);
// `<h3> ${nom} Vous etes client  et vous avez ${age} ans. Merci de continuer votre saisie!</h3>`;
// console.log(rep);

t.addEventListener("click", (e) => {
  variable = e.target.id;
  if (variable == "o") {
    console.log(age.target.value);
  }
});
