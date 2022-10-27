function calcular(elonMusk, salario, usd, resultado, nombre) {
  resultado = salario / usd;
  resultado = resultado * 12;
  resultado = elonMusk / resultado;
  document.getElementById("re").innerHTML =
  "Lo lamento " +
  nombre.value +
  " te faltan " +
  parseInt(resultado) +
  " años para llegar a tener la guita de Elon Musk :'(";
}
btn.addEventListener("click", () => {
  let nombre = document.getElementById("nombre"),
    salario = parseInt(document.getElementById("salario").value),
    usd = parseInt(document.getElementById("usd").value),
    btn = document.getElementById("btn"),
    elonMusk = 214000000000,
    resultado = 0

  calcular(elonMusk, salario, usd, resultado, nombre);
  localStorage.setItem("resultado", resultado.value)
  localStorage.setItem("nombre", nombre.value);

});
