function idrandomInt(max) {
      return Math.floor(Math.random() * max);
  };




function agregarFila() {
  

  //Obtención de valores de los inputs

  const inputCodigo = document.getElementById("inpCodigo").value;
  const inputNom = document.getElementById("inputNom").value;
  const inputAnaquel = document.getElementById("inputAnaquel").value;
  const inputCantidad = document.getElementById("inputCantidad").value;

  //Creación de filas

  const tabla = document
    .getElementById("mostrarDatos")
    .getElementsByTagName("tbody")[0];
  const fila = tabla.insertRow();

  //Creación de Celdas

  const num = fila.insertCell(0);
  const codigo = fila.insertCell(1);
  const nombre = fila.insertCell(2);
  const anaquel = fila.insertCell(3);
  const cantidad = fila.insertCell(4);

  num.innerHTML = idrandomInt(200);
  codigo.innerHTML = inputCodigo;
  nombre.innerHTML = inputNom;
  anaquel.innerHTML = inputAnaquel;
  cantidad.innerHTML = inputCantidad;

  //Limpiar inputs

  document.getElementById("inpCodigo").value = "";
  document.getElementById("inputNom").value = "";
  document.getElementById("inputAnaquel").value = "";
  document.getElementById("inputCantidad").value = "";
}
 document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  agregarFila();
});
