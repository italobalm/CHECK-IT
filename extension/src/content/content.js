//content.js
//Arquivo principal da extensão

// cria o semáforo (inicia cinza)
createTrafficLight();

//Simulação temporária para testar a cor do semáforo
// simula resposta do backend após 2 segundos
// setTimeout(() => {
//   updateTrafficLight("credibilidadeBaixa");
// }, 2000);

async function analyzePage() {

  try {

    const article = document.querySelector("article");

    const rawContent = article
      ? article.innerText
      : document.body.innerText;

    const cleanedContent = rawContent
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 5000);

    if (!cleanedContent || cleanedContent.length < 500) {

      console.log("Conteúdo insuficiente");

      return;
    }

    const title = document.title;

    console.log("Enviando análise...");

    const result = await chrome.runtime.sendMessage({

      type: "ANALYZE_NEWS",

      payload: {

        title,

        content: cleanedContent,

        url: window.location.href
      }
    });

    console.log(result);

    if (!result.success) {

      updateTrafficLight("credibilidadeMedia");

      return;
    }

    const data = result.data;

    updateTrafficLight(data.credibilidade);

  } catch (error) {

    console.error("Erro content:");

    console.error(error);

    updateTrafficLight("credibilidadeMedia");
  }
}

window.addEventListener("load", () => {

  setTimeout(() => {

    analyzePage();

  }, 1500);

});