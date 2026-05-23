//Arquivo principal da extensão

// cria o semáforo (inicia cinza)
createTrafficLight();

//Simulação temporária para testar a cor do semáforo
// simula resposta do backend após 2 segundos
setTimeout(() => {
  updateTrafficLight("credibilidadeBaixa");
}, 2000);

const title = document.title;
const url = window.location.href;

chrome.storage.local.set(
  {
    pageTitle: title,
    pageUrl: url,
  },
  () => {
    console.log("Salvo!", { title, url });
  },
);
