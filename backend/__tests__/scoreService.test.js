import { calculateScore } from '../services/scoreService.js';
// Importa funções do Jest utilizadas nos testes
import { describe, test, expect } from '@jest/globals';

/**
 * =========================================================
 * TESTES UNITÁRIOS - SCORE SERVICE
 * =========================================================
 * 
 * Este arquivo testa o sistema de pontuação
 * e classificação de credibilidade do CHECK-IT.
 * 
 * A função calculateScore é responsável por:
 * 
 * 1. Somar a pontuação dos critérios analisados
 * 2. Definir o nível de credibilidade
 * 
 * Possíveis classificações:
 * - credibilidadeAlta
 * - credibilidadeMedia
 * - credibilidadeBaixa
 * 
 */

describe('Score Service - Sistema de Credibilidade CHECK-IT', () => {

  /**
   * =========================================================
   * TESTES DE ALTA CREDIBILIDADE
   * =========================================================
   */

  test('Deve retornar Alta Credibilidade com pontuação máxima (8)', () => {

    /**
     * Cenário ideal:
     * notícia considerada altamente confiável
     */

    const analysis = {

      // Possui múltiplas fontes → +3 pontos
      multiplasFontes: true,

      // Fonte considerada confiável → +2 pontos
      fonteConfiavel: true,

      // Não utiliza linguagem sensacionalista → +1 ponto
      semSensacionalismo: true,

      // Possui referências/fontes → +1 ponto
      possuiFontes: true,

      // Possui autor e data → +1 ponto
      possuiAutorEData: true
    };

    // Executa o cálculo da credibilidade
    const result = calculateScore(analysis);

    /**
     * Verifica se:
     * 
     * score final = 8
     * classificação = Alta
     */

    // Espera que a pontuação total seja 8
    expect(result.score).toBe(8);

    // Espera que a credibilidade seja Alta
    expect(result.credibilidade).toBe('credibilidadeAlta');
  });

  test('Deve retornar Alta Credibilidade com pontuação mínima (6)', () => {

    /**
     * Testa o limite mínimo da categoria Alta
     */

    const analysis = {
      multiplasFontes: true,      // +3
      fonteConfiavel: true,       // +2
      semSensacionalismo: true,   // +1
      possuiFontes: false,        // +0
      possuiAutorEData: false     // +0
    };

    const result = calculateScore(analysis);

    // Espera score total igual a 6
    expect(result.score).toBe(6);

    // Espera classificação Alta
    expect(result.credibilidade).toBe('credibilidadeAlta');
  });

  /**
   * =========================================================
   * TESTES DE MÉDIA CREDIBILIDADE
   * =========================================================
   */

  test('Deve retornar Média Credibilidade (5 pontos)', () => {

    /**
     * Cenário intermediário:
     * notícia razoável, porém com falhas
     */

    const analysis = {
      multiplasFontes: true,      // +3
      fonteConfiavel: false,      // +0
      semSensacionalismo: true,   // +1
      possuiFontes: true,         // +1
      possuiAutorEData: false     // +0
    };

    const result = calculateScore(analysis);

    /**
     * Verifica se:
     * 
     * 3 a 5 pontos = Média Credibilidade
     */

    // Espera pontuação final igual a 5
    expect(result.score).toBe(5);

    // Espera classificação Média
    expect(result.credibilidade).toBe('credibilidadeMedia');
  });

  /**
   * =========================================================
   * TESTES DE BAIXA CREDIBILIDADE
   * =========================================================
   */

  test('Deve retornar Baixa Credibilidade (0 pontos)', () => {

    /**
     * Cenário extremamente suspeito:
     * nenhum critério positivo encontrado
     */

    const analysis = {
      multiplasFontes: false,
      fonteConfiavel: false,
      semSensacionalismo: false,
      possuiFontes: false,
      possuiAutorEData: false
    };

    const result = calculateScore(analysis);

    // Espera score igual a 0
    expect(result.score).toBe(0);

    // Espera classificação Baixa
    expect(result.credibilidade).toBe('credibilidadeBaixa');
  });

  /**
   * =========================================================
   * TESTES DE ROBUSTEZ E SEGURANÇA
   * =========================================================
   * 
   * A IA pode retornar:
   * - campos ausentes
   * - valores null
   * - undefined
   * 
   * O sistema deve continuar funcionando
   * sem quebrar.
   */

  test('Deve tratar valores undefined/null como false', () => {

    const analysis = {

      // Campo ausente
      multiplasFontes: undefined,

      // Campo nulo
      fonteConfiavel: null,

      // Único critério positivo
      semSensacionalismo: true,

      possuiFontes: false,

      // Outro campo ausente
      possuiAutorEData: undefined
    };

    const result = calculateScore(analysis);

    /**
     * Apenas semSensacionalismo = true
     * 
     * Resultado esperado:
     * score = 1
     */

    // Espera pontuação final igual a 1
    expect(result.score).toBe(1);

    // Espera classificação Baixa
    expect(result.credibilidade).toBe('credibilidadeBaixa');
  });

});