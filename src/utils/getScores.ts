import { TOTAL_SCORE } from '../constants'

export const getScores = (score: number | null): number[] | null => {
  if (score === null) return null
  const number = Math.floor(score)

  const index = TOTAL_SCORE - number
  const arr: number[] = []
  for (let i = 0; i < index; i++) {
    ;[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9].forEach((dec) => {
      if (number + i + dec > score) {
        arr.push(number + dec + i)
      }
    })
  }

  return arr
}
