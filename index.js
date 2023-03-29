let aFaire;
let array = [];
todo.addEventListener("input", (e) => {
  aFaire = e.target.value;
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  array.push(aFaire);

  let li = document.createElement("li");
  console.log(array);
  let longueur = array.length;
  ul.appendChild(li);
  li.innerText = array[longueur - 1];
  li.addEventListener("click", () => {
    console.log("ok");
  });
});
