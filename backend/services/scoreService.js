export function calculateScore(analysis) {

  let score = 0;

  if (analysis.multiplasFontes) score += 3;

  if (analysis.fonteConfiavel) score += 2;

  if (analysis.semSensacionalismo) score += 1;

  if (analysis.possuiFontes) score += 1;

  if (analysis.possuiAutorEData) score += 1;

  let credibilidade = "";

  if (score >= 6) {
    credibilidade = "credibilidadeAlta";
  }
  else if (score >= 3) {
    credibilidade = "credibilidadeMedia";
  }
  else {
    credibilidade = "credibilidadeBaixa";
  }

  return {
    score,
    credibilidade
  };
}