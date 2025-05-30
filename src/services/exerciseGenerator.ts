export interface Exercise {
  question: string;
  options: string[];
  correctAnswer: string;
}

// Função para calcular o Máximo Divisor Comum
function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

// Função que simplifica a fração
function simplifyFraction(numerator: number, denominator: number): string {
  const divisor = gcd(numerator, denominator);
  return `${numerator / divisor}/${denominator / divisor}`;
}

// Gera uma fração que pode ser simplificada
function generateReducibleFraction(): [number, number] {
  let numerator = 1;
  let denominator = 1;
  do {
    numerator = Math.floor(Math.random() * 9) + 1;
    denominator = Math.floor(Math.random() * 9) + 2; // garante denominador ≥ 2
  } while (gcd(numerator, denominator) === 1); // repete se for irredutível

  return [numerator, denominator];
}

export function generateFractionExercise(): Exercise {
  const [numerator, denominator] = generateReducibleFraction();
  const correct = simplifyFraction(numerator, denominator);

  const options = new Set<string>();
  options.add(correct);

  while (options.size < 3) {
    const [fakeNumerator, fakeDenominator] = generateReducibleFraction();
    const fake = simplifyFraction(fakeNumerator, fakeDenominator);
    options.add(fake);
  }

  return {
    question: `Which shows ${numerator}/${denominator}?`,
    options: Array.from(options).sort(() => Math.random() - 0.5),
    correctAnswer: correct,
  };
}
