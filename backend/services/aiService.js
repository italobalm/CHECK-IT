import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

import { cleanJson } from "../utils/cleanJson.js";
import { withTimeout } from "../utils/timeout.js";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-3.5-flash"
});

export async function analyzeNews(data) {

  const prompt = `
Você é um sistema especialista em detecção de fake news e desinformação.

Sua função é analisar notícias, páginas e conteúdos online para identificar sinais de credibilidade ou possível manipulação.

Analise cuidadosamente os seguintes critérios:

1. O título ou conteúdo da notícia aparece em mais de um site confiável?
- Se sim: 3 pontos
- Se não: 0 pontos

2. O site é reconhecido como confiável?
Exemplos:
- G1
- BBC News
- Reuters
- Nature
- ScienceDirect
- Revistas científicas
- Jornais conhecidos

- Se sim: 2 pontos
- Se não: 0 pontos

3. A notícia evita linguagem sensacionalista?
Exemplos de linguagem suspeita:
- "URGENTE"
- "CHOCANTE"
- "VOCÊ NÃO VAI ACREDITAR"
- exageros emocionais
- indução de medo
- manipulação emocional

- Se evita sensacionalismo: 1 ponto
- Se usa sensacionalismo: 0 pontos

4. O site apresenta fontes, referências ou dados verificáveis?
- Se sim: 1 ponto
- Se não: 0 pontos

5. A notícia apresenta autor identificado e data clara de publicação?
- Se sim: 1 ponto
- Se não: 0 pontos

Classificação final da credibilidade:

- 6 a 8 pontos = Alta credibilidade
- 3 a 5 pontos = Média credibilidade
- 0 a 2 pontos = Baixa credibilidade

IMPORTANTE:
- Seja rigoroso na análise.
- Notícias sem fonte devem perder credibilidade.
- Textos muito emocionais ou alarmistas são suspeitos.
- Sites desconhecidos devem ser tratados com cautela.
- Conteúdos científicos e jornalísticos devem ganhar credibilidade.
- Não invente informações.
- Responda SOMENTE JSON válido.
- Não escreva explicações fora do JSON.

Formato obrigatório da resposta:

{
  "multiplasFontes": true,
  "fonteConfiavel": true,
  "semSensacionalismo": true,
  "possuiFontes": true,
  "possuiAutorEData": true,
  "score": 7,
  "credibilidade": "credibilidadeAlta",
  "explicacao": "explicação curta"
}

Regras do score:
- multiplasFontes = 3 pontos
- fonteConfiavel = 2 pontos
- semSensacionalismo = 1 ponto
- possuiFontes = 1 ponto
- possuiAutorEData = 1 ponto

A credibilidade DEVE ser:
- "credibilidadeAlta" para score entre 6 e 8
- "credibilidadeMedia" para score entre 3 e 5
- "credibilidadeBaixa" para score entre 0 e 2

Título:
${data.title}

Conteúdo:
${data.content}

URL:
${data.url}
`;

  const result = await withTimeout(

    model.generateContent(prompt),

    10000

  );

  const raw = result.response.text();

  const cleaned = cleanJson(raw);

  return JSON.parse(cleaned);
}