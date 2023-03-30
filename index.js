let aFaire;
let array = [];
array = window.localStorage.maboite.split(",");

console.log(array);
for (i = 0; i < array.length; i++) {
  ul.innerHTML += "<li>" + array[i] + "</li>";
}

todo.addEventListener("input", (e) => {
  aFaire = e.target.value;
});
form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  array.push(aFaire);
  window.localStorage.maboite = array;
  console.log(array);
});

let fini;
window.ul.addEventListener("click", (e) => {
  if (fini == true) {
    ul.removeChild(e.target);
    fini = false;
  } else {
    let term = e.target.innerText;
    e.target.innerHTML = term + "(supprimer)";
    fini = true;
  }
});
