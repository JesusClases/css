/* CSS -> (cc) 3con14
-------------------------------------------------

------------------------------------------------- */

const $escala = document.getElementById("escala");

$escala.addEventListener("change", escalar);

function escalar() {
  // let u;
  // u = "vmin";
  console.log(this.id, this.value);
  document.documentElement.style.setProperty(`--${this.id}`, this.value);
  document.getElementById("lbl-" + this.id).innerHTML = this.value;
}
