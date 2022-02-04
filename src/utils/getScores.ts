import { TOTAL_SCORE } from '../constants'

export const getScores = (score: number | null): number[] | null => {
  if (score === null) return null
  const arr: number[] = []
  for (let i = score; i <= TOTAL_SCORE; i += 0.1) {
    arr.push(Number(i.toFixed(1)))
  }
  console.log(arr)
  return arr
}
