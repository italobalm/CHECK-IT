//Arquivo principal da extensão

// cria o semáforo (inicia cinza)
createTrafficLight();

//Simulação temporária para testar a cor do semáforo
// simula resposta do backend após 2 segundos
setTimeout(() => {
  updateTrafficLight("credibilidadeBaixa");
}, 2000);