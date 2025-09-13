// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value;

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);

  // Mostrar en la lista con <p>
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += "<p>" + amigos[i] + "</p>";
  }

  input.value = "";
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista.");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "<p>" + amigos[indice] + "</p>";
}
