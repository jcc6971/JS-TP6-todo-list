let aFaire;
let array = [];
let fini;
let term;

// transfert de localstorage vers le tableau
array = window.localStorage.maboite.split(",");

// affichage direct du tableau en list html
for (i = 0; i < array.length; i++) {
  ul.innerHTML += "<li>" + array[i] + "</li>";
}
todo.focus();

// valeur de l'input dans variable aFaire
todo.addEventListener("input", (e) => {
  aFaire = e.target.value;
});

// variable aFaire vers tableau
form.addEventListener("submit", (e) => {
  array.push(aFaire);
  window.localStorage.maboite = array;
});

//evenement au click dans list html
window.ul.addEventListener("click", (e) => {
  if (fini == true) {
    ul.removeChild(e.target);
    array.splice(array.indexOf(term), 1);
    window.localStorage.maboite = array;
    fini = false;
  } else {
    e.target.classList.add("check");
    fini = true;
  }
});
