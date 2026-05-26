chrome.runtime.onMessage.addListener(

  async (message, sender, sendResponse) => {

    if (message.type === "ANALYZE_NEWS") {

      try {

        const response = await fetch(
          "http://localhost:3000/analyze",
          {

            method: "POST",

            headers: {
              "Content-Type": "application/json"
            },

            body: JSON.stringify(message.payload)
          }
        );

        const data = await response.json();

        sendResponse({
          success: true,
          data
        });

      } catch (error) {

        console.error("Erro background:");

        console.error(error);

        sendResponse({
          success: false,
          error: error.message
        });
      }

      return true;
    }
  }
);