/**
 * cleanJson.js
 * 
 * Limpa a resposta da IA Gemini removendo marcadores de código.
 */

export function cleanJson(raw) {

  // Proteção contra todas as entradas inválidas
  if (raw === null || 
      raw === undefined || 
      typeof raw !== 'string' || 
      raw.trim() === "") {           // ← Adicionado tratamento para string vazia
    return "{}";
  }

  // Limpeza da resposta
  return raw
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}