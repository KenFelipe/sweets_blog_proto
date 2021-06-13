export function toBRLNotation(value: number) {
  return 'R$ ' + value.toFixed(2).replace('.', ',')
}
