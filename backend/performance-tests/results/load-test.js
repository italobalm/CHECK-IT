import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 50,
  duration: '20s',

  thresholds: {
    http_req_duration: ['p(95)<3000'],
    http_req_failed: ['rate==0'],
  },
};

export default function () {

  const payload = JSON.stringify({
    title: "Teste carga",
    content: "Conteúdo simulando notícia...",
    url: "https://teste.com/" + Math.random()
  });

  const params = {
    headers: { 'Content-Type': 'application/json' },
  };

  const res = http.post('http://localhost:3000/analyze', payload, params);

  check(res, {
    'status 200': (r) => r.status === 200,
  });
}