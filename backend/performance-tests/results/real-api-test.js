import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 2,
  iterations: 4, // no máximo 4 chamadas
};

export default function () {

  const payload = JSON.stringify({
    title: "Notícia teste real",
    content: "Um estudo científico recente aponta que...",
    url: "https://teste-" + Date.now()
  });

  const params = {
    headers: { 'Content-Type': 'application/json' },
  };

  const res = http.post('http://localhost:3000/analyze', payload, params);

  const body = JSON.parse(res.body);

  check(res, {
    'status 200': (r) => r.status === 200,
    'tem score': () => body.score !== undefined,
    'tem credibilidade': () => body.credibilidade !== undefined,
  });

  console.log("Resposta:", body);
}