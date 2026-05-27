import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {

  const payload = JSON.stringify({
    title: "Notícia cache",
    content: "Conteúdo de teste...",
    url: "https://cache-test.com/fixa"
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // PRIMEIRA REQUISIÇÃO
  const res1 = http.post('http://localhost:3000/analyze', payload, params);

  sleep(1);

  // SEGUNDA REQUISIÇÃO (deve vir do cache)
  const res2 = http.post('http://localhost:3000/analyze', payload, params);

  const time1 = res1.timings.duration;
  const time2 = res2.timings.duration;

  check(res1, {
    'primeira status 200': (r) => r.status === 200,
  });

  check(res2, {
    'segunda status 200': (r) => r.status === 200,
    'segunda mais rápida': () => time2 < time1,
    'mesmo resultado': () => res1.body === res2.body,
  });
}