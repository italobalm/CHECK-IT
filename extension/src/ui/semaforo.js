//Cria o semáforo na tela

function createTrafficLight() {
  const existing = document.getElementById("checkit-semaforo");

  // evita duplicação, caso o semáforo já exista na página
  if (existing) return;

  // container principal
  const container = document.createElement("div");
  container.id = "checkit-semaforo";
  container.className = "semaforo-container";

  //Cria cada luz do semáforo
  function createLight(id) {
    const light = document.createElement("div");
    light.id = id;
    light.className = "light";
    return light;
  }

  // ID das luzes
  const red = createLight("checkit-light-red");
  const yellow = createLight("checkit-light-yellow");
  const green = createLight("checkit-light-green");

  // adiciona as luzes ao container
  container.appendChild(red);
  container.appendChild(yellow);
  container.appendChild(green);

  // adiciona o container ao corpo da página
  document.body.appendChild(container);
}

//Atualiza o semáforo conforme resposta recebida
function updateTrafficLight(status) {
  // pega as luzes pelos IDs
  const red = document.getElementById("checkit-light-red");
  const yellow = document.getElementById("checkit-light-yellow");
  const green = document.getElementById("checkit-light-green");

  if (!red || !yellow || !green) return;

  // reseta tudo para cinza
  red.style.background = "#555";
  yellow.style.background = "#555";
  green.style.background = "#555";

  // lógica para acender a luz correta com base no status recebido
  switch (status) {
    case "resultadoBaixo":
    case "credibilidadeBaixa":
      red.style.background = "red";
      break;

    case "credibilidadeMedia":
      yellow.style.background = "yellow";
      break;

    case "credibilidadeAlta":
      green.style.background = "lime";
      break;
  }
}
