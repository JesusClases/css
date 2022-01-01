// TRANFORMACIONES CSS-2D

const $d = document;
const $box = document.getElementById("box");
const $prop = document.documentElement;
const $resetDim = document.getElementById("dim-lbl");

document.addEventListener("change", (e) => {
  const $eleID = e.target.id;
  const $eleValor = e.target.value;
  reset($eleID);
  switch ($eleID) {
    case "dim":
      $prop.style.setProperty(`--${$eleID}`, `${$eleValor}vmin`);
      $d.getElementById(`${$eleID}-uni`).innerHTML = `${$eleValor}vmin`;
      break;
    case "tras":
      $box.style.transform = `translate(${$eleValor}px)`;
      $d.getElementById(`${$eleID}-uni`).innerHTML = `${$eleValor}px`;
      break;
    case "rot":
      $box.style.transform = `rotate(${$eleValor}deg)`;
      $d.getElementById(`${$eleID}-uni`).innerHTML = `${$eleValor}deg`;
      break;
    case "esc":
      $box.style.transform = `scale(${$eleValor})`;
      $d.getElementById(`${$eleID}-uni`).innerHTML = `${$eleValor}`;
      break;
    case "tor":
      $box.style.transform = `skew(${$eleValor}deg)`;
      $d.getElementById(`${$eleID}-uni`).innerHTML = `${$eleValor}deg`;
      break;
    default:
      return;
  }
});

$resetDim.addEventListener("click", () => {
  $d.getElementById("dim").value = 45;
  $d.getElementById("dim-uni").innerHTML = "45vmin";
  $prop.style.setProperty("--dim", "45vmin");
});

function reset(t) {
  if (t !== "tras") {
    $d.getElementById("tras").value = 0;
    $d.getElementById("tras-uni").innerHTML = "0px";
  }
  if (t !== "rot") {
    $d.getElementById("rot").value = 0;
    $d.getElementById("rot-uni").innerHTML = "0deg";
  }
  if (t !== "esc") {
    $d.getElementById("esc").value = 1;
    $d.getElementById("esc-uni").innerHTML = "1";
  }
  if (t !== "tor") {
    $d.getElementById("tor").value = 0;
    $d.getElementById("tor-uni").innerHTML = "0deg";
  }
}
