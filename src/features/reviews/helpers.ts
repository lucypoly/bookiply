import { FilterPayload, PaginationPayload } from './types'
import { getScores } from '../../utils'
import axios from 'axios'
import { API } from '../../constants'

export const getReviews = async (
  payload?: PaginationPayload & FilterPayload
) => {
  let url = `${API}reviews`

  if (payload) {
    const { page, filters } = payload
    const { score, channels } = filters
    url += '?'

    if (page !== null) {
      url += `_page=${page}`
    }
    if (score !== null) {
      const scores = getScores(filters.score)
        ?.map((item) => `&score=${item}`)
        .join('')

      url += `&score=${scores}`
    }
    if (channels !== null) {
      const channelStr = filters.channels
        ?.map((item) => `&channel=${item}`)
        .join('')

      url += `&channel=${channelStr}`
    }
  }
  return axios.get(url)
}
