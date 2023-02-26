export function sum(...numbers: number[]) {
  return numbers.reduce((prev, curr) => prev + curr)
}
