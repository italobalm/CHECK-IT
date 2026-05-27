import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 5,
  iterations: 10,

  thresholds: {
    http_req_duration: ['p(95)<3000'],
  },
};

export default function () {

  const payload = JSON.stringify({
    title: "Teste performance",
    content: "Conteúdo simulando notícia...",
    url: "https://teste-performance.com/" + Math.random()
  });

  const params = {
    headers: { 'Content-Type': 'application/json' },
  };

  const res = http.post('http://localhost:3000/analyze', payload, params);

  check(res, {
    'status 200': (r) => r.status === 200,
  });
}