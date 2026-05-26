import { cleanJson } from '../utils/cleanJson.js';
import { describe, test, expect } from '@jest/globals';

/**
 * Testes Unitários do Utilitário cleanJson
 * 
 * Este arquivo testa a função `cleanJson`, responsável por limpar
 * as respostas retornadas pela IA Google Gemini.

 */

describe('cleanJson Utility', () => {

  /**
   * =========================================================
   * TESTES DE LIMPEZA PADRÃO
   * =========================================================
   */

  test('Deve remover marcadores ```json da resposta da IA', () => {

    // Simula uma resposta típica retornada pelo Gemini
    const raw = `\`\`\`json
{
  "multiplasFontes": true,
  "score": 7,
  "credibilidade": "credibilidadeAlta"
}
\`\`\``;

    // Executa a função
    const cleaned = cleanJson(raw);

    /**
     * Verifica se:
     * 
     * 1. O conteúdo JSON foi preservado
     * 2. Os marcadores ``` foram removidos
     */

    expect(cleaned).toContain('"multiplasFontes": true');
    expect(cleaned).not.toContain('```');
  });

  test('Deve funcionar corretamente com JSON puro', () => {

    // Caso onde a IA já retorna JSON limpo
    const raw = '{"score": 8, "credibilidade": "credibilidadeAlta"}';

    // Executa a limpeza
    const cleaned = cleanJson(raw);

    /**
     * Como o JSON já está correto,
     * nada deve ser alterado.
     */
    expect(cleaned).toBe(raw);
  });

  test('Deve remover espaços extras no início e no final', () => {

    // Resposta com espaços desnecessários
    const raw = '   {"score": 5, "credibilidade": "credibilidadeMedia"}   ';

    const cleaned = cleanJson(raw);

    /**
     * A função deve aplicar trim()
     * removendo espaços externos
     */
    expect(cleaned).toBe(
      '{"score": 5, "credibilidade": "credibilidadeMedia"}'
    );
  });

  /**
   * =========================================================
   * TESTES DE ROBUSTEZ E SEGURANÇA
   * =========================================================
   * 
   * Esses testes verificam se a função
   * consegue lidar com entradas inválidas
   * sem gerar erro na aplicação.
   */

  test('Deve retornar "{}" para valores inválidos', () => {

    /**
     * Casos comuns de falha:
     * 
     * - resposta vazia da IA
     * - erro de integração
     * - tipo incorreto
     * - valor inexistente
     */

    expect(cleanJson(null)).toBe("{}");
    expect(cleanJson(undefined)).toBe("{}");

    // String vazia
    expect(cleanJson("")).toBe("{}");

    // Apenas espaços
    expect(cleanJson("   ")).toBe("{}");

    // Tipo numérico
    expect(cleanJson(123)).toBe("{}");

    // Objeto em vez de string
    expect(cleanJson({})).toBe("{}");
  });

});