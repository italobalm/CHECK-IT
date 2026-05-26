# CHECK-IT - Backend

Sistema de verificação de credibilidade e checagem de informações.

## Sobre o Projeto

O CHECK-IT é um backend desenvolvido para auxiliar na análise e verificação de credibilidade de informações, utilizando serviços de pontuação e utilitários para limpeza de respostas de IA.

## Tecnologias Utilizadas

- Node.js
- Jest (Testes Unitários)
- JavaScript

## Como Instalar e Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)

### Passos

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/check-it.git

# Entre na pasta do backend
cd check-it/backend

# Instale as dependências
npm install

# Execute os testes unitários
npm test

# Resultados dos Testes Unitários

## Test Suites

```bash
Test Suites: 2 passed, 2 total
```

## Testes Executados

```bash
Tests: 9 passed, 9 total
```

### cleanJson Utility

```bash
✓ Deve remover marcadores ```json
✓ Deve funcionar corretamente com JSON puro
✓ Deve remover espaços extras no início e no final
✓ Deve retornar "{}" para valores inválidos
```

### Score Service, Sistema de Credibilidade CHECK-IT

```bash
✓ Deve retornar Alta Credibilidade com pontuação máxima (8)
✓ Deve retornar Alta Credibilidade com pontuação mínima (6)
✓ Deve retornar Média Credibilidade (5 pontos)
✓ Deve retornar Baixa Credibilidade (0 pontos)
✓ Deve tratar valores undefined/null como false
```

---

# Cobertura de Testes

```bash
------------------|---------|----------|---------|---------|
File              | % Stmts | % Branch | % Funcs | % Lines |
------------------|---------|----------|---------|---------|
All files         |   100   |   100    |   100   |   100   |
services          |   100   |   100    |   100   |   100   |
scoreService.js   |   100   |   100    |   100   |   100   |
utils             |   100   |   100    |   100   |   100   |
cleanJson.js      |   100   |   100    |   100   |   100   |
------------------|---------|----------|---------|---------|
```

## Resumo

- 100% de cobertura de statements
- 100% de cobertura de branches
- 100% de cobertura de funções
- 100% de cobertura de linhas
- Todos os testes executados com sucesso