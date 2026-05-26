export function withTimeout(promise, ms) {

  const timeout = new Promise((_, reject) => {

    setTimeout(() => {
      reject(new Error("Timeout da IA"));
    }, ms);

  });

  return Promise.race([promise, timeout]);
}