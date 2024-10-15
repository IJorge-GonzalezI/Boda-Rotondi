const playSound = function () {
  var sonido = new Audio("Siddhartha");
  sonido.play();
  document.removeEventListener("click", playSound);
};
document.addEventListener("click", playSound);
